# Flask를 이용한 앱의 반응이 너무 느릴 때

Flask로 구현한 기상자료 API의 반응이 이상할 정도로 느렸다. 특히 3개의 API를 동시에 던져서 지도 3장을 그리는 데모에서 이 현상이 두드러졌다. 그래서 찾아보니, 기본 설정이 쓰레드를 쓰지 않는 모양이다. 코드에 파라미터를 추가하는 것만으로 문제를 해결하였다. 여전히 3개의 쿼리에 대한 반응이 2초대에 머무르고 있어, 개선이 필요해 보인다. 하지만 안정적으로 2초대의 반응을 보여주고 있기 때문에 일단 시연용으로는 큰 무리가 없을 것 같다.

실행코드에 다음과 같이 `threaded=True`를 추가하면 된다.

```python
app.run(host="0.0.0.0", port=8080, threaded=True)
```

* [stackoverflow: Slow Requests on Local Flask Server](https://stackoverflow.com/questions/11150343/slow-requests-on-local-flask-server)
