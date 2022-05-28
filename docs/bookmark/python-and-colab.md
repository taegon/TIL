# 파이썬 관련 북마크

## 배포판

* [Anaconda](https://www.anaconda.com/download/)

## 노트북

* google docs 연동 online jupyter [colab](https://colab.research.google.com)
* [Jupyterlab impression](https://medium.com/@brianray_7981/jupyterlab-first-impressions-e6d70d8a175d)
* [Jupyter](https://jupyter.org/install)

## Colab

* [Google Colab에서 Google Drive와 연동하기](https://somjang.tistory.com/entry/Google-Colab%EC%97%90%EC%84%9C-Google-Drive%EC%99%80-%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0)

그래프에서 한글을 사용하기 위해서는 한글 폰트 설치 및 설정이 필요하다.

```python
!sudo apt-get install -y fonts-nanum
!sudo fc-cache -fv
!rm ~/.cache/matplotlib -rf

import matplotlib.pyplot as plt
from matplotlib import rc, font_manager
import numpy as np

plt.rc('font', family='NanumBarunGothic')
t = np.arange(0.0, 2.0, 0.01)
s = 1 + np.sin(2 * np.pi * t)
plt.plot(t, s)
plt.title("한글테스트")
plt.show()
```

* [구글 Colab에서 한글 문제 대응하기](https://pinkwink.kr/1255)

## GUI

* [GUI Applications](https://docs.python-guide.org/scenarios/gui/) by 히치하이커를 위한 파이썬 가이드

## plot

* [Multiple Subplots](https://jakevdp.github.io/PythonDataScienceHandbook/04.08-multiple-subplots.html) from the Python Data Science Handbook by Jake VanderPlas

## 블로그

* [[번역] 파이썬 함수 작성 시 자주 범하는 실수 5가지](https://lazymatlab.tistory.com/m/109)
* [Problem Solving with Algorithms and Data Structures using Python](https://runestone.academy/runestone/books/published/pythonds/index.html)
* [파이썬 PIP Install 패키지 만들어보기](https://onlytojay.medium.com/%ED%8C%8C%EC%9D%B4%EC%8D%AC-pip-install-%ED%8C%A8%ED%82%A4%EC%A7%80-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EA%B8%B0-42ea68f4fabd)
* [나만의 파이썬 패키지를 작성하는 법](https://code.tutsplus.com/ko/tutorials/how-to-write-your-own-python-packages--cms-26076)
* [원격서버 vscode로 연결해서 작업하기](https://evols-atirev.tistory.com/m/28)

## CLI

* [Rich](https://news.hada.io/topic?id=2025): 터미널을 화려하게 포매팅하는 파이썬 라이브러리
* click

## 강의자료

* [공학자를 위한 Python](https://wikidocs.net/15214)
* [mindscale Pandas 기초](https://mindscale.kr/course/pandas-basic/stat/)
* [선형회귀 (한글자료)](https://justkode.kr/machine-learning/linear_model)
* [데이터 사이언스 스쿨 - 넘파이 배열](https://datascienceschool.net/01%20python/03.01%20%EB%84%98%ED%8C%8C%EC%9D%B4%20%EB%B0%B0%EC%97%B4.html)
* [Matplotlib Tutorial - 파이썬으로 데이터 시각화하기](https://wikidocs.net/book/5011)
* [동국대 김진석 교수님 강의자료](http://bigdata.dongguk.ac.kr/lectures/datascience/_book/index.html)
