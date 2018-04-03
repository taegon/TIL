# 리눅스 서버에 파이썬 cgi 환경설정하기

## apache2에서 cgi 디렉토리 설정하기

* [https://blog.ayukawa.kr/archives/1342](Apache와 Python 연동하기): cgi를 이용한 방식으로 진행
* [사용자별 웹디렉토리 - 아파치 2.4 공식문서](https://httpd.apache.org/docs/2.4/howto/public_html.html)
* [Configuring Apache2 to run Python Scripts](https://www.linux.com/blog/configuring-apache2-run-python-scripts)

아파치에 cgi 모듈을 추가해줘야 한다.

```bash
sudo a2enmod cgi
```

`/etc/apache2/mods-enabled/userdir.conf`

```
<Directory /home/*/public_html/cgi-bin/>
Options ExecCGI
SetHandler cgi-script
</Directory>
```

## 아파치 서버 재시동

```
sudo service apache2 restart
```

## 인코딩 해결하기

* [Encodings In CGI Scripts Using Python3](https://crustulus.de/2013/09/encodings-in-cgi-scripts-using-python3/)

`/etc/apache2/apache2.conf`에 다음과 같이 기본 인코딩 추가

```
AddDefaultCharset UTF-8
SetEnv PYTHONIOENCODING utf8
```

## 기타 주의사항

cgi를 구동하기 위한 파이썬 파일의 첫줄에 다음과 같이 스크립트 실행프로그램을 적시해야 한다.

```python
#!/usr/bin/env python3
```

스크립트는 아파치 데몬이 실행 권한을 가지고 있어야 한다.

```bash
chmod +x hello.py
```