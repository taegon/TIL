# zsh 셋팅하기

## 배경

종종 개발자 유투브를 보다보면, 화려한 터미널을 볼 때가 있다. 터미널에 무슨 기능을 기대하겠냐만은 git의 상태를 보여주는 것만으로도 매우 근사해 보였다. 우연히 트윗에서 그 존재를 알게 되었고, 오늘 설치해 보았다.

## 설치하기

### oh my zsh 설치하기

기본적으로 zsh이 깔려있었던 탓에 설치는 매우 쉬웠다.
[공식홈페이지](http://ohmyz.sh/)에서 시키는대로 다음과 같이 터미널에서 실행시키면 된다.

```bash
$ sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

### 테마 설정하기

테마는 기본적으로 설치가 되는 듯 하다. 설정파일에서 테마 이름만 바쭤주면 된다.
상세한 설명은 [공식페이지](https://github.com/robbyrussell/oh-my-zsh/wiki/Themes)에서 참조하면 된다.

간단히 설명하자면,
`~/.zshrc` 에서 `ZSH_THEME=robbyrussell`를 바꿔주면 된다.

### agnoster테마와 특수문자 오류 해결

이렇게 설정했음에도 결과가 매끄럽게 나오지 않는다.
전체적인 설명은 [다음 글](https://gist.github.com/kevin-smets/8568070)을 참조하면 되는데, 요약하자면, 폰트를 새로 깔고, iterm2에서 폰트를 바꿔주면 된다.

폰트 설치는 다음 [깃허브 저장소](https://github.com/powerline/fonts)를 참조하여 설치하면 된다.

역시나 간단히 쓰자면, 다음 구문을 실행하면 된다.

```bash
# clone
git clone https://github.com/powerline/fonts.git --depth=1
# install
cd fonts
./install.sh
# clean-up a bit
cd ..
rm -rf fonts
```
