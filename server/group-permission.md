# 리눅스에서 그룹 권한 설정하기

## 배경

여러명의 사용자가 공용 저장공간을 이용하기 위해서는 그룹 권한이 필요하다. 리눅스 상의 권한 관리는 매우 쉬운데, 그러한 작업을 거쳤음에도 계속 파일 생성이 거부되었다.

결론적으로 group의 권한은 로그인을 할 당시에 다시 설정이 된다고 한다. 즉, `/etc/group` 파일을 고쳤으면, 다시 로그인을 해야, 해당 정보가 적용된다.

## 참고링크

* [https://www.linuxquestions.org/questions/linux-general-1/group-permissions-touch-cannot-touch-%60filename%27-permission-denied-653627/](https://www.linuxquestions.org/questions/linux-general-1/group-permissions-touch-cannot-touch-%60filename%27-permission-denied-653627/)
