# CSS를 이용하여 이미지 crop하기

## tl;dr
* CSS를 이용하여 crop하는 방법이 여러가지다.
* 브라우저별로 렌더링 불가능한 방법이 꽤 많다.
* SVG를 이용하는 방법이 잘 먹힌다.


## 배경
FoodS3 랜딩 페이지를 만드는 과정에서 밋밋한 버튼을 데코레이션하기 위해서 동그라미 크랍을 구현하였다. 구현과정에서 브라우저별로 렌더링 차이가 심하게 발생하는 것을 확인하였다.

## 기본적인 방법
기본적으로 style에 clip-path를 이용하면 잘라내기가 가능하다.

Safari에서는 -webkit-clip-path이 작동한다.

예시가 나와 있는 이 페이지를 참조하자.
* [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)

## 파이어폭스와 IE
Chrome과 Safari는 대체로 위 예제의 방법들이 작동하는 반면, 파이어폭스와 IE는 작동하지 않는 코드가 많다. svg를 이용해서 잘라낼 모양을 정의하고 ```style="clip-paht:url(#id)"```를 이용하면 잘 작동한다. center 지점을 잡을 때는 x, y를 50% 잡아주면 되는데, 크기를 미리 설정하지 않는 경우, 원하는 형태로 작동되지 않을 수 있다.

체감상 clip-path:circle()를 이미지를 축소한 후, 중심점을 잡아서 짜르는 반면, url를 이용하는 경우, 축소하기 전 이미지의 크기를 이용하여 중심점을 잡는 것으로 보인다.

기능 구현은 다음 stackoverflow 참조
* [How to create a “clip-path” circle on IE and Firefox?](http://stackoverflow.com/questions/26742853/how-to-create-a-clip-path-circle-on-ie-and-firefox)

브라우저별 구동 확인 테이블은 여기
* [inline svg](http://caniuse.com/#search=inline%20svg)
