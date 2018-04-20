# 코루틴


## 코루틴은 제너레이터에서 어떻게 진화했는가?

코루틴은 2.5버전(2006년)에 구현된 "[PEP 342 - 향상된 제너레이터를 통한 코루틴](https://www.python.org/dev/peps/pep-0342/)"에 설명되어 있다. 이때부터 yield를 쓸 수 있었고, send() 메서드를 이용하여 제너레이터 내부에 값을 보낼 수 있게 되었다.

최근 3.3(2012년)에서 구현된 "[PEP 380 - 하위 제너레이터에 위임하기 위한 구문](https://python.org/dev/peps/pep-0380/)"에서는 다음과 같은 2가지 유용한 기능이 추가 되었다.

* 제너레이터가 값을 리턴할 수 있다. 이전에는 `return`를 하는 경우 `SyntaxError`가 발생하였다.
* 기존 제너레이터가 하위 제너레이터에 위임하기 위해 필요한 코드를 간략하게 `yield from` 구문을 이용하여 구현할 수 있다.

## 코루틴으로 사용되는 제너레이터의 기본 동작

코루틴은 다음과 같은 4가지 상태 중 하나를 갖는다. `inspect.getgeneratorstate()` 함수를 이용해서 확인할 수 있다.

* GEN_CREATED: 실행을 위해 대기하는 상태
* GEN_RUNNING: 인터프리터가 실행하고 있는 상태. 다중스레드 어플리케이션에서만 볼 수 있다.
* GEN_SUSPENDED: `yield`문에서 대기하고 있는 상태
* GEN_CLOSED: 실행이 완료된 상태

## 이동 평균을 계산하는 코루틴

생각하는 바와 같이 쉽게 작성할 수 있는데, 다만 기동하기 위한 절차로 최초로 `next()` 메서드를 호출해줘야 한다. 그래야만 코루틴이 yield 이전까지 코드를 실행하고, 이후 부터는 동일한 루틴을 반복할 수 있다.

## 코루틴을 기동하기 위한 데커레이터

```python
from functools import wraps

def coroutine(func):
    @wraps(func)
    def primer(*args, **kwargs):
        gen = func(*args, **kwargs)
        next(gen)
        return gen
    return primer
```

`@coroutine` 데커레이터로 꾸미면, 해당 코루틴을 생성과 동시에 `yield`문까지 실행된다.

`yield from` 구문은 자동으로 코루틴을 기동하므로, 여기서 설명한 `@coroutine` 데커레이터와 동시에 쓸 수 없다. `@asyncio.coroutine` 데커레이터는 동시에 쓸 수 있도록 설계되었으므로, 자동으로 코루틴을 기동하지 않는다.

## 코루틴의 종료와 예외처리

`throw()`와 `close()` 메서드가 있다. `throw()`는 외부에서 제너레이터 안으로 예외를 전달하게 되는데, 내부적으로 처리하면 아무 문제 없이 다음 `yield`까지 수행되나, 처리되지 않는 경우, 호출자에게 예외가 전파된다. `close()`는 제너레이터가 `GeneratorExit`예외를 발생시키도록 만든다. 예외를 처리하지 않거나, `StopIteration` 예외를 발생시키면 호출자에게 에러가 전달되지 않는다. 만약 다른 값을 생성하여 전달하게 되면 `RuntimeError` 예외가 발생한다.

```python
def demo_finally():
    print("- coroutine stated")
    try:
        while True:
            try:
                x = yield
            except DemoException:
                print("DemoException handled. Continuing...")
            else:
                print("-> coroutine received: {}".format(x))
    finally:
        print("- corouine ended.")
```

코루틴이 종료될 때 정리용 코드를 넣기 위해서 위와 같은 형태의 코드를 작성하게 되는데, 이러한 형태는 매번 작성하기 번거롭다. `yield from`는 이와 같은 문제를 해결하기 위해 소개되었다.

