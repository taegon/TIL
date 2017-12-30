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
