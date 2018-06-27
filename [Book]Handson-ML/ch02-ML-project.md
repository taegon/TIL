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

```python
ax = housing.plot(kind="scatter", x="longitude", y="latitude", alpha=0.4,
    s=housing["population"]/100, label="인구", figsize=(10,7),
    c="median_house_value", cmap=plt.get_cmap("jet"), colorbar=True,
    sharex=False)
ax.set(xlabel='경도', ylabel='위도')
plt.legend()
```

```python
corr_mat = housing.corr()
corr_mat["median_house_value"].sort_values(ascending=False)
```

## 머신러닝을 위한 데이터 준비

* 데이터를 준비하는 과정을 자동화할 필요가 있다.
* 데이터 정제
  * 값이 없을 때: 해당 구역을 삭제, 전체 특성 삭제, 값을 채움(0, 평균, 중간값 등)
  * 각각 데이터프레임의 `dropna()`, `drop()`, `fillna()`를 이용
