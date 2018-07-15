# 머신러닝 프로젝트 처음부터 끝까지

예제 프로젝트이지만, 진행순서는 대략 다음과 같이 진행된다.

1. 큰 그림을 본다.
2. 데이터를 구한다.
3. 통찰을 위해서 탐색하고 시각화한다.
4. 머신러닝을 위해 데이터를 준비한다.
5. 모델을 선택하고 훈련시킨다.
6. 모델을 상세 조정한다.
7. 솔루션을 제시한다.
8. 시스템을 론칭하고, 모니터링, 유지보수를 실시한다.

## 공개 데이터셋

* 유명한 공개 데이터 저장소
  * http://archive.ics.uci.edu/ml
  * http://kaggle.com/datasets
  * http://aws.amazon.com/ko/datasets
* 메타포털
  * http://dataportals.org
  * http://opendatamonitor.eu
  * http://quandl.com
* 공개 데이터 저장소가 나열되어 있는 페이지
  * https://goo.gl/SJHN2k
  * http://goo.gl/zDR78y
  * http://reddit.com/r/datasets
* 예제로 사용한 캘리포니아 주택가격
  * http://lib.stat.cmu.edu/datasets
  * https://goo.gl/QgRbUL

## 큰 그림보기

* 문제 정의
* 성능 측정지표
  * RMSE
  * MAE
  * norm: 거리를 측정하는 방법, RMSE는 유클리디안 노름 또는 $l_2$, 절대값 합은 $l_1$, 맨허튼 노름이라고도 한다. 일반화하여 표현할 수도 있고, 노름 지수가 클수록 큰 값에 치우친다. 따라서 RMSE가 MAE보다 이상치에 조금 더 민감하다. 보통은 종분포를 따르기 때문에 이상치가 드물어서 RMSE가 잘 맞아서 일반적으로 널리 이용된다.

## 데이터 구하기

* pip를 이용한 가상환경 구축과 주피터 환경
* 데이터프레임의 활용
  * `head()`, `info()`, `value_counts()`, `describe()`, `df.hist(bin=50, figsize=(20,15))`
* 테스트셋 만들기: `sklearn.model_selection.train_test_split`
* 계층 샘플링이 필요할 수 있음

## 탐색과 시각화

* scatter plot를 이용해서 지도를 그릴 수 있다. 관련코드는 아래에 메모해 두었다.
* 상관관계 조사: `corr()` 역시 관련 코드는 아래에 붙여 두었다. 특성 사이의 상관관계는 `scatter_matrix()`를 통해서 그림으로 확인할 수 있다.
* 특성 조합으로 실험: 몇몇 변수들을 만들어 상관성을 평가할 수 있다.

분산도를 이용해서 지도화하는 법. Basemap를 이용해서 배경을 겹쳐보일 수는 있으나, 본 책에 제시된 이미지 파일을 어떻게 만들어서 맞춘것인지 알기 어려웠다.

```python
ax = housing.plot(kind="scatter", x="longitude", y="latitude", alpha=0.4,
    s=housing["population"]/100, label="인구", figsize=(10,7),
    c="median_house_value", cmap=plt.get_cmap("jet"), colorbar=True,
    sharex=False)
ax.set(xlabel='경도', ylabel='위도')
plt.legend()
```

아래는 상관도 행렬을 만들고, 특정변수에 대해 상관도가 높은 변수를 추려서 보여주는 방법이다.

```python
corr_mat = housing.corr()
corr_mat["median_house_value"].sort_values(ascending=False)
```

잘 알려진 상관행렬을 그래프로 나타내는 코드는 다음과 같다.

```python
from pandas.plotting import scatter_matrix

attributes = ["median_house_value", "median_income", "total_rooms",
              "housing_median_age"]
scatter_matrix(housing[attributes], figsize=(12, 8))
```

## 머신러닝을 위한 데이터 준비

* 데이터를 준비하는 과정을 자동화할 필요가 있다.
* 데이터 정제
  * 값이 없을 때: 해당 구역을 삭제, 전체 특성 삭제, 값을 채움(0, 평균, 중간값 등)
  * 각각 데이터프레임의 `dropna()`, `drop()`, `fillna()`를 이용

### 사이킷런의 설계철학

