# 3장 딕셔너리와 집합

## 기본 자료형

자료형인지 검사할 때 dict로 직접 체크하는 것보다 ```isinstance(my_dict, collections.abc.Mapping)```과 같이 추상베이스클래스(ABC)를 이용하는 편이 낫다. dict와 유사한 다른 매핑형 자료도 체크할 수 있기 때문이다.

**해시 가능하다(hashable)**라는 뜻은 [파이썬 용어집](http://bit.ly/1K4qjwE)에서 다음과 같이 정의한다.
> 수명 주기 동안 결코 변하지 않는 해시값을 갖고 있고(```__hash__()``` 필요), 다른 객체와 비교할 수 있으면(```__eq__()``` 필요) 해당 객체를 해시 가능하다고 한다. 동일하다고 판단되는 객체는 반드시 해시값이 동일해야 한다.

## 지능형 딕셔너리

지능형 리스트(listcomp)와 제너레이터 표현식(genexps)과 마찬가지 형태로 구현가능하다.

## 존재하지 않는 키를 채워넣어주는 방식

```setdefault```와 ```defaultdict```가 있다.
딕셔너리에서 키로 검색한 후, 여러개의 값을 리스트에 추가하는 경우에 코드는 다음과 같다.

```python
# setdefault를 이용하는 경우
index = {}
index.setdefault(word, []).append(location)

# defaultdict를 이용하는 경우
index = collections.defaultdict(list)
index[word].append(location)
```

setdefault는 키를 검색하고, 있을 때와 없을 때 각각 추가적으로 발생하는 접근횟수를 줄여줌으로써 성능향상이 크다.

defaultdict는 ```__getitem__()``` 호출에 대한 기본값만을 제공하므로, ```index.get(word)```와 같은 형식에서는 값이 없을 때 None를 리턴한다.

```__missing__()``` 메소드는 ```__getitem__()```에서 키가 없을 경우 호출된다.

## 그 외 매핑형

- collections.OrderedDict
- collections.ChainMap: 여러 개의 목록 중 하나라도 검색되면 성공. ```pylookup = ChainMap(locals(), globals(), vars(builtins))```
- collections.Counter: 자세한 설명은 [문서](http://bit.ly/1JHVi2E)를 참조.
- collections.UserDict: 표준 dict처럼 동작하는 매핑형

## 불변 매핑

MappingProxyType이라는 래퍼 클래스는 mappingproxy 객체를 반환하는데, SQL에서 view같은 역할을 하며, 원 객체의 자료를 그대로 보여주는 반면(업데이트되면, 업데이트된 값으로 보여준다), 직접 수정을 불가능하도록 한다.

Pingo.io에서 Board 클래스는 pins 속성을 공개하는데, 핀번호를 바꿀 수 없도록 하여 실수하지 않고, 내부 기능을 이용할 수 있도록 하고 있다. 다만 개념상 동일하나 mappingproxy를 이용한 것은 아니다.

## 집합

set과 불변형 frozenset이 내장형으로 있다. 빈 집합은 ```set()```으로 표기해야 한다. ```{}```는 딕셔너리 타입이 된다.

집합을 이용하여 교집합 갯수 세는 법은 다음과 같다.

```python
# 방법1: 둘다 집합일 경우만 가능
found = len(needles & haystack)

# 방법2: 반복 가능형이면 됨
found = 0
for n in needles:
    if n in haystack:
        found += 1

# 방법3a: 하나라도 집합이면 방법2보다 빠르다
found = len(set(needles) & set(haystack))

# 방법3b
found = len(set(needles).intersection(haystack))
```

집합을 초기화하는 방식은 ```{1, 2, 3}```이 ```set([1, 2, 3])```보다 더 빠르고 효율적이다.

지능형 집합(set comprehension, setcomp) 또한 가능하다.