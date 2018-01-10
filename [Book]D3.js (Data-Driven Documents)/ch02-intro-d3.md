# 2장 d3.js 소개

## d3가 나오기까지

* [개발자의 정보 시각화에 대한 2011년 논문](http://vis.stanford.edu/files/2011-D3-InfoVis.pdf): 시각화 도구의 필요성

## d3의 대안들

### 쉽게 접근할 수 있는 차트도구

* [DataWrapper](http://datawrapper.de): 최신브라우저에선 인터렉티브, 오래된 브라우저엔 정적 이미지로 표시한다. 저널리스트를 위해서 설계된 서비스.
* [Flot](http://flotcharts.org): 오래된 브라우저 지원. 제한된 지원. 사용은 쉽다.
* [Google Chart tools](https://developers.google.com/chart)
* ~~[gRaphael](http://g.raphaeljs.com)~~
* [Highcharts JS](http://highcharts.com): 비영리 목적은 무료. 유료 솔루션.
* [JavaScript InfoVis Toolkit](http://thejit.org): 많은 예제와 문서. 예쁘지 않다.
* [jqPlot](http://jqplot.com): 차트가 단순하다. 다양한 예제 제공. 정적 이미지 느낌으로 제공한다.
* [jQuery Sparklines](http://omnipotent.net/jquery.sparkline): 최신 엑셀에서 제공하는 스파크라인(글 옆에 작게 들어가는 글자높이의 가로로 긴 그래프)을 그려주는 라이브러리.
* [Peity](http://benpickles.github.com/peity): 아주 단순한 막대, 선, 파이차트를 그려주는 라이브러리
* [Timeline.js](http://timeline.verite.co): 타임라인과 풍부한 설명을 보여주기 좋은 라이브러리. 내가 쓸 일은 없겠다.
* [YUI Charts](https://yuilibrary.com/yui/docs/charts/): Yahoo가 만든 차트 모듈. 역시 쓸 일 없겠다.

### 그래프 시각화 도구

* [Arbor.js](http://arborjs.org): 간단한 네트워크 그리거나, 인터렉티브를 꾸밀 때 좋겠다.
* [Sigma.js](http://sigmajs.org): 경량 라이브러리. 정적인 네트워크를 보여주기에 좋을 것 같다.

### 지오매핑 도구

* [Kartograph](http://kartograph.org): 데모는 꼭 한번 볼 만 하다.
* [Leaflet](http://leafletjs.com): 위성지도를 서비스할 때 이쁘다. 마이크의 데모 '[Leaflet과 D3를 같이 사용하기](http://bost.ocks.org/mike/leaflet)'를 참조하자.
* [Modest Maps](http://modestmaps.com): 구관이 명관이라고 책에 설명되어 있지만, 느리다. 확인도 못하겠다. 안씀.
* [Polymaps](http://polymaps.org): 벡터로 지도 이미지를 보여주는 듯. 예쁘긴 하나, 역시 안 쓸 것 같다.

### 자유로운 그리기 도구

* [Processing.js](http://processingjs.com): Processing의 js 포팅 버전. 인터렉티브 디자인에 이용된다.
* [Paper.js](http://paperjs.org): 선 위주의 이미지가 많이보인다. 예술가용인 듯. 그냥 이쁘게 보기 좋다. 내가 쓸 일은 없겠다.

### 3차원 도구

* [PhiloGL](http://senchalabs.org/philogl): GL를 붙일만하다. 웹에서 3차원 이미지를 보여준다.
* [Three.js](http://mrdoob.github.com/three.js): 역시 웹에서 3차원 구현

### D3로 만들어진 도구

* [Crossfilter](http://square.github.com/crossfilter): 다차원 자료를 필터해서 보여준다.
* [Cubism](http://square.github.com/cubism): 시계열 실시간 자료를 시각화한다.
* ~~[Dashku](http://dashku.com): 대쉬보드 서비스인것 같은데, 인증서가 만료되고, 안 이쁘다. 패스~~
* [dc.js](http://nickqizhu.github.com/dc.js): crossfilter를 이용한 개량된 버전인데, 물건이다.
* [NVD3](http://nvd3.org): 재활용 가능한 D3 차트 라이브러리. 쉽게 쓰기 좋을 것 같다.
* ~~[Polychart.js](http://polychart.com)~~: 망한것 같다. 깃헙 저장소는 있지만, 홈페이지가 죽었다.
* [Rickshaw](http://code.shutterstock.com/rickshaw): 시계열 그래프를 다루고 있지만, 기능이 제한적으로 보인다.
* [Tributary](http://tributary.io): 코드를 테스트해 볼 수 있다고 하나, 시대에 뒤쳐진 기분.
* [C3.js](http://c3js.org): NVD3와 마찬가지로, d3를 쓰기 쉽게 만들어놓은 라이브러리. 빌보드가 더 나은 선택으로 보인다.
* [billboard.js](https://naver.github.io/billboard.js/): naver 개발자가 만든 c3.js 개량버전. 2017년까지는 활발하게 개발했었다. D3.js v4를 지원한다.
