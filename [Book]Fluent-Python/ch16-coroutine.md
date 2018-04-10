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

