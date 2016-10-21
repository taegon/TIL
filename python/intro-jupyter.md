# Jupyter
IPython에서 notebook기능이 강화되면서 단일 프로젝트로 독립한 형태
.ipynb 확장자를 갖으며, 데이터 사이언스 분야의 연구를 수행하기에 적합한 환경을 제공해준다.
(인터렉티브한 작업환경 + 그래프 + 각종 마크업 지원)

## IDE를 이용해서 작업환경 구축 (update: 2016.10.21)
 - [PyCharm를 이용해서 구동](jupyter-on-pycharm.md)

## (로컬) 웹환경 구축해서 이용하기
Jupyter 구글링해서 최신 버젼 깔면 된다.
서버 구동은 터미널에서 다음 명령어 실행.
```bash
$ jupyter notebook
```

### 추가셋팅 (pow)
```bash
$ echo http://localhost:8888 > ~/.pow/jupyter
```