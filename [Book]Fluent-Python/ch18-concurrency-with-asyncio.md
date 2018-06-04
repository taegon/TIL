# 18장 asyncio를 이용한 동시성

> 동시성을 구조, 병렬성은 실행에 관한 것이다. - 롭 파이크의 [Concurrency Is Not Paralleism (It's Better)](https://blog.golang.org/concurrency-is-not-parallelism)

이미리 사이먼(Imre Simon)은 과학에서의 2대 죄악으로 **동일한 것을 의미하기 위해 다른 단어를 사용하는 것**과 **동일한 단어를 이용해서 여러 가지를 의미하는 것**이라고 이야기했다.

asyncio는 파이썬 3.4에서 추가되었고, 3.3과도 호환되지만, `yield from` 표현식을 많이 사용하므로, 그 이전 버전과는 호환되지 않는다. Trollius 프로젝트는 파이썬 2.6 이후 버전으로 하위 포팅된 프로젝트이다.

## 스레드와 코루틴 비교

* `ayncio.Task`와 `threading.Thread`는 거의 대등하다.
* `Task`는 코루틴을 구동하고, Thread는 콜러블을 호출한다.
* `Task`는 객체를 직접생성하지 않고, `asyncio.async()`나 `loop.create_task()`를 통해 생성한다.
* `Task` 객체는 생성과 동시에 실행되고, 쓰레드는 start를 호출해줘야 한다.
* 스레드는 외부에서 중단시킬 수 있는 수 없고, `Task`는 코루틴 안에 `CancelledError`를 발생시키는 `Task.cancel()`를 호출할 수 있다.
* 스레드에서는 `supervisor()`를 그냥 호출하지만, async 버전에서는 `loop.run_until_complete()`로 호출해야 한다.

### asyncio.Future: 논블로킹 설계

`asyncio.Future`와 `concurrent.futures.Future`는 인터페이스가 거의 같지만, 다르게 구현되어 있어 호환되지 않는다.

`asyncio.Future`가 다른 점은 다음과 같다.

* 코루틴 안에서 `yield from`으로 하위 함수를 호출하므로, 제어권을 돌려받기 위해 호출하는 함수에 콜백함수를 전해줄 필요가 없다.
* `yield from` 식 자체가 리턴 값이 되므로 `result()`를 호출할 필요가 없다.
* `result()` 함수는 인수를 받지 않고, 실행이 완료되지 않았을 때 호출하면, `asyncio.InvalidStateError` 예외가 발생한다.

### Future, Task, 코루틴에서 생성하기

`asyncio.async(coro_or_future, *, loop=None)`: 코루틴과 Future를 다 받을 수 있아서 통합한다. 코루틴을 넘겨주면, `loop.create_task()`를 호출해서 `Task`를 생성한다. 이벤트 룹을 생략하면, `asyncio.get_event_loop()`를 호출해서 루프 객체를 가져온다.

`BaseEventLoop.create_task(coro)`: 이 메서드는 코루틴을 실행하기 위해서 사용되며, 파이썬 3.4.2 이후로 사용가능하다.
