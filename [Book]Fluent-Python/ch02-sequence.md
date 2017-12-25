# 2장 시퀀스

## 구성

- 컨테이너 시퀀스와 균일 시퀀스
- 가변 시퀀스와 불변 시퀀스

## 지능형 리스트와 제너레이터 표현식

지능형 리스트(list comprehension)를 *listcomp*로, 제너레이터 표현식을 *genexp*로 표현하기도 한다.

제너레이터 표현식은 지능형 리스트와 유사하게 사용하며, 대괄호([]) 대신 괄호(())를 이용하면 되는 것으로 보인다. 차이점은 제너레이터는 반복문에서 호출할때마다 하나씩 값을 생성하고, 지능형 리스트는 리스트를 만들어 두고, 거기서 값을 꺼내준다.

## namedtuple

namedtuple은 2개의 인자를 갖는데, 첫번째는 클래스명, 두번째는 필드명이 필요하다. 필드명은 공백으로 구분된 하나의 문자열, 혹은 문자열 리스트로 가능하다.

```python
City._fields # 필드명 튜플을 돌려준다.
seoul = City._make(seoul_data) # 일반 튜플을 네임드튜플로 생성
seoul._asdict() # collections.OrderedDict 객체를 돌려준다.
```

## 슬라이싱

인덱스 0부터 시작하는 이유: [번호를 0부터 매겨야 하는 이유(Why Numbering Should Start at Zero by Edsger W. Dijkstra)](https://www.cs.utexas.edu/users/EWD/transcriptions/EWD08xx/EWD831.html)

```seq[start:stop:step]```은 ```seq.__getitem__(slice(start, stop, step))```을 호출한다.
NumPy는 n차원 텐서를 지원하며, ```x```가 4차원 배열이라고 하면, ```x[i, ...]```은 ```x[i, :, :, :]```와 동일하다.
