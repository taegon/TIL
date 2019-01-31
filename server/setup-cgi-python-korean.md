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

## Encoding이 제대로 되지 않을 경우

한글 출력이 잘 되지 않아 에러가 나는 경우, spam 이라는 문자열과 함께 에러를 보여준다. 이 경우 아파치 에러 로그를 확인하면, cgi 에러를 확인할 수 있다. 오늘 문제는 한글 인코딩이 문제였는데, 아래와 같이 해결할 수 있었다.

```python
sys.stdout = codecs.getwriter("utf-8")(sys.stdout.detach())
```

python 2 환경이라면, 아래와 같이 해결 가능하다.
```
sys.setdefaultencoding('UTF8')
```

* 출처: [How to set sys.stdout encoding in Python 3?](https://stackoverflow.com/questions/4374455/how-to-set-sys-stdout-encoding-in-python-3)
* 출처2: [Changing default encoding of Python?](https://stackoverflow.com/questions/2276200/changing-default-encoding-of-python)
