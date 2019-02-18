# 2장 알아두어야 할 자바스크립트

## ES2015+

* const, let: 블록 스코프를 가짐. var는 전역.
* 템플릿 문자열: \`${a} + ${b} = ${result}\` 와 같은 식으로 사용 가능. 백틱을 이용하는 점에 주의
* 객체 리터럴: 오브젝트의 속성과 변수명이 같으면 생략 가능하고, 함수는 단순히 함수 정의형태로 쓸 수 있다.
* 화살표 함수: 화살표를 이용하여 람다식 같은 형태로 사용가능하다. 형식에 익숙해질 필요가 있겠다.
* 비구조화 할당: 객체 값을 변수로 나누어 할당할 수 있다. `const [node, obj, , bool] = array` 와 같은 형태로 사용할 수 있다.
* 프로미스: 콜백을 대신하여 `Promise` 객체가 소개됨. 콜백보다는 쉬우나 여전히 코드가 길다.
* async/await: 프로미스를 이용하나, 훨씬 코드가 간결해진다. 역시 형식에 익숙해질 필요가 있겠다.

## 프런트엔드 자바스크립트

### AJAX

`XMLHttpRequest` 생성자로 `xhr` 객체를 생성하고, `xhr.open()` 메서드에 요청 메서드와 요청 주소를 넣고, `xhr.send()`로 요청을 보낸다.

POST 메서드일 경우에는 `xhr.setRequestHeader()` 메서드를 이용하여 콘텐츠를 지정하고, `xhr.send()`함수를 이용하여 json 파일을 보낼 수 있다.

### FormData

HTML form 태그의 데이터를 동적으로 제어할 수 있는 기능으로 ajax와 함께 사용된다.

`xhr.send(formData);` 와 같이 폼데이터 객체를 통째로 넘겨서 보낸다.

### encodeURLComponent, decodeURLComponent

주소에 한글이 포함될 때, 보낼 때 인코딩, 받을 때 디코딩해서 주소의 한글을 변환할 수 있다.

### data attribute와 dataset

HTML 태그 속성으로 `data-`로 시작하는 자료를 넣어주면, 이들을 `data attribute`라고 부르는 자료가 됩니다. 이들은 화면에는 나타나지 않지만, 자바스크립트에서 쉽게 접근할 수 있다는 장점이 있습니다.

`document.querySelector('li').dataset`과 같은 식으로 dataset 객체를 받아오면, `data-id`라는 속성은 `id`라는 변수명으로, `data-user-job`은 `userJob`이라는 변수명으로 변환됩니다. 반대로 `dataset.monthSalary = 10000`이라고 넣으면, `data-month-salary`라는 속성이 생기게 됩니다.

## 함께 보면 좋은 자료
