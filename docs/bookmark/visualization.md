# 시각화 관련

## d3.js

* [Observable](https://beta.observablehq.com/): 최근 (2018년 1월) 릴리즈된 d3용 노트북 서비스 :+1:
* [D3 blocks](https://bl.ocks.org/)
* [D3 Discovery](https://d3-discovery.net/): d3 관련 페이지를 잘 모아놨다.
* [The Big List of D3.js Examples](http://christopheviau.com/d3list/gallery.html): 2000여개의 링크를 모아두었다. 깨진 링크가 많지만, 그래도 훑어보기에 유용하다.
* [d3.js 책 속 추천목록](../[Book]D3.js/ch02-intro-d3.md)
  * [DataWrapper](http://datawrapper.de): 최신브라우저에선 인터렉티브, 오래된 브라우저엔 정적 이미지로 표시한다. 저널리스트를 위해서 설계된 서비스.
  * [dc.js](http://nickqizhu.github.com/dc.js): crossfilter를 이용한 개량된 버전인데, 물건이다.
  * [billboard.js](https://naver.github.io/billboard.js/): naver 개발자가 만든 c3.js 개량버전. 2017년까지는 활발하게 개발했었다. D3.js v4를 지원한다.
* [Vega](https://vega.github.io/vega/)
* [Vega-lite](https://github.com/vega/vega-lite): d3.js의 원산지였던 IDL의 라이브러리
  * [Vega-lite 예제: 월별 강수량](https://vega.github.io/editor/): 아래 코드를 이용하여 테스트할 수 있다.

```json
{
  "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
  "data": {"url": "https://api.taegon.kr/stations/108/?sy=2016&ey=2016"},
  "mark": "bar",
  "encoding": {
    "x": {"timeUnit": "month", "field": "Date", "type": "ordinal"},
    "y": {"aggregate": "sum", "field": "rainfall", "type": "quantitative"}
  }
}
```

* [xkcd styled chart lib](https://github.com/timqian/chart.xkcd)

## 인포그래픽스

* [DataVisProject](http://datavizproject.com/) :+1:
* [인포그래픽스.kr](http://info-graphics.kr)
* [UW Interactive Data Lab](http://idl.cs.washington.edu/)
* [중앙일보 스페셜 콘텐츠](http://news.joins.com/DigitalSpecial/298): 꽤나 오래 전부터 만들어온 걸 최근에야 발견했다. 중앙일간지여서 그런지 퀄리티가 상당히 좋다. 주제에 따라 주장이 편향되어있는 점이 아쉽지만, 우리나라에서 인포그래픽스를 이용한 양질의 스토리텔링을 주기적으로 뽑아낸다는 점이 북마크한 이유이다.
* [kepler.gl](http://kepler.gl) powered by Uber :+1: 브라우저 상에 바로 자료를 올려서 맵을 만들 수 있고, 서버로 자료를 전송하지 않는다고 한다.
* [VIS.GL](http://vis.gl/) powered by Uber: 우버가 공개한 시각화 관련 라이브러리
* [UBER Moment](https://movement.uber.com/?lang=en-US): 우버가 자사 자료를 이용해서 지역별 도착 시간을 지도정보로 제공해준다.
* [OEC (The Observatory of Economic Complexity)](https://atlas.media.mit.edu/en/visualize/tree_map/hs92/export/ita/all/show/2016/): 공개된 무역데이터를 이용해서 API를 제공하고 시각화를 하고 있다. :+1:
* [from Data to Viz](https://www.data-to-viz.com/): 데이터 형태별로 그래프 선택법 같은 정보를 잘 정리해두었다. 처음 시작하기에 좋은 홈페이지.
* [Flourish](https://app.flourish.studio/projects): 2016년 [전세계 해상물류 지도](https://www.shipmap.org/)를 그렸던 그룹 :+1:
* [ResourceTrade.earth](https://resourcetrade.earth/data): 전세계 무역을 잘 시각화한 사이트

### 공공데이터

* [Data USA](https://datausa.io)
* [데이지(DAISY)](https://daisy.newsjel.ly/solution) by newsjel.ly
* [ODPia](https://odpia.org)

### 데이터 저널리즘

* [SBS 마부작침](http://news.sbs.co.kr/news/newsPlusList.do?themeId=10000000114)
* [KBS 데이터룸](http://u20worldcup.kbs.co.kr/news/list.do?mcd=0909)
* [ProPublica](https://www.propublica.org/)
* [TheUpshot, The NY Times](https://www.nytimes.com/section/upshot)

### 자체 데이터 시각화 툴 보유

* [inforgr.am](https://infogram.com/)
* [Tableau Gallery](https://public.tableau.com/gallery)

### 콘텐츠 자체제작 및 아카이빙

* [Flowingdata](https://flowingdata.com/)
* [visualising data](https://www.visualisingdata.com/) :+1:
* [News Jelly](http://contents.newsjel.ly/)

## 파이썬 라이브러리

* [seaborn](https://seaborn.pydata.org/examples/index.html): R의 ggplot2 수준으로 고퀄 그래프 제공
* [Bokeh](https://bokeh.pydata.org/en/latest/docs/gallery.html): 인터렉션 그래프 기능 제공
* [Python Graph Gallery](https://python-graph-gallery.com/): 파이썬 그래프를 형태별로 예시 제공. 카테고리가 잘 나누어져 있어서, 처음 시작하기에 좋은 페이지이다. 대부분 seaborn이나, matplotlib도 있음.
* [Altair](https://altair-viz.github.io/index.html)

## Markdown

* [Draw Diagrams With Markdown](http://support.typora.io/Draw-Diagrams-With-Markdown/)

## ArcGIS Online

* [ArcGIS.com](http://arcgis.com){:target="_blank"}
* [ArcGIS Story Map Gallery](https://storymaps.arcgis.com/en/gallery/#s=0&md=storymaps-apps:cascade){:target="_blank"}
* [Story Map 1. A Food Matters supplement by IonE](http://umn.maps.arcgis.com/apps/Cascade/index.html?appid=a48c26df4577490ba8b92d410df2e1fd){:target="_blank"}
* [Story Map 2. Mapping Incomes](https://storymaps.esri.com/stories/2018/mapping-incomes/index.html){:target="_blank"}
* [Story Map 3. From Shore to Sea: Vessel Traffic in the Salish Sea](http://tnc.maps.arcgis.com/apps/MapJournal/index.html?appid=48918c38e9454f8794eb0c565c8a9e16){:target="_blank"}

## 좋은 예제

* [Seeing Theory](http://students.brown.edu/seeing-theory/index.html#firstPage){:target="_blank"}
* [D3 Graph Theory](https://mrpandey.github.io/d3graphTheory/){:target="_blank"}
* [정보는 아름답다](https://informationisbeautiful.net/visualizations/): 책으로 발간되었으며, 다양한 inforgraphics를 제공한다.
  * [프로그램별 코드 라인수](https://informationisbeautiful.net/visualizations/million-lines-of-code/)
* [월드컵 시간대별 골](https://www.economist.com/graphic-detail/2018/06/18/every-world-cup-goal-ever-scored)
* [R2D3](http://www.r2d3.us): D3로 머신러닝을 설명하는 페이지였는데, 최근에 파트2가 추가되었다. 스토리텔링이 좋다.
* [BILLIONS OF BIRDS MIGRATE. WHERE DO THEY GO?](https://www.nationalgeographic.com/magazine/2018/03/bird-migration-interactive-maps/): 네셔날지오그래픽의 2018년 3월 기사
* [How to learn D3.js](https://wattenberger.com/blog/d3): D3를 잘 정리해두었다. 책을 사볼까 싶은 생각이 든다.
* [Fundamentals of Data Visualization](https://serialmentor.com/dataviz/): 무료로 공개된 자료인데, 아주 훌륭하게 예제가 정리되었다.
* [Road to Visualization Expert (keggle)](https://www.kaggle.com/subinium/road-to-viz-expert-2-plotly-seaborn)
* [Interactive Viz (1) - UFC with Altair (keggle)](https://www.kaggle.com/subinium/interactive-viz-1-ufc-with-altair)
* [Coronavirus tracked: the latest figures as the pandemic spreads](https://www.ft.com/content/a26fbf7e-48f8-11ea-aeb3-955839e06441): 국가별 COVID-19 확진자 수를 로그스케일로 그려서 비교하고 있다.
* [Epidemic Calculator](http://gabgoh.github.io/COVID/index.html): SEIR (Susceptible - Exposed - Infectious - Recovered) 모델을 이용하여 인터렉티브한 감염병 확산수준을 보여주고 있다.
* [Why outbreaks like coronavirus spread exponentially, and how to “flatten the curve”](https://www.washingtonpost.com/graphics/2020/world/corona-simulator/): 간단한 ABM로 사회적 거리두기 혹은 자가격리의 효과를 시각화하여 보여주고 있다.

## 폰트

[폰트 파일](./font.md) 참조

## 블로그/사이트

* [MIT 4.032 / 4.033 Design Studio: Information and Visualization Projects](https://irenedelatorre.github.io/MIT-Design-Studio-Information-and-Visualization/)
* [Irene de la Torre Arenas](https://irenedelatorrearenas.wordpress.com/)
* [https://haleypark.design/4_032_final_project/](https://haleypark.design/4_032_final_project/)
  * 이준행님이 팔로우하는 2명 중 한명. MIT에서 수업과제로 만든 사이트 같은데, 훌륭하다.

## 노트북 (연습예제)

* [정부혁신1번가 - 정부혁신 홈페이지 분석](https://github.com/innogovKOR/innogov_suggestion/blob/master/02-EDA.ipynb): 간단하게 seaborn를 이용한 그래프와 워드 클라우드를 사용하고 있다.

## Art

* [일본 국립과학박물관, 내부를 3D/VR로 공개](https://www.kahaku.go.jp/VR/)
* [A one-take journey through Russia’s iconic Hermitage museum](https://www.youtube.com/watch?v=49YeFsx1rIw) by Apple
* [Google Arts & Culture](https://artsandculture.google.com/)
* [Google Arts & Culture - Zoom Views](https://artsandculture.google.com/project/gigapixels): 명화를 초고화질 이미지로 볼 수 있다.
* [하버드대 와이드너 도서관, 내부를 3D/VR로 공개](https://my.matterport.com/show/?m=fs3gQv7n1QG)
* [이집트 가상투어 : 파라오 람세스 6세의 무덤과 피라미드들](https://news.hada.io/topic?id=2004)

## color palette

* [Scientific Journal and Sci-Fi Themed Color Palettes for ggplot2](https://nanx.me/ggsci/articles/ggsci.html)
* [COLORBREWER 2.0](https://colorbrewer2.org)
* [colors](https://coolors.co/)
* [Carbon Design System](https://www.carbondesignsystem.com/data-visualization/legends)
* [Chroma.js Color Palette Helper](https://gka.github.io/palettes/#/9|s|00429d,96ffea,ffffe0|ffffe0,ff005e,93003a|1|1)
* [Leonardo Color](https://leonardocolor.io/?colorKeys=%236fa7ff&base=ffffff&ratios=3%2C4.5&mode=CAM02): Adobe의 컨트라스트 기반 컬러 생성기 오픈소스
* [Adobe Color](https://color.adobe.com/ko/create/color-wheel)
* [paletton](https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF)
* [HSLuv](https://www.hsluv.org/)
* [carto](https://carto.com/carto-colors/): 기존 팔레트가 맵에 바로 적용되어서 비교하기 쉽다.
* [PALETTE GENERATOR](https://learnui.design/tools/data-color-picker.html)
* [Happy Hues](https://www.happyhues.co/)
* [BrandColors](https://brandcolors.net/)
* [copaso](https://www.colourlovers.com/copaso/ColorPaletteSoftware)
* [colormind](http://colormind.io/)
* [Colordot](https://color.hailpixel.com/)
* [Colourcode](https://colourco.de/)
* [ColorBox](https://www.colorbox.io/) by Lyft Design
* [Palettte App](https://palettte.app/)
* [VIZ PALETTE](https://projects.susielu.com/viz-palette) By: Elijah Meeks & Susie Lu
* [Color interpolations](https://observablehq.com/@philippkoytek/color-interpolations): Trying out different approaches of interpolation using d3 and chroma.js
* [Color Tools For Designers 2019](https://medium.muz.li/color-tools-for-designers-2019-6ebd77a94ab)
* [encycolorpedia](https://encycolorpedia.kr/fee100): 비슷한 색상 찾기
* [OC: Open Color](https://yeun.github.io/open-color/)
* [Visualizing Every Pantone Color of the Year](https://adamfuhrer.com/visualizing-every-pantone-color-of-the-year)
