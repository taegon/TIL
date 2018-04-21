# 17장 Future를 이용한 동시성

파이썬 3.2에 소개되었고, 2.5 이후버전 부터 이용할 수 있는 `concurrent.futures` 라이브러리에 대해서 살펴본다. 미셸 시미오나토는 "[파이썬에서의 스레드, 프로세스, 동시성에 대한 소고 - 다중코어 혁명에 대한 과대광고의 제거 및 스레드와 여러 동시성 방식에 대한 타당성 있는 (희망사항) 이야기](http://bit.ly/1JIrYZQ)"에서 패턴을 설명하고 있다. 비동기 작업을 나타내는 `Future` 객체의 개념을 살펴보자.

## 예제: 세 가지 스타일의 웹 내려받기

20개국 국기이미지를 다운받는데, 차례대로 받는 경우 약 7초 정도가 걸리고, `concurrent.futures`와 `async`를 이용한 경우 1.3초 정도가 소요되었다. (당연하지만, DoS 공격으로 의심받을 수 있으므로, 테스트를 테스트서버에 하자.)

### 순차적으로 다운받기

메인코드만 보면, 다음과 같다. 

```python
import requests

resp = requests.get(url)
return resp.content
```

여기서 케네스 레이츠가 만든 requests 라이브러리는 파이썬3 표준라이브러리인 urllib.request 모듈보다 강력하고 사용하기 쉽다. 또한 파이썬2의 urllib2가 이름이 바뀐반면, requests는 2.6이후 버전이 호환된다.

### `concurrent.futures`로 내려받기

주요 코드는 다음과 같다.

```python
def download_many(cc_list):
    workers = min(MAX_WROKERS, len(cc_list))
    with futures.ThreadPoolExecutor(workers) as executor:
        res = executor.map(download_one, sorted(cc_list))
    
    return len(list(res))
```