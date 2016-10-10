# Today I Learned

오늘 새로 배운 것을 다음의 규칙으로 commit 합니다.
[thoughtbot til 참고](https://github.com/thoughtbot/til)
[율무님 github 참고](https://github.com/milooy/TIL)

## 작성 규칙
- 문서 생성은 [GFM (Github Flavored Markdown)](https://help.github.com/articles/github-flavored-markdown/) 을 사용한다. (확장자 `.md`)
- 언어나 기술명으로 폴더를 만든다. (root에 문서를 만들지 않는다.)
- 파일명은 영어로.
- 로컬 작업시 url에서 폴더를 지정할 수 있다. (마지막에 /를 붙여야 폴더가 생성)


## 로컬에서 띄우기
[gollum](https://github.com/gollum/gollum), [pow](http://pow.cx/) 와 [anvil](http://anvilformac.com/)을 사용한다.
anvil은 pow를 사용하기 편리하게 메뉴바에 붙여주는 GUI
pow는 로컬 웹서버로 루비로 작성된 듯. config.ru 파일을 읽어서 해당 폴더의 기능설정이 가능하고, 여기서는 gollum를 불러오도록 셋팅되어 있음
gollum 위키 페이지 생성도구

### gollum 설치
```bash
$ [sudo] gem install gollum
```
xcode-select install 를 이용하여 기본라이브러리 설치 필요 (homebrew를 통한 라이브러리와 연결이 잘 안됨)
인코딩 에러가 날 경우, 구글링 (export LC_CTYPE="utf-8" 추가로 해결가능)
 
### pow 설치 및 제거
```bash
$ curl get.pow.cx | sh

$ curl get.pow.cx/uninstall.sh | sh
```

### 사용법
다음 설정을 하고 브라우저에서 [http://til.wiki.dev/](http://til.wiki.dev/)로 접속한다.

```bash
$ cd ~/.pow
$ ln -s path/to/this_local_repo til.wiki
```

### Anvil 설치
GUI pow 관리툴 Anvil [http://anvilformac.com/](http://anvilformac.com/)

### config.ru​
율무님 깃헙 페이지에서 구함. fork를 해도 될 것 같긴한데, 그냥 raw 파일을 하드카피함.