원문은 [API design for machine learning software: experiences from the scikit-learn project](http://goo.gl/wL10sI)에서 확인할 수 있다.

* 일관성
  * 추정기(estimator): 데이터셋에서 파라미터를 추정하는 객체. `fit()` 메서드를 이용하고, 하나의 데이터셋만 전달합니다. 다른 매개변수는 하이퍼파라미터로 간주하여, 인스턴스 변수로 저장.
  * 변환기(transformer): 데이터셋을 변환하는 추정기. `tranform()` 메서드를 수행하고, 추정과 변환을 연달아 수행하는 `fit_transform()`도 가지고 있음.
  * 예측기(predictor): 일부 추정기는 예측데이터를 만들 수 있는데, `predict()` 메서드를 이용함. 테스트 세트를 이용해서 품질을 측정하는 `score()` 메서드도 있음.
* 검사기능: 모든 추정기의 하이퍼파라미터는 공개. 학습된 모델 파라미터는 접미사도 언더바를 붙여서 공개.
* 클래스 남용방지: 별도 클래스를 만들지 않고, 넘파이 배열이나 사이파이 희소행렬을 활용. 하이퍼파라미터는 문자열이나 숫자를 그대로 씀.
* 조합성: 기존 구성을 최대한 활용. 파이프라인을 추구한다.
* 합리적인 기본값: 일단 돌아가는 기본 시스템 제공을 위하여 대부분 합리적인 기본값이 설정되어 있음.

### 텍스트와 범주형 특성

범주형은 판다스의 `factorize()`함수를 이용하여 인덱스를 만들 수 있다.

범주형 자료를 인덱스로 바꾸고 나면, 수치형자료로 인식하여, 머신러닝 알고리즘이 가까이 있는 두 값(1번째와 2번째 범주)을 멀리 있는 두값(1번째와 10번째 범주)보다 더 비슷하다고 판단하기 때문에, 이러한 범주형 자료의 오독을 방지하기 위하여 원-핫 인코딩(one-hot encoding)를 활용한다.

사이킷런은 숫자로 된 범주형 값을 원-핫 벡터로 바꿔주는 `OneHotEncoder` 객체가 있다. 희소행렬을 돌려주는데, 값을 쉽게 출력해보고 싶으면, `toarray()` 메소드를 이용해서 출력해볼 수 있다.

범주형 자료를 인덱스로 바꾸고, 이를 다시 원-핫 인코딩하는 과정을 한번에 처리해주는 객체로 `CategoricalEncoder`가 있다. 사이킷런 0.19.0까지는 포함되지 않았다. 밀집행렬로 출력하려면, `encoding="onehot-dense"`를 매개변수로 지정하면 된다.

### 변환기 커스터마이징

일련의 변환과정을 기록하기 위하여, 새로운 객체를 만들 때는 `fit()`, `transform()`, `fit_transform()` 메서드를 구현하면 된다. 덕 타이핑을 지원하므로 상속관계가 크게 중요하진 않다. 하이퍼파라미터를 쉽게 지정할 수 있도록 `BaseEsimator`객체를 상속하고, `TranformerMixin` 클래스를 상속하여 `fit_transform()`를 따로 구현하지 않는다.

이렇게 자신의 변환기를 만들고, 하이퍼파라미터로 여러 조합을 조절할 수 있도록 작성해두면, 추후에 여러가지 테스트를 빠르게 해 볼 수 있다.

### 특성 스케일링

데이터의 스케일이 크게 다르면 모델이 잘 작동하지 않는다. 타깃값에 대한 스케일링은 일반적으로 불필요하다.

많은 쓰이는 방법은 min-max 스케일링과 표준화(standardization)이다.

min-max는 최소, 최대값을 0-1 범위로 치환하는 방법으로 사이킷런에서는 `MinMaxScaler` 변환기를 제공한다. `feature_range` 매개변수를 이용하여 출력 범위를 조절할 수 있다. 많은 이가 정규화(Nomarlization)이라고 부르는데, 노름과는 다른 개념이므로 주의하자.

표준화는 정규분포화하는 방법이다. 평균을 빼고, 표준편차를 나누어 분포의 분산이 1이 되도록 한다. `StandardScaler`

스케일링은 훈련데이터셋에 대해서만 `fit()`를 해야 하고, 다음 훈련 셋과 테스트 셋에 대해서는 `transform()`를 해야 한다.

### 변환 파이프라인

`Pipeline` 객체는 이름/추정기 쌍으로 구성된 항목(튜플)의 목록을 입력으로 받습니다. 이름은 무엇이든 상관없지만, 던더(`__`)가 포함되면 안됩니다.

`DataFramSelector` 같은 특성 변수를 선택할 수 있는 변환기를 간단하게 만들 수 있고, 이를 통해 특성별로 다른 작업을 수행할 수 있다. 예를 들어, 수치형과 범주형 특성을 2개의 다른 파이프라인으로 구성할 수 있다. 이렇게 구축한 파이프라인은 `FeatureUnion` 객체를 이용하여 합칠 수 있다. 파이프라인과 마찬가지로 파이프라인의 이름과 파이프라인 객체로 구성된 항목의 목록을 넘겨주면 된다.
