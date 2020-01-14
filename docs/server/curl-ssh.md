# curl를 이용할 때, SSL 인증 오류 해결하기

curl를 이용하여 데이터를 다운 받을 때, 서버가 SSL를 이용하는 경우(https) 인증 오류가 발생한다. 가장 쉬운 해결법은 `-k` 옵션을 이용하여 SSL 인증 자체를 무시하는 방법이다. 다른 방법은 인증서 파일을 받아서 이를 지정해주는 방법이 있다.

[여기](https://curl.haxx.se/docs/caextract.html)에서 Mozilla CA 인증서를 받을 수 있다. 파일을 받아서, 다음과 같은 옵션을 추가해주면 된다.

```bash
curl.exe --cacert cacert.pem <URL>
```

* [참고링크](https://stackoverflow.com/questions/10079707/https-connection-using-curl-from-command-line)
