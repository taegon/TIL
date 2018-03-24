# 콘텍스트 관리자와 else 블록

## else 블록

`if/else`는 매우 직관적이나, `for/else`, `while/else`, `try/else`는 반대 의미로 동작한다. `else`대신 `then`으로 읽으면 쉽게 이해될 법하다. 예외나 `return`, `break`, `continue`와 같이 블록 중간에서 빠져나오지 않았을 때 `else`문은 실행된다. 즉, `for` 문장이 문제 없이 실행되고 나서, `else` 구문이 실행되는 것이다.

`EAFP`: 허락을 구하기보다는 용서를 구하는 것이 더 쉽다. (Easier to Ask for Forgiveness than Permission)

`LBYL`: 누울 자리를 보고 다를 뻗으라. (Leap Before You Leap)

C언어는 LBYL, 파이썬은 EAFP 스타일이다.

