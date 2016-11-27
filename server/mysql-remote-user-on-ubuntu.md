# MySQL 원격 접속하기
## 작업배경
웹서버로 셋팅해 놓지 않았던 vultr 서버에 급하게 LAMP 설치.
간단한 구글링으로 웹서버 설치는 손쉽게 이루어 지고, MySQL 설치시 옵션중 외부 접속을 막아두었다.
하지만, 근일에 mysql를 쓸 일이 생겼고, 터미널로 작업하기 귀찮아서 원격 접속계정을 추가하였다.

## 외부연결 열기
1) my.cnf에서 접속 아이피 제한 풀고,
	- MySQL 5.6 이하는 `/etc/mysql/my.cnf`
	- MySQL 5.7 이상은 `/etc/mysql/mysql.conf.d/mysqld.cnf`
	- 아래 부분을 특정아이피 혹은 0.0.0.0으로 변경
```
bind-address        = xxx.xxx.xxx.xxx
```

2) MySQL에 외부 접속가능한 계정추가
```
# 계정 생성 접속은 모든 곳(@)
CREATE USER 'myuser'@'%' IDENTIFIED BY 'mypass';
# 데이터베이스 권한 할당
GRANT ALL ON *.* TO 'myuser'@'%';
# 권한 갱신
FLUSH PRIVILEGES; 
```

참고링크: [http://stackoverflow.com/questions/15663001/remote-connections-mysql-ubuntu](http://stackoverflow.com/questions/15663001/remote-connections-mysql-ubuntu)

## MySQL 서버 데몬 다시 시작하기
```bash
$ sudo service mysql stop;
$ sudo service mysql start;
```