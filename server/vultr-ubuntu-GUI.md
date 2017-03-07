# Vultr 서버 GUI 환경 구축하기
## 배경
구글 OAuth 인증을 받는 과정에서 해당 서버에서 접속을 해야하는 것으로 착각하는 바람에, 서버 환경에서 브라우저를 써야 한다고 생각했다.
터미널에서 웹에 접속할 수 있는 lynx, curl 등을 이용해 보았으나, 원할하지 않았다.

그래서 GUI 환경으로 첫 시도는 VNC 서버 설치, 두번째는 GUI 콘솔 설정이었다.

Vultr 공식 사이트에 두 가지 방법이 모두 설명되어 있다. 첫번째 시도는 제대로 동작하지 않았는데, 이유를 확인하지 못했다.
다행히 두번째 시도는 성공하였다. 하지만 외부에서 복사한 텍스트를 GUI 콘솔 상에 붙일 수가 없어서 애먹었다.

## 첫번째, VNC 서버 설정
다음 링크를 참조하자.
* [How-To Install VNC Desktop on Ubuntu 14.04](https://www.vultr.com/docs/how-to-install-vnc-desktop-on-ubuntu-14-04)

## 두번째 GUI 콘솔 활성화하기
다음 링크를 확인하자. 패키지 설치하고, 리붓하고 나면, 웹상에서 콘솔 연결시 GUI 콘솔이 뜬다. 터미널은 xterm을 이용한다.
* [Install GUI Environment for Ubuntu](https://www.vultr.com/docs/install-gui-environment-for-ubuntu)