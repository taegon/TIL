# 분류

가장 일반적인 지도 학습은 회귀와 분류인데, 2장에서 회귀에 대해 살펴보았고, 이번 장에서는 분류에 대해서 살펴본다.

## MNIST

미국 인구조사국 직원과 고등학생이 손으로 쓴 70,000개의 숫자 이미지인 MNIST 데이터셋을 이용한다. 워낙 널리 이용되기 때문에 머신러닝 분야의 "Hello World"라고 불린다.

사이킷런에서 여러 헬퍼 함수를 이용하여 자료를 획득할 수 있는데, 데이터셋을 다운받는 코드 중 하나는 다음과 같다.

```python
from sklearn.datasets import fetch_mldata
mnist = fetch_mldata('MNIST original')
```

이 데이터셋은 설명키인 `DESCR`, 샘플 자료를 담고 있는 `data`, 그리고 레이블 배열을 담고 있는 `target`키로 구성된다.
특성은 784개인데, 이는 28x28 픽셀을 의미한다.

이미지를 플롯하기 위해서는 다음과 같은 코드를 이용할 수 있다.

```python
%matplotlib inline
import matplotlib
import matplotlib.pyplot as plt

X = mnist["data"]
some_digit = X[36000]
some_digit_image = some_digit.reshape(28, 28)
plt.imshow(some_digit_image, cmap = matplotlib.cm.binary, interpolation="nearest")
plt.axis("off")
plt.show()
```

이 데이터셋은 앞쪽 60,000개는 훈련용으로 뒤쪽 10,000개는 테스트 세트로 구성해 두었다. 또한 훈련 샘플은 순서에 민감하기 때문에 비슷한 샘플이 연이어 나오게 되면, 성능이 나빠지므로 데이터를 섞어줄 필요가 있다.

```python
import numpy as np
shuffle_index = np.random.permutation(60000)
X_train, Y_train = X_train[shuffle_index], Y_train[shuffle_index]
```
