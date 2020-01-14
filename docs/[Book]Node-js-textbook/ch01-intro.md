# 1 장 노드 시작하기

## 핵심 개념 이해하기

2008년 구글이 V8 엔진을 사용한 크롬 출시

2009년 라이언 달(Ryan Dahl)이 V8 엔진 기반의 노드 프로젝트 시작

이벤트 기반의 프로그래밍, 이벤트 리스너에 콜백함수를 등록하는 방식으로 구현.

논블로킹 I/O도 이벤트 기반 프로그래밍과 유사한 개념

싱글쓰레드로 구동된다. 노드는 싱글쓰레드, 논 블로킹 모델이다.

## 서버로서의 노드

CPU 의존이 높은 작업은 부적합 AWS 람다나 구글 클라우드 Functions 같은 서비스는 이러한 단점을 극복할 수 있는 대안

## 서버 외의 노드

노드 기반의 프레임워크: 앵귤라, 리액트 등

## 개발 환경 설정하기

### 노드 설치하기

`https://nodejs.org`에서 설치

터미널에서 최신버전 설치시

```bash
$ curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash --
$ sudo apt-get install -y nodejs
```

버전확인

```bash
$ node -v
v11.10.0
$ npm -v
6.8.0
```

### npm의 버전 업데이트하기

```bash
npm install -g npm
```

### VS Code 설치하기

VS Code가 진리

## 함께 보면 좋은 자료

* Node 공식 사이트: [https://nodejs.org/ko](https://nodejs.org/ko)
* Node 공식 가이드: [https://nodejs.org/ko/docs/guides/](https://nodejs.org/ko/docs/guides/)
* 이벤트 루프에 대한 시각적 설명: [http://latentflip.com/loupe](http://latentflip.com/loupe)
* 이벤트 루프에 대한 설명: [https://nodejs.org/ko/docs/guides/event-loop-timers-and-nexttick/](https://nodejs.org/ko/docs/guides/event-loop-timers-and-nexttick/)