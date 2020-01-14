# Vi (Vim) 작업환경 구축하기

## tl;dr

- vim용 플러그인 관리 프로그램 4종: [Pathogen, Vundle, NeoBundle, vim-plug](https://github.com/itchyny/lightline.vim#installation)
- git에서 플러그인을 다운받고, vimrc에서 로드 할 수 있도록 해준다.
- powerline이라는 유명한 플러그인이 있는 듯 하다. fork한 서비스가 여럿 있다.
- powerline용으로 패치된 폰트를 설치해주어야 한다.

## 배경

최근 VS Code와 Oh my zsh를 설치하면서, vim 설정도 자연스럽게 찾아보게 되었다. 플러그인을 찾아보면서 vi를 최고로 꼽는 사람들을 이해할 수 있었다. 필요한 플러그인을 설치하면 최근 널리 이용되는 VS Code, atom, sublime 등과 비교해도 손색 없어 보인다.

## 설치하기

맥에서는 iTerm2를 이용하고 있는데, 아래 패치된 폰트를 이용하면 별 문제 없이 설정이 가능하였다. 하지만 윈도우에서 설정을 할 때는 터미널 프로그램이 변변치 않기 때문에, 설정이 잘 되지 않았다.

[윈도우용 터미널 설정](./terminal-on-windows.md)을 참조하자.

## 폰트 설치하기

제대로된 아이콘을 보기 위해서는 패치된 폰트를 설치해야 하는데, 다음 깃헙 저장소를 참고하면 된다.

- [Powerline용 폰트](https://github.com/powerline/fonts)