## 코루틴에서 값 반환하기

앞서 이동평균을 구하는 제너레이터에서 `send()` 메서드에 `None`를 넘겨주면, 반복문에서 빠져나와 값을 리턴하도록 예제를 작성하였다. 이를 사용자가 올바르게 이용하기 위해서는 `try - except`를 이용하여, `StopIteration` 예외를 잡을 후, `except` 문장에서 결과를 받아야 한다. `yield from`은 내부적으로 `StopIteration` 예외를 처리하므로, 코루틴의 반환값을 가져오는 우회적인 방법으로 사용할 수 있다. 이는 `for`문에서 처리하는 방식과 비슷하게 받아들일 수 있다. 하지만 인터프리터에서는 `yield from`를 쓸 수가 없다. 함수 외수에서 yield를 사용하면 구문 에러가 발생하기 때문이다.

## `yield from` 사용하기

`yield from`은 구문 생김새와 다르게 완전히 새로운 언어 구성체임을 명심하자. 다른 언어에서는 비슷한 기능을 하는 키워드를 `await`라고 쓰기도 한다.

`gen()`이 `yield from subgen()`를 호출하고, `subgen()`이 값을 생성하여 리턴하면, `gen()`의 호출자에게 반환된다. 실제로 `subgen()`이 직접 호출자를 이끄는 효과가 있고, `subgen()`이 수행되는 동안 `gen()`은 실행을 중단한다.

약간 복잡하지만 유용한 예로 데이비드 비즐리, 브라이언 K. 존슨의 <파이썬 쿡북 3판> 4.14절 "[중첩 시퀀스를 단일 시퀀스로 변환하기](http://bit.ly/1MMe1sc)"가 있다.

단순히 `for` 루프를 대체하기 위해 `yield from`이 제안되지는 않았다. 제안된 PEP 380의 제목이 "하위 제너레이터에 위임하기 위한 구문"이다.

`yield from`에서 하위 제너레이터를 끝내지 않으면, 호출한 상위 제너레이터가 `yield from` 구문에 머물러 있게 된다. 하지만 메인 플로우는 이미 하위 제너레이터를 받아서 실행이 되고 있기 때문에, 전체 흐름은 진행될 수 있다. 다만 프로그램이 종료되어도 일부 코드가 마무리되지 않은 채 머물러 있을 수 있다. 이 부분을 주의해야 한다.

## 요약

귀도 반 로섬은 제너레이터를 사용하는 방법은 세가지 스타일이 있다고 했다.

