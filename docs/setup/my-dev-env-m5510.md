# 개발환경 설치하기 - 윈도우 노트북

2019년 1월 19일 M5510에 SSD를 교체하면서 윈도우 10 프로를 클린설치하였다. 관련하여 설치내역을 정리하고자 한다.

## 설치 내역

* 윈도우 10: [미디어 생성 프로그램](https://www.microsoft.com/en-us/software-download/windows10)을 이용하여 usb에 설치이미지를 설치하고 윈도우 설치. usb는 8기가 이상이 필요하다.
  * 설치시 주의점: 처음 계정 만들때, live.com과 연결하면, 이름이 한글자 날라간다. 아직도 고쳐지지 않은 것 같다. 나 같은 경우, `taegon` 대신 `taego`으로 계정명이 잡힌다. 온라인계정을 무시하고 로컬 계정만 만들면, 지정한 이름 그대로 사용이 가능하다.
  * 자동으로 설치되는 프로그램을 지운다. MS Store의 동기화 설정때문에 그런 것인데, 이제 그냥 포기했다.
* Dropbox: 동기화가 오래 걸리므로, 가장 먼저 설치
* Java 8
* Python: 아나콘다 배포판 64비트를 설치. 실수로 공식 버전을 설치하였다가 지우고 아나콘다 배포판만 설치함.
  * 아나콘다를 선치하는 과정에서 `Visual Studio Code`도 같이 설치된다.
  * `Visual Studio Code`를 기동하면, `git`를 설치하라고 안내 받을 수 있다.
* Ubuntu: MS Store에서 다운 받으면 된다.
  * 받아서 설치하면, 서브시스템이 필요하다고 한다. 링크따라서 설치하면 된다.
  * 개발자 모드를 켜줘야 하는지도 모르겠다. 나는 그냥 켰다.
* Autokey: `Shift + Space`로 한영키를 바꾸기 위해 필요하다.
  * 설치후 스크립트 만들어서, 다음과 같이 넣어주면 된다.
  * `+space::Send, {vk15sc138}`
  * 10년 전에 쓴 내 블로그가 검색되는 게 신기하다.
  * `cmd + r` 누르고, `shell:startup` 치면 시작프로그램이 나온다. 거기에 만든 스크립트를 넣어주면 된다.
* JetBrain toolbox: 학교에 계속 적을 두고 있다면, 학생계정으로 매년 무료로 이용가능하다. 자바용 IntelliJ, 파이썬용 PyCharm, 웹용 WebStorm 정도를 설치하였다.
* GitKraken: Git 클라이언트로 GitKraken를 쓰고 있다. 맥/윈도우 환경에서 동일한 인터페이스를 제공하는 게 내겐 가장 큰 사용 이유가 되었다.
  * 저장소는 모두 새로 내려받았다. 기존 파일을 복사해 보니, 파일은 생성일시가 동일하게 따라오는데, 폴더는 복사한 시점으로 생성일자가 설정되었다. 그래서 변경사항으로 기록되어서, 저장소에서 모두 새로 내려 받았다. 그리고 외장 케이스가 문제가 있어서 계속 끊기는 바람에 깃헙에서 내려받는 것이 훨씬 빠르기도 했다. 개별적으로 받아야 해서 번거롭긴 했지만.
* 한글
* MS Office: 학교에서 Office 365를 제공하고 있어서, 웹으로 접속하여 설치하였다. 설치시 64비트를 골라서 설치하였다.
* 반디집, 꿀뷰
* Editplus: 라이센스는 이메일에.
* Gurobi library for Python
  * conda를 이용해서 설치
  * 라이센스도 새롭게 발급받아야 했다.
* 크롬, 파이어폭스: 기존 계정 정보로 동기화 정보를 가지고 올 수 있어서 바로 사용 가능했다.
* Keybase: 다른 디바이스에서 인증해주면 된다.
* Kakaotalk: 핸드폰에서 인증 한번이 필요하다. 컴퓨터에 저장되었던 옛날 기록은 다 날라가 있었지만, 중요한 게 아니니까.
* VPN: 학교 VPN만 일단 설정하였다.
* [Caffeinated](http://desmondbrand.com/caffeinated/): 잠자기 방지 프로그램
* 네트워크 드라이브 연결: 집에 설치해둔 외장하드와 연결
* Hyper: 우분투 설치후, 설정에서 `shell`를 `bash`를 잡아주면 된다. ssh 클라이언트로 이용
* 다음 팟플레이어: 설치시 홈페이지 첫화면 변경이나, 클리너 설치가 기본 체크되어 있으므로, 체크 해지 하도록 한다.
* [리디북스 뷰어](https://ridibooks.com/support/app/download)
* [Filezilla](https://filezilla-project.org/): FTP client. 설치할 때 오페라와 정보보호 프로그램을 설치한다고 한다. 주의해서 체크아웃하고 설치하자.
* [wget for windows](http://gnuwin32.sourceforge.net/packages/wget.htm): 서지분석 프로그램에서 wget를 이용하고 있다. 설치 후 경로를 PATH에 추가해주어야 한다.
* [Go](https://golang.org/)
* [VMware-player](https://my.vmware.com/en/web/vmware/free#desktop_end_user_computing/vmware_workstation_player/15_0)
