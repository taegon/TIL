# 5장 데이터

## 메서드 체인

메서드 체이닝 기법을 통해, 함수를 계속 붙여서 여러속성을 지정할 수 있다.

## 데이터 로딩 다루기

읽어온 데이터는 전역 변수로 옮겨주고, 함수를 호출한다. 로딩시 에러가 발생하는 경우에는 따로 처리해준다. 코드 형태는 다음과 같다.

```javascript
var dataset; // 전역 변수

d3.csv("datafile.csv", function(err, data) {
    if (err) {
        console.log(err);
    } else {
        dataset = data; // 읽어온 데이터를 전역변수로 옮긴다.
        generateVis();  // 처리할 함수를 호출한다.
        hideLoadMsg();
    }
});
```

## D3.js에서 가장 중요한 코드

DOM 문서요소를 선택하여, 데이터를 추가하고, 적절한 속성을 부여하는 것인데, 다음 코드가 가장 핵심 부분이다.

```javascript
d3.select("body").selectAll("p")
    .data(dataset)
    .enter()
    .append("p")
    .text(function(d) {
        return "test text :" + d;
    })
    .style("color", "red");
```

* ```selectAll```은 해당 문서요소 전체를 선택하는데, 보통은 해당 문서요소가 없으므로, 빈 선택물을 반환한다.
* ```data()```는 데이터를 지정해주고,
* ```enter()```는 앞서 지정한 data()를 이용하여 새로운 DOM 요소를 만들 수 있도록 해준다. 선택한 문서요소보다 data의 갯수가 많을 경우 플레이스 홀더 역할을 할 문서요소를 생성해준다.
* ```enter()```에서 생성한 빈 플레이스 홀더를 가져와서 ```p``` 요소를 추가한다.
* 익명함수를 지정하면, d3에서 자동적으로 데이터를 인자로 전달한다.
* ```style```은 ```attr```로도 쓸 수 있다.
