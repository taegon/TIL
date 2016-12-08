# Gurobi 셋팅하기
선형 프로그램 라이브러리인 Gurobi를 셋팅하는 방법을 정리하고자 한다.

## API 설치하기
conda를 기준으로 설명하고 있으며, 저장소를 추가하고, 패키지를 설치하면 된다.
2016년 12월 현재, 파이썬 2.7과 3.5를 지원한다고 적시하고 있다. 하지만 7.0 버젼에 대해서만 두버젼 모두 제공하고 있으며,
6.0, 6.5 버전의 경우 파이썬 2.7에 대한 패키지만 conda 저장소에 있다.

```bash
$ conda config --add channels http://conda.anaconda.org/gurobi
$ conda install gurobi
```

관련링크: [Installing the Anaconda Python distribution](http://www.gurobi.com/documentation/7.0/quickstart_mac/installing_the_anaconda_py.html#section:Anaconda)
