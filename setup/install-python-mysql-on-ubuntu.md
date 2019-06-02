# 우분투에서 파이썬으로 MySQL 이용하기

## 일단 실패기

MySQL은 이미 설치가 된 상황이고, python에서 이용하기 위해서 컨넥터가 필요한 상황.
기본적으로 apt-get를 이용해서 쉽게 설치 가능하다. 하지만 내 환경에서는 제대로 안됨.

```bash
sudo apt-get install python-mysqldb
```

그런데, 다음과 같은 메시지와 함께, 디펜던시 문제가 있어서 linux-generic의 버전업이 필요. 그런데 해결이 잘 안 된다.

```bash
linux-generic : Depends: linux-headers-generic
```

그래서 다음과 같이 버전업이 가능하다.

```bash
sudo apt-get purge linux-generic
sudo apt-get install --reinstall linux-generic
```

위와 같이 설치하다가 에러나서, 추가로 다음 명령 실행

```bash
sudo dpkg --configure -a
```

출처: [https://askubuntu.com/questions/389144/how-do-i-fix-unmet-dependencies-linux-image-generic-etc](https://askubuntu.com/questions/389144/how-do-i-fix-unmet-dependencies-linux-image-generic-etc)

## pip를 이용한 성공기

설치는 pip를 이용하여 다음과 같이 설치

```bash
sudo pip3 install mysql-connector-python
```

예제코드는 다음과 같다.

```python
import mysql.connector
cnx = mysql.connector.connect(user='scott', password='tiger',
                              host='127.0.0.1',
                              database='employees')

try:
   cursor = cnx.cursor()
   cursor.execute("""
      select 3 from your_table
   """)
   result = cursor.fetchall()
   print result
finally:
    cnx.close()
```

출처: [https://stackoverflow.com/questions/372885/how-do-i-connect-to-a-mysql-database-in-python](https://stackoverflow.com/questions/372885/how-do-i-connect-to-a-mysql-database-in-python)

## infile load 를 이용하기 위해서는 mysql 상에서 권한설정 필요

쿼리문은 대략 다음과 같다. (최종버전)

```sql
LOAD DATA LOCAL INFILE '/path/to/file' IGNORE INTO TABLE weather FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n'
```

패스워드가 문제가 될 경우, mysql 설정을 고쳐야 하는데, 아래 파일을 열고

```bash
sudo vi /etc/mysql/mysql.conf.d/mysqld.cnf
```

다음과 같이 ```[mysqld]``` 섹션에 추가한 후,

```conf
validate_password_policy=LOW
```

서비스 리스타트

```bash
sudo /etc/init.d/mysql restart
```

권한을 주는 과정에서 비번 강화하라는 에러
출처: [https://stackoverflow.com/questions/36301100/how-do-i-turn-off-the-mysql-password-validation](https://stackoverflow.com/questions/36301100/how-do-i-turn-off-the-mysql-password-validation)

`mysql.connector.errors.DatabaseError: 1290 (HY000): The MySQL server is running with the --secure-file-priv option so it cannot execute this statement` 라는 에러가 발생하는데, sql에 ```LOCAL``` 키워드를 추가하니 해결되었다.

출처: [https://stackoverflow.com/questions/32737478/how-should-i-tackle-secure-file-priv-in-mysql](https://stackoverflow.com/questions/32737478/how-should-i-tackle-secure-file-priv-in-mysql)

## Flask에서 mysql 이용하기

일단 이 코드를 이용하여 설정해둠

[https://codehandbook.org/python-web-application-flask-mysql/](https://codehandbook.org/python-web-application-flask-mysql/)

다음 모듈이 필요하다.

```bash
pip install flask-mysql
```

[https://stackoverflow.com/questions/33241924/importerror-no-module-named-flask-ext-mysql](https://stackoverflow.com/questions/33241924/importerror-no-module-named-flask-ext-mysql)
