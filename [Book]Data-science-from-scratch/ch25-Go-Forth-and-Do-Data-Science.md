# 제 25장 본격적으로 데이터 과학하기

책을 마무리하면서, 저자가 몇가지 공부거리를 정리하였다.

## IPython

Jupyter notebook으로도 알려져 있는데, 대화형으로 프로그램을 작성해 갈 수 있다. 탐색적 발견이 중요한 데이터 과학에서 주요한 도구이다.

## 수학

선형대수(4장), 통계(5장), 확률(6장), 기계학습

## 밑바닥부터 시작하지 않는 방법

출판사에서 퇴짜 맞은 저자의 "자, 그럼 지금부터 라이브러리 사용법에 대해 배워봅시다"

* NumPy: 수치연산에 있어서 고성능을 보장한다.
* pandas: 자료처리를 편하게 도와주는 기능. 엑셀의 피봇테이블 같은 역할
* scikit-learn: 머니러닝 뿐만 아니라 최적화 등 다양한 예시를 포함하고 있다.
  * [scikit-learn 예시 모음](http://scikit-learn.org/stable/auto_examples/)

## 시각화

기본적으로 ```matplotlib```, 그리고 R의 ```ggplot``` 수준의 고품질 그래프 라이브러리인 ```seaborn```.

웹으로 간다면, 딱 하나. 유일한 대안 D3.js. 버전 3부터 시작해서 책도 몇권 사서 읽었는데, 최근 버전 4로 정착해서 마스터하려고 책을 샀더니, 불과 몇일 전에 버전 5가 릴리즈 되었다.

## R

데이터 과학의 대표적인 도구. 저자는 코드를 읽을 수 있을 정도는 익히는 게 좋겠다고 추천.

## 데이터 찾기

* data.gov
* reddit.com에서 [r/datasets](https://reddit.com/r/datasets), [r/data](https://reddit.com/r/data) 등 데이터 관련 포럼
* amazon.com에서도 몇가지 [공개 데이터셋](http://aws.amazon.com/ko/public-data-sets/)을 제공한다.
* Robb Seaton은 블로그에 [몇 가지 유용한 데이터셋](http://rs.io/100-interesting-data-sets-for-statistics/)을 정리하고 있다.
* Kaggle

## 데이터 과학하기

사실 가장 뛰어난 프로젝트는 실생활의 문제를 개선하는 것이다. 저자는 다음과 같은 사례를 소개하고 있다.

* 해커뉴스 관심 기사 분류기
* 소방차들 간의 네트워크 분석: [데이터](http://www2.seattle.gov/fire/realtime911/getDatePubTab.asp)와 [분석코드](http://github.com/joelgrus/fire)
* 티셔츠: 티셔츠 색과 모양으로 남아용/여아용 구분하기. [분석코드](http://github.com/joelgrus/shirts)


