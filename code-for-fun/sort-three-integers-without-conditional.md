# 조건문 쓰지 않고 정수 3개 정렬하기
## 배경
트위터에서 "c언어에서 제어문 및 추가 함수 호출 없이 int 변수 3개 정렬하는 문제"라는 걸 풀어놓은 걸 보고, 다른 방법은 없을까 하고 찾아보았다.
하루네네(@Harunene)님이 쓴 트위터인데, 글을 작성하는 지금은 글을 찾을 수가 없어서, 풀이해놓은 코드 링크만 남긴다.

## 트위터에서 본 해법[1]
```c
#include <stdio.h>

int main()
{
    int a = 3, b = 2, c = 1;
    int max = (a>b&&a>c)*a+(b>a&&b>c)*b+(c>a&&c>b)*c;
    int min = (a<b&&a<c)*a+(b<a&&b<c)*b+(c<a&&c<b)*c;
    int mid = a+b+c - max - min;
    printf ("%d %d %d\n", min, mid, max);
    return 0;
}
```


## 다른 해법
다른 방법을 찾게 된 이유는 if 문을 쓰지는 않았지만, 비교문을 이용해서 참일 경우 1를 리턴하는 c언어 특성을 이용했다는 점에서 조건문을 사용하지 않았다고 이야기하기 어렵다고 생각했다. 그래서 관련 문제를 찾아보았는데, 대부분 기초문제로 if문을 활용하는 방법, 혹은 min, max함수를 이용해서 구현한 방법이 대부분이었다.

그러다가 두 숫자 중 큰 숫자를 찾는 max함수를 구현하는 방법에 대해서는 다양한 방법이 있는 걸 찾았다[^max].
그 중에서 가장 마음에 들었던 간단한 방법은 a,b 두 숫자가 있을 때 큰 수는 (a-b)/2 + |a-b|/2로 구할 수 있다는 점이다.

또 다른 문제는 절대값을 구하는 abs 역시 함수라는 점에서 문제에서 제한한 조건에 맞지 않는다. 이에 대한 해법은 비트연산으로 가능할 것으로 예상했고, 당연히 있었다. 그러나 여기에 대해서는 별 흥미가 없어서 링크[^abs]만 남긴다.


[1]: [http://codepad.org/iIWoZLV7](http://codepad.org/iIWoZLV7)

[^max]: [stackoverflow: Explain this snippet which finds the maximum of two integers without using if-else or any other comparison operator?](http://stackoverflow.com/questions/4772780/explain-this-snippet-which-finds-the-maximum-of-two-integers-without-using-if-el)

[^abs]: [stackoverflow: get absolute value without using abs function nor if statement](http://stackoverflow.com/questions/9772348/get-absolute-value-without-using-abs-function-nor-if-statement)