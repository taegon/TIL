# 17장 Future를 이용한 동시성

파이썬 3.2에 소개되었고, 2.5 이후버전 부터 이용할 수 있는 `concurrent.futures` 라이브러리에 대해서 살펴본다. 미셸 시미오나토는 "[파이썬에서의 스레드, 프로세스, 동시성에 대한 소고 - 다중코어 혁명에 대한 과대광고의 제거 및 스레드와 여러 동시성 방식에 대한 타당성 있는 (희망사항) 이야기](http://bit.ly/1JIrYZQ)"에서 패턴을 설명하고 있다. 비동기 작업을 나타내는 `Future` 객체의 개념을 살펴보자.

## 예제: 세 가지 스타일의 웹 내려받기

20개국 국기이미지를 다운받는데, 차례대로 받는 경우 약 7초 정도가 걸리고, `concurrent.futures`와 `async`를 이용한 경우 1.3초 정도가 소요되었다. (당연하지만, DoS 공격으로 의심받을 수 있으므로, 테스트를 테스트서버에 하자.)

### 순차적으로 다운받기

메인코드만 보면, 다음과 같다. 

```python
import requests

resp = requests.get(url)
return resp.content
```

여기서 케네스 레이츠가 만든 requests 라이브러리는 파이썬3 표준라이브러리인 urllib.request 모듈보다 강력하고 사용하기 쉽다. 또한 파이썬2의 urllib2가 이름이 바뀐반면, requests는 2.6이후 버전이 호환된다.

### `concurrent.futures`로 내려받기

주요 코드는 다음과 같다.

```python
def download_many(cc_list):
    workers = min(MAX_WROKERS, len(cc_list))
    with futures.ThreadPoolExecutor(workers) as executor:
        res = executor.map(download_one, sorted(cc_list))
    
    return len(list(res))
```

### Future는 어디에?

`Future`는 `concurrent.futures`와 `asyncio`의 핵심 컴포넌트인데, 사용자에게 잘 드러나지 않는다. 파이썬 3.4에서 `Future`는 양쪽 모듈에 각각 클래스로 존재하는데, 완료여부를 확정할 수 없는 지연된 계산을 표현하기 위해 사용된다. `Twisted`의 `Deferred`클래스, `Tornado`의 `Future` 클래스, 자바스크립트의 `Promise` 객체와 비슷하다. 대기중인 작업을 큐에 넣고, 완료 상태를 조사하고, 결과(혹은 예외)를 가져올 수 있도록 캡슐화되어있다.

`Future`객체는 사용자에 의해 직접 생성하지 않고, 동시성 프레임워크 상에서 생성하도록 작성해야 한다. 또한 클라이언트 코드에서 `Future`의 상태를 직접 변경하면 안 된다. 실행 완료 여부를 확인할 수 있는 `done()` 메서드가 있긴한데, 일반적으로 완료시 통지해달라는 콜백함수를 주로 이용한다. `add_done_callback()` 메서드가 그것이다.

`result()` 메서드는 완료된 경우 콜러블의 결과를 반환하거나, 실행 시 발생한 예외를 다시 발생시킨다. 하지만, 작업이 완료되지 않았다면, 두 프레임워크 간의 작동 방식이 다르다. `concurrency.futures.Future` 객체의 경우에는 결과가 나올때까지 호출자의 스레드를 블로킹한다. 선택적으로 `timeout` 인수를 전달할 수 있다. 반면, `asyncio.Future.result()`는 시간 초과를 지원하지 않고, `yield from`를 사용해서 결과를 가져오는 방법을 선호한다. 전자는 `yield from`를 사용할 수 없다.

예제 17-3에서는 `ThreadPoolExecutor.map()`을 사용한 예를, 예제 17-4에서는 `concurrent.futures`를 사용한 예를 살펴보았다. 하지만 엄밀히 말하면, 지금 살펴본 예제는 파일을 병렬로 다운받지 못한다. 전역 인터프리터 락(Global Interpreter Lock, GIL)에 의해 제한되며, 단일 스레드로 실행된다.

