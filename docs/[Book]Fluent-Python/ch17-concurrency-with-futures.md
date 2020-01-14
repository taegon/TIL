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

### Future는 어디에

`Future`는 `concurrent.futures`와 `asyncio`의 핵심 컴포넌트인데, 사용자에게 잘 드러나지 않는다. 파이썬 3.4에서 `Future`는 양쪽 모듈에 각각 클래스로 존재하는데, 완료여부를 확정할 수 없는 지연된 계산을 표현하기 위해 사용된다. `Twisted`의 `Deferred`클래스, `Tornado`의 `Future` 클래스, 자바스크립트의 `Promise` 객체와 비슷하다. 대기중인 작업을 큐에 넣고, 완료 상태를 조사하고, 결과(혹은 예외)를 가져올 수 있도록 캡슐화되어있다.

`Future`객체는 사용자에 의해 직접 생성하지 않고, 동시성 프레임워크 상에서 생성하도록 작성해야 한다. 또한 클라이언트 코드에서 `Future`의 상태를 직접 변경하면 안 된다. 실행 완료 여부를 확인할 수 있는 `done()` 메서드가 있긴한데, 일반적으로 완료시 통지해달라는 콜백함수를 주로 이용한다. `add_done_callback()` 메서드가 그것이다.

`result()` 메서드는 완료된 경우 콜러블의 결과를 반환하거나, 실행 시 발생한 예외를 다시 발생시킨다. 하지만, 작업이 완료되지 않았다면, 두 프레임워크 간의 작동 방식이 다르다. `concurrency.futures.Future` 객체의 경우에는 결과가 나올때까지 호출자의 스레드를 블로킹한다. 선택적으로 `timeout` 인수를 전달할 수 있다. 반면, `asyncio.Future.result()`는 시간 초과를 지원하지 않고, `yield from`를 사용해서 결과를 가져오는 방법을 선호한다. 전자는 `yield from`를 사용할 수 없다.

예제 17-3에서는 `ThreadPoolExecutor.map()`을 사용한 예를, 예제 17-4에서는 `concurrent.futures`를 사용한 예를 살펴보았다. 하지만 엄밀히 말하면, 지금 살펴본 예제는 파일을 병렬로 다운받지 못한다. 전역 인터프리터 락(Global Interpreter Lock, GIL)에 의해 제한되며, 단일 스레드로 실행된다.

## 블로킹 I/O와 GIL

CPython 인터프리터는 내부적으로 스레드 안전하지 않아서, GIL (Global Interpreter Lock)를 두고 있다. GIL은 한 번에 한 쓰레드만 파이썬 바이트코드를 실행토록 하는데, 파이썬 언어의 제한요소는 아니고, CPython 구현체의 제한이다. 물론 PyPy도 GIL를 가지고 있다.

내장함수나 C확장 모듈은 GIL를 해제할 수 있는데, 보통 개발자는 이런 걸 구현하지 않는다. 블로킹 입출력을 실행하는 모든 표준 라이브러리 함수는 OS 결과를 기다리는 동안 GIL를 해제하기 때문에 입출력 위주 작업에서 이득을 볼 수 있다.

데이비드 비즐리는 '파이썬 쓰레드는 아주 능숙하게 게으름을 피운다' 라고 "[제너레이터: 최후의 개척자 106번째 슬라이드](http://www.dabeaz.com/finalgenerator/)"에서 말했다.

## `concurrent.futures`로 프로세스 실행하기

`ProcessPoolExecutor`는 GIL을 우회하여 모든 가용한 CPU를 사용한다. `ThreadPoolExecutor`와 동일하게 범용 `Executor` 인터페이스를 구현하므로, 기존 예제를 쉽게 바꿔볼 수 있다.

```python
def download_many(cc_list):
    workers = min(MAX_WORKERS, len(cc_list))
    with futures.ThreadPoolExecutor(workers) as executor:
        pass


def download_many(cc_list):
    with futures.ProcessPoolExecutor() as executor:
        pass
```

