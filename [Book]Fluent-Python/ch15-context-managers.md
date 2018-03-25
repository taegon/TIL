# 콘텍스트 관리자와 else 블록

## else 블록

`if/else`는 매우 직관적이나, `for/else`, `while/else`, `try/else`는 반대 의미로 동작한다. `else`대신 `then`으로 읽으면 쉽게 이해될 법하다. 예외나 `return`, `break`, `continue`와 같이 블록 중간에서 빠져나오지 않았을 때 `else`문은 실행된다. 즉, `for` 문장이 문제 없이 실행되고 나서, `else` 구문이 실행되는 것이다.

`EAFP`: 허락을 구하기보다는 용서를 구하는 것이 더 쉽다. (Easier to Ask for Forgiveness than Permission)

`LBYL`: 누울 자리를 보고 다를 뻗으라. (Leap Before You Leap)

C언어는 LBYL, 파이썬은 EAFP 스타일이다.

## 콘텍스트 관리자와 with 블록

반복자가 for문을 제어하기 위한 것처럼, 콘텍스트 관리자는 with문을 제어하기 위해 존재한다.

`with` 문은 `try/finally 패턴`을 단순화하기 위해 설계되었다. 콘텍스트 관리자는 `__enter__()`와 `__exit__()`로 구성.
`with` 문을 새로운 범위를 지정하는 것은 아니므로, 변수 자체는 with문 바깥에서도 살아 있다. 하지만 `with`에서 진입코드가 실행되고, 끝날 때 `__exit__()` 메서드가 호출된다.

콘텍스트 관리자는 느리지만, 독특한 기능 덕분에, 파이썬 커뮤니티에서는 창의적으로 활용하는 방법을 찾고 있고, 표준라이브러리에서 다음과 같이 이용되고 있다.

* sqlite3 모듈의 트랜잭션: [연결을 콘텍스트 관리자로 사용하기](http://bit.ly/1MM89PC)
* threading 코드에서 lock, condition, semaphore 보관: [with 문에서 락, 컨디션, 세마포어 이용하기](http://bit.ly/1MM8guy)
* Decimal 객체의 산술 연산: [decimal.localcontext 문서](http://bit.ly/1MM8eTw)
* 객체의 테스트를 위한 임시 패치: [unittest.mock.patch()](http://bit.ly/1MM8imk)

## contextlib 유틸리티

[contextlib - with 문 콘텍스트를 위한 유틸리티](http://bit.ly/1HGqZpJ)를 먼저 참고하자.

* `closing()`: `close()` 메서드를 제공하지만, 콘텍스트 프로토콜을 구현하지 않은 객체를 위해 콘텍스트 관리자를 생성
* `suppress`: 지정한 예외를 임시로 무시
* `@contextmanager`: 클래스를 사용하지 않고, 간단한 제너레이터 함수로부터 콘텍스트 관리자 생성. 가장 널리 이용.
* `ContextDecorator`: 콘텍스트 관리자를 함수 데커레이터로도 사용할 수 있게 해주는 기반 클래스
* `ExitStack`: `__exit__()` 메서드를 LIFO 순으로 호출해줌.