> '풀' 스타일(반복자), '푸시' 스타일(이동 평균 예제), '작업'이 있다. [데이비드 비즐리의 코루틴 튜토리얼](http://www.dabeaz.com/coroutines)를 읽어보세요.

시뮬레이션 예제에서 택시 프로세서가 '작업' 스타일이다.

코루틴을 자동으로 기동해주는 데커레이터를 이용하면 코루틴을 편리하게 사용할 수 있다. 다만 `yield from subgen()`은 하위 제너레이터를 자동으로 기동해주므로 호환되지 않는다. 주의해야 한다.

누산기 코루틴에서는 send() 메서드를 통해서 중간 결과를 생성할 수 있었는데, 이것보다 값을 반환할 수 있을 때 훨씬 유용하다. `yield from` 구문이 코루틴의 결과를 자동으로 처리해 준다.

택시 시뮬레이션 예제에서는 클라이언트에서 제너레이터를 통해 하위 제너레이터를 받아서 이용할 수 있는데, 이는 코루틴이 반복적으로 핵심 루프에 제어권을 넘겨주므로, 멀티태스킹 환경에서 중앙 스케쥴러에게 제어권을 넘겨주는 것과 유사하다.

이번 장에서는 `send()` 메서드를 호출하여 값을 전달하였으나, asyncio 코루틴은 코루틴을 엄격하게 정의한다. `@asyncio.coroutine` 데커레이터가 붙으면, `send()`는 직접 호출할 수 없고, 언제나 `yield from`으로 호출된다.

## 읽을거리

데이비드 비즐리는 코루틴의 절대적인 권이자이다. 파이썬 쿡북에서 코루틴에 대한 많은 비법을 다루고 있다. PyCon US 2008에서 처음 ['시스템 프로그래머를 위한 제너레이터 기법'](http://www.dabeaz.com/generators/)을 발표했다. 코루틴에 관한 강의는 ['코루틴 및 동시성에 대한 흥미로운 강의'](http://www.dabeaz.com/coroutines)에 있다. PyCon 2014dptj ['제너레이터: 최후의 선구자'](http://www.dabeaz.com/finalgenerator/)을 통해 동시성에 대한 많을 예제를 다루었다. 

코루틴을 사용하면, 코드를 새로운 방식으로 구조화할 수 있지만, 재귀적 호출이나 다형성 같은 가능성을 최대한 활용하는 데에는 시간이 걸린다. 제임스 파웰은 ['코루틴을 위한 탐욕스러운 알고리즘'](http://bit.ly/1HGsFQ0)을 통해 고전적인 알고리즘을 재작성하였다. 그리고 ActiveState 코드 비법 데이터베이스에서 [코루틴으로 태깅된 예제](http://bit.ly/1HGsFzA)를 살펴보는 것도 좋다.

폴 소콜로브스키는 [초경량 마이크로파이썬](http://micropython.org)에서 yield from을 구현했다. [관련 pdf](http://flupy.org/resources/yield-from.pdf)를 공개하였다.

대부분의 예제가 asyncio에 연결되기 때문에, asyncio에 의존하지 않는 코드는 그렉 이윙이 게시한 [이진트리, 간단한 XML 파서, 작업 스케줄러 예제](http://bit.ly/1JIqJtu)에서 찾아볼 수 있다.

브랫 슬랫킨은 <이펙티브 파이썬>에서 '여러 함수를 동시에 실행시키는 방법으로서의 코루틴'을 설명하면서, [예제코드](http://bit.ly/1JIqNcZ)를 공개하였다. 브랫 슬랫킷의 책예제는 [http://github.com/bslatkin/effectivepython](http://github.com/bslatkin/effectivepython)에서 볼 수 있고, 콘웨이의 라이프 게임을 구현하고 리팩토링한 코드는 [깃허브 gist](http://bit.ly/coro_life)에서 확인할 수 있다.

그 외에 다음 링크를 참조할만 하다.

* 피터 오텐의 ['파이썬을 이용해서 두 개의 csv 파일 비교하기'](http://bit.ly/1JIqSxf)
* 이안 워드의 [iPython을 이용한 '반복형, 반복자, 제너레이터' 튜토리얼](http://bit.ly/1JIqQ8x)
* 귀도 반 로섬의 [yield와 yield from의 차이](http://bit.ly/1JIqT44)
* [이산 이벤트 시뮬레이션](http://bit.ly/1JIqXB1)은 협업적 멀티태스킹에 익숙해지기 좋은 예제
* 아시시 굽타의 [이산 이벤트 시뮬레이션 구현: 열 개의 교훈](http://bit.ly/1JIqWgz)
* [SimPy](https://simpy.readthedocs.org/en/latest/)는 표준 파이썬으로 구현한 프로세스 기반 이산 이벤트 시뮬레이션 프레임워크

파이썬은 키워드 갯수가 많지 않은데, 일부 키워드는 그 의미가 모호하다. 예를 들어, `for`, `while`, `try` 경우에는 `else`가 `then`으로 적히는 편이 이해하기 쉽다. `def`는 함수, 제너레이터, 코루틴을 정의하기 위해 사용되므로 너무 광범위하게 이용된다. `yield from`도 문제이나, 3.5 버전에서는 `await` 키워드가 추가 될 것이라고 한다.