거의 동일한 코드인데, 프로세스의 경우, 코어 갯수를 지정하지 않는 것만 다르다. 프로세스 수는 실제 코어수 이상을 지정하는 것이 의미가 없기 때문에, 주어진 자원을 최대한 이용한다는 의미정도로 이해된다. `ProcessPoolExecutor`는 계산 위주의 작업에서 효과가 있으며, 입출력 위주일 때는 `ThreadPoolExecutor`가 더 많은 워커를 사용할 수 있기 때문에 쓰레드 쪽이 성능이 더 좋다. 국기 다운로드 예제를 프로세스로 구현하면 1.3초에서 1.8초 정도로 더 느려졌다.

해시 예제에서 코어 갯수에 따라 성능 향상을 기대할 수 있었으며, PyPy를 이용하면 그 효과가 더 컸다. 계산 중심의 코드를 작성하면, `ProcessPoolExecutor`와 함께 PyPy를 이용하자.

## `Executor.map()` 실험

`Executor.map()`은 인수로 실행할 함수와 그 함수에 전달한 인자로 구성한다. 함수 호출 자체는 논블로킹이며, 리턴값은 제너레이터이다. 즉 생성은 한순간에 이루어지나, 값을 받아 오기 위해서 반복문을 걸면, 블로킹이 된다. 값은 제너레이터가 차례대로 실행되고, 차례대로 값을 받아오면서 종료한다. 따라서 다소 시간이 걸리는 작업이 배치되면, 뒷 순서의 작업들이 다음 턴을 받기 위해서 기다려야 한다. 순서와 상관없이 먼저 끝나는 것부터 받으려면 `Executor.submit()`과 `futures.as_completed()`를 이용해야 한다.

## 진행상황 출력하고, 에러처리하기

