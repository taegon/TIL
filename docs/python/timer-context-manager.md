# context manager를 이용하여 프로파일용 타이머 쉽게 구현하기

Kaggle를 둘러보다가 프로파일을 위해서 계산시간을 출력하는 아래 코드를 발견하고, 좋아보여서 메모해둔다.

```python
from contextlib import contextmanager

@contextmanager
def timeit_context(name):
    startTime = time.time()
    yield
    elapsedTime = time.time() - startTime
    print('[{}] finished in {} ms'.format(name, int(elapsedTime * 1000)))
```

사용할 때는 아래와 같이 `with`문을 이용하면 된다.

```python
with timeit_context('My profiling code'):
    mike = Person()
    mike.think()
```

* [Python time measure function](https://stackoverflow.com/questions/5478351/python-time-measure-function)
