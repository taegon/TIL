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