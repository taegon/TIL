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

## asyncio와 aiohttp로 내려받기

파이썬 3.4에서 asyncio는 TCP와 UDP만 지원한다. HTTP 프로토콜을 사용하기 위해서는 서드파티 패키지를 설치해야 한다.

asyncio를 이용한 예제는 [다음 링크](https://github.com/taegon/fluentpython-example-code/blob/master/17-futures/countries/flags_asyncio.py)와 같다.

`asyncio.wait()` 코루틴은 `Future` 객체나 코루틴의 반복형을 받아서, `Task` 안에 래핑한다. 결국 모든 객체가 `Future`객체가 되고, 이를 `loop.run_until_complete()`에 넘겨주어 실행하게 된다. 리턴 값으로 `(<실행완료된 Future 셋>, <실행 완료되지 않은 Future 셋>)`를 전달 받는데, 일반적으로 두번째 인자는 공집합이므로 `_`로 할당한다. 하지만 일부 Future객체는 `timeout`과 `return_when` 키워드를 통해 완료 안된 채로 리턴될 수 있다. 자세한 사항은 [공식문서](http://bit.ly/1JIwZS2)를 참조하자.

이 예제에서 블로킹 입출력을 수행하는 [이전 코드](https://github.com/taegon/fluentpython-example-code/blob/master/17-futures/countries/flags.py#L33)를 사용할 수 없다. `asyncio`를 활용하기 위해서는 모든 함수가 `yield from`를 통해서 제어권을 다시 이벤트 루프에 넘겨주어야 하기 때문이다.

`asyncio`는 알아야 할 개념도 많고 복잡해 보이지만, 귀도 반 로섬은 '실눈을 뜨고 보면서 yield from 키워드가 없는 것처럼 생각'하면 된다고 조언한다.

`yield from foo`를 사용하면, 이 코드가 있는 현재의 코루틴은 중단되지만, 제어권이 이벤트 루프로 다시 넘어가서 이벤트 루프가 블로킹 되지 않는다. foo가 완료되면, 중단된 코루틴으로 반환해서 실행이 계속 된다.

`yield from` 사용법은 짧게 다시 정리하면 다음과 같다.

* `yield from`으로 연결된 전체 코루틴 체인은 가장 바깥쪽에서 `next()`, `send()` 혹은 암묵적(for loop 같은)으로 호출하는 비코루틴 호출자에 의해 구동된다.
* 가장 안쪽 체인에서는 단지 yield를 사용하여 단순 제너레이터나 반복형 객체가 되어야 한다.

`async` API에서도 동일한 원칙이 적용되는데,

* 가장 바깥쪽에서는 대표 제너레이터를 `loop.run_until_complete()` 등으로 구동한다. `next()`, `send()`를 사용하지 않고 `asyncio` 이벤트 루프가 직접 관리하도록 한다.
* 가장 안쪽의 하위제너레이터는 우리가 만든 코드가 아니라, 실제로 입출력을 수행하는 라이브러리 함수여야 한다.

다음 절에는 앞서 말한 이 질문에 대해서 살펴본다.

> 둘 다 단일 스레드환경인데, asyncio를 이용하면, 그렇지 않았을 때에 비해서 5배나 빨라졌던 걸까?
