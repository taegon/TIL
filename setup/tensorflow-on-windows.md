# 윈도우에서 텐서플로우 환경 설정하기

## 설치법

### 아나콘다를 설치

### 아나콘다 가상환경 설정

[텐서플로 공식 문서](https://www.tensorflow.org/install/install_windows)에 따라 설치할 수 있다.

먼저 가상환경을 만든다. VM과는 개념이 다르고, 파이썬 모듈을 프로젝트별로 독립적으로 관리하기 위해 구축하는 환경을 간단하게 가상환경으로 지칭하였다.

공식 문서에는 3.5를 설치하도록 하나, AVX2를 쓰기 위해 프리컴파일된 바이너리를 찾아보니, 3.6 기준으로 작성되어 있어서 공식문서와 달리 3.6으로 설치하였다.
기본 설치버전에서는 AVX2를 이용하기 않기 때문에 최신 CPU의 기능을 최대한 활용할 수 없게 된다. 경고문구가 뜨는 게 거슬리기도 했다.

```
conda create -n tensorflow pip python=3.6
```

가상환경을 활성화한다. 활성화해서 가상환경에 들어갈 수 있다. 빠져나올 때는 deactivate하거나 해당 창을 닫으면 된다.

```
conda activate tensorflow
(tensorflow) conda deactivate
```

바이너리 파일을 이용해서 설치한다.

* [윈도우용 바이너리 저장소](https://github.com/fo40225/tensorflow-windows-wheel)
* [리눅스와 맥용 바이너리](https://github.com/lakshayg/tensorflow-build)
* 해당내용의 출처: [오버플로우: TensorFlow binary was not compiled to use: AVX2](https://stackoverflow.com/questions/47068709/your-cpu-supports-instructions-that-this-tensorflow-binary-was-not-compiled-to-u)

```
(tensorflow) pip install https://github.com/fo40225/tensorflow-windows-wheel/raw/master/1.8.0/py36/CPU/avx2/tensorflow-1.8.0-cp36-cp36m-win_amd64.whl
```

참고로, 아나콘다 가상환경을 지울 때는 다음 명령을 이용한다. 3.5로 설치하였다가, 버전을 올리기보다는 새로 만들었다.

```
conda env remove -n <env_name>
```