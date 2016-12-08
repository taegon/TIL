# Gurobi 셋팅하기
최적화 분석방법인 선형 계획법(Linear Programming, LP) 라이브러리인 Gurobi를 셋팅하는 방법을 정리하고자 한다.

## Gurobi 설치하기
* [다운로드 페이지](http://www.gurobi.com/downloads/gurobi-optimizer): 운영체제에 맞는 설치파일을 다운받아서 설치한다.


## API 설치하기
conda를 기준으로 설명하고 있으며, 저장소를 추가하고, 패키지를 설치하면 된다.
2016년 12월 현재, 파이썬 2.7과 3.5를 지원한다고 적시하고 있다. 하지만 7.0 버젼에 대해서만 두버젼 모두 제공하고 있으며,
6.0, 6.5 버전의 경우 파이썬 2.7에 대한 패키지만 conda 저장소에 있다.

```bash
$ conda config --add channels http://conda.anaconda.org/gurobi
$ conda install gurobi
```

관련링크: [Installing the Anaconda Python distribution](http://www.gurobi.com/documentation/7.0/quickstart_mac/installing_the_anaconda_py.html#section:Anaconda)


## License 받기
* [라이센스 신청페이지](http://www.gurobi.com/downloads/licenses/license-center): 무료 대학 라이센스로 신청. 신청 후 콘솔에서 해당 명령어를 실행하면 된다.
