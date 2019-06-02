# PyCharm를 이용해서 Jupyter 노트북 만들기

## 업데이트

현재로서는 PyCharm를 이용하는 것보다는 [VS Code를 이용](./jupyter-with-vscode.md)하는 것이 나아보인다.

## 배경

- PyCharm에서 IPython 노트북을 지원하고 있다. 하지만 몇가지 설정 상의 문제가 보인다.
- (작업환경에 따라 사용하는 패키지군이 다르므로) virtualenv를 이용해서 작업환경을 따로 잡아주는 것도 좋은 방법이 될 것 같다.
- 기본적으로 pip를 이용해서 jupyter와 ipython 모듈을 설치해줘야 한다.
- 추가적으로 numpy, pandas, seaborn 등의 모듈도 추가로 설치한다.

## Trouble Shooting

- 터미널에서 잘 작동하는 jupyter 서버가 Pycharm 안에서는 커널 아이디를 찾지 못하는 문제
  - IPython 버젼 문제라는 글도 있는데, 내 경우에는 해당하지 않았음
  - 가상환경에 진입한 후, 터미널에서 다음과 같이 실행 후 해결 (ipykernel도 pip를 통해서 설치)

```bash
python -m ipykernel install --user
```

## 관련링크

- [PyCharm 공식홈 튜토리얼](https://www.jetbrains.com/help/pycharm/2016.1/tutorial-using-ipython-jupyter-notebook-with-pycharm.html)
