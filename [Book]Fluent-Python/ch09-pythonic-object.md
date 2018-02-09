# 파이썬스러운 객체

> 절대로 결코 앞에 언더바 두 개를 사용하지 말라. 이것은 짜증스러울 정도로 개인적인 이름이다.  - 이안 비킹. [Paste 스타일 가이드](http://pythonpaste.org/StyleGuide.html)에서 발췌

## 객체의 표현

```repr()```는 개발자가 보고자 하는 형태로 표현한 문자열, ```str()```은 사용자가 보고자 하는 형태로 표현한 문자열을 반환한다.

## 벡터 클래스의 구현

[깃헙 페이지](https://github.com/fluentpython/example-code/tree/master/09-pythonic-obj)를 참고하자.

```byte()``` 함수로 저장하고, ```memoryview()```와 ```cast()```로 로딩이 가능하다.

## @classmethod와 @staticmethod

이 두 데커레이터는 ```self```를 생략하게 만드는데, 전자는 해당 클래스를 첫 인자로 받게 만들어주고, 후자는 첫번째 인자를 무시하게끔 만든다.

## 포멧된 출력

내장함수인 ```format()```과 메서드인 ```str.format()```를 이용한다. format에서 이용되는 형식을 [포맷 명시 간이 언어(Format Specification Mini-Language)](http://bit.ly/1Gt4vJF)라고 부른다. 
