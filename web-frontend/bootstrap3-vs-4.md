# 부트스트랩 3와 4

## Bootstrap 소고

개인적으로 부트스트랩은 버튼 이미지를 가져다쓰기 위해서 사용하였는데,
레이아웃 디자인에도 용이하다.
굉장히 오래된 웹개발 환경에서는 table 태그를 이용해서 일일이 위치를 잡아줘야 했었는데 반해, 최근에는 div 태그로 영역을 잡고, css를 이용해서 레이아웃을 정리해주는 방식으로 진행된다. 이와 같은 작업 흐름에서 부트스트랩은 매우 널리 쓰이고 있는 프레임워크이다.

## 버젼차이로 인한 경험한 이슈

- (2016년 11월 이슈) glyphicon은 3버젼이 검색된다. 따라서 4버젼에서 동일한 코드가 적용이 안된다. tutorial에서는 span 태그를 빈 태그로 이용하라고 지시하고 있으나, 본인은 버튼때문에 4버젼을 쓰고 있어서 튜토리얼을 따라하더라도 정상 작동하지 않았다.
  - [http://getbootstrap.com/components/#glyphicons](http://getbootstrap.com/components/#glyphicons)
  - [ghlyphicon](http://glyphicons.com/)에서 이미지를 직접 다운 받아서, 서버에 올리고 이미지를 링크하는 식으로 임의 해결.

- 버튼 디자인이 달라진다. 웹에서 검색한 버튼 페이지는 부트스트랩4를 기준으로 예시를 제공하고 css 테마 파일을 제공하고 있다. 따라서 3버젼을 이용할 경우 버튼 디자인이 다소 달라진다.
  - [https://v4-alpha.getbootstrap.com/components/buttons/#examples](https://v4-alpha.getbootstrap.com/components/buttons/#examples)
