# 1장 파이썬 데이터 모델

## 기억에 남는 것들

### namedtuple

아래와 같은 형식으로 튜플에 이름을 붙여서 레코드처럼 사용할 수 있다.

```python
import collections

Card = collections.namedtuple('Card', ['rank', 'suit'])

card = Card('7', 'spades')
```

### doctest 지시자

책에서 정확한 출력결과를 가져오기 위해서 코드를 사용하면서 doctest를 통과하기 위한 지시자로 이용했다고 하나, 이해가 잘 안된다.

```python
>>> for card in deck:  # doctest: +ELLIPSIS
...   print(card)
```

### 문자열 표현

책에서는 %연산자와 str.format()를 둘 다 이용함. % 연사자 사용시 %r를 이용함.

- [참고링크](http://bit.ly/1Vm7gD1)

### len()이 메서드가 아닌 이유

[파이썬의 선 (The Zen of Python)](https://python.org/doc/humor/#the-zen-of-python)에서 '실용성이 순수성에 우선한다(practicality beats purity)'라고 서술한 것처럼 len()은 특별취급받는다. CPython 구현상 내장 객체는 C 언어 구조체의 필드를 읽어오는 값싼 연산이며, len은 매우 빈번하게 호출되는 연산으로 효율적으로 작동하도록 구현되었다. 물론 ```__len__()``` 메소드를 이용하여 동작을 직접 정의할 수도 있다.