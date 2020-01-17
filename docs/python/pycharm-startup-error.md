# PyCharm 구동시 에러 해결

오늘 (2019.12.08 현재) 갑자기 JetBrains 계열 프로그램이 모두 구동이 되지 않는 문제가 있었다. 대수롭지 않게 생각하고 있었는데, 리부팅을 해도 해결이 되지 않고, 설정파일을 지우고 새롭게 만들기도 하고, PyCharm를 새로 설치하기도 하였지만 문제가 해결되지 않았다.

툴이 필요한 시점에 툴이 말썽을 부리니 여간 신경이 쓰였다. 다행히 아래 해결방법이 통하여 문제를 해결할 수 있었다. JetBrains 계열 제품들은 미리 통신 포트를 점유하고 있는 모양인데, 이 포트를 다른 프로그램에서 미리 점유하고 있을 경우 생기는 문제 같았다. 해결법은 네트워크를 초기화하는 방법이었다. 프롬프트에서 실행하면 되고, 당연하게도 관리자 권한이 필요하다. 실행 후 리부팅하고, 문제가 해결되었다.

```cmd
netsh winsock reset
```

* [Critical Internal Error on Startup of IntelliJ IDEA: "Cannot Lock System Folders"](https://intellij-support.jetbrains.com/hc/en-us/community/posts/360004973960-Critical-Internal-Error-on-Startup-of-IntelliJ-IDEA-Cannot-Lock-System-Folders-)

<vue-disqus/>