* [예제코드](https://github.com/fluentpython/example-code/tree/master/17-futures/countries)
  * [flags2_common.py](https://github.com/fluentpython/example-code/blob/master/17-futures/countries/flags2_common.py)
  * [flags2_sequential.py](https://github.com/fluentpython/example-code/blob/master/17-futures/countries/flags2_sequential.py)
  * [flags2_threadpool.py](https://github.com/fluentpython/example-code/blob/master/17-futures/countries/flags2_threadpool.py)
  * [flags2_asyncio.py](https://github.com/fluentpython/example-code/blob/master/17-futures/countries/flags2_asyncio.py)

진행상황을 막대로 표시해주는 [TQDM 패키지](https://github.com/noamraph/tqdm). `len()` 메서드를 지원하는 반복형을 넘겨주거나, 예상 항목수를 두번째 인자로 받는다.

### flags2 예제에서 예외처리

개별 파일을 다운받는 코드(`download_one()`)에서 404예외처리를 하고, 나머지 예외를 `raise`해주면, 이를 호출한 `download_many()` 함수에서 처리한다.

### futures.as_completed()

비동기 처리가 되므로, 일단 모든 작업을 제출하고, futures.as_completed()의 제너레이터를 받아서 완료되는 작업부터 처리한다. `tqdm`과 결합한 코드는 다음과 같다.

```python
done_iter = futures.as_completed(to_do_map)
done_iter = tqdm.tqdm(down_iter, total=len(cc_list))
for future in done_iter:
    try:
        res = future.result()
```

### 스레드 및 멀티프로세스의 대안

파이썬은 0.9.8 (1993년)부터 스레드를 지원했고, 파이썬 3에서는 원래 thread 모듈 대신 threading 모듈을 사용하도록 권고하고 있다. 스레드 간의 데이터 전송은 queue 모듈을 이용할 수 있다.

계산 위주의 작업을 수행할 때는 GIL를 피해나가야 하므로 `futures.ProcessPoolExecutor`를 사용하여 간단하게 구현할 수 있다. 애플리케이션 구조가 이 클래스에 잘 맞지 않는 경우에는, threading API와 비슷한 multiprocessing 패키지를 이용할 수 있다.

### 요약

본 장에서는 `concurrent.futures`와 `asyncio`에서 제공하는 Future 객체를 살펴보았는데, 18장에서 이 둘의 차이점에 대해서 자세히 살펴본다.

GIL이라는 제한이 있지만, 입출력 위주의 프로그램은 성능향상이 된다. 또한 C언어로 작성된 모든 표준 라이브러리는 GIL를 해제하므로, 다른 쓰레드를 이용할 수 있다. 계산 위주의 작업은 `ProcessPoolExecutor` 혹은 `multiprocessing` 패키지를 이용하여 성능향상을 기대할 수 있다.

## 읽을거리

브라이언 퀸랜은 PyCon AU 2010에서 "[Future가 다가왔다!](http://bit.ly/1JIuZJy)"라는 멋진 발표를 했다.

`concurrent.futures` 라이브러리는 "[PEP 3148 - futures - 계산의 비동기 실행](https://www.python.org/dev/peps/pep-3148/)"에서 공식 소개하고 있으며, 자바의 `java.util.concurrent` 패키지에서 영향을 받았다고 한다.

잰 팔라치의 "Parallel Programming with Python"에서 Celery 라이브러리를 다루면서, 장고에서 PDF 변환과 같이 무거운 작업을 다른 프로세스로 덜어내서 HTTP 응답 지연을 줄이는 방법을 소개한다.

데이비드 비즐리, 브라이언 K. 존스의 "Python Cookbook, 3E"에서는 gzip으로 압축된 아파치 로그파일을 `ProcessPoolExecutor`를 이용하여 분석하는 실용적인 예제를 소개한다.

브렛 슬랫킨의 "Effective Python"은 코루틴을 자세히 다루고, `concurrent.futures`를 이용하여 스레드 프로그래밍을 위한 락과 큐 사용법을 다루고 있다.

폴 부처의 "Seven Concurrency Models in Seven Weeks: When Threads Unravel"은 스레드나 콜백을 이용하지 않고 동시성을 사용할 수 잇는 방법을 설명하고, 최신의 대안을 제시한다.

GIL에 관련해서는 링크만 몇가지 남긴다.

* [전역 인터프리터 락은 해제할 수 있는가?](https://docs.python.org/3/faq/library.html#can-t-we-get-rid-of-the-global-interpreter-lock)
* 귀도 반 로섬과 제시 놀러가 작성한 "[GIL를 제거하는 것은 간단하지 않다](http://bit.ly/1HGtcBF)"
* [파이썬 스레드와 전역 인터프리터 락](http://bit.ly/1JIvgwd)
* [파이썬 GIL의 이해](http://www.dabeaz.com/GIL): 여기서 54번 슬라이드에 파이썬 3.2에 소개된 새로운 GIL 벤치마크 테스트에서 20배나 처리시간이 느려지는 결과를 보여주기도 한다.

제시 놀러와 리차드 오드커크가 계산 위주의 어플리케이션 개발을 위해서 multiprocessing 패키지를 만들었다.
multiprocessing 패키지는 '[PEP 371 - 표준 라이브러리에서 다중처리 패키지의 추가](https://www.python.org/dev/peps/pep-0371/)'에 소개되어 있다. 표준 문서 중 가장 긴 문서이며, 이 패키지는 concurrent.futures.ProcessPoolExecutor의 기반이다.

스파크는 쉬운 파이썬 API를 제공한다. 파이썬 객체를 데이터로 사용할 수 있다.

호와 부에노의 [lelo 라이브러리](https://pypi.python.org/pypi/lelo)와 냇 프라이스가 만든 [python-parallelize 라이브러리](http://bit.ly/1HGtF6Q)는 여러 프로세서에서 작업들이 병렬로 처리하는 작업을 쉽게 구현할 수 있다. 두 패키지 모두 multiprocessing 모듈을 기반으로 하고 있으며, lelo는 `@parallel` 데커레이터를 제공한다.
