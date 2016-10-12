# 로그아웃 후 세션 유지하는 법
서버에 프로그램을 돌려놓고 로그아웃하는 경우, 로그아웃과 동시에 프로그램이 죽는 경우가 있다.
flask를 이용해서 open API를 열어둔 코드도 다른 웹서버와 연동하기 않고 standalone 모드로 구동했더니 동일한 문제가 발생하였다.
이 경우, tmux를 이용하여 해당 세션을 유지하도록 해주면 해결할 수 있다.

```bash
# tmux세션을 연다.
$ tmux

# 생성된 세션에서 프로그램 구동
# 예를 들어 jupyter
$ jupyter notebook

# 세션에서 빠져나오기 (세션은 유지)
# (C+b d) 혹은 tmux detach
$ tmux detach
```

```bash
# 다시 해당 세션으로 연결하고 싶을 때
$ tmux attach
```

## 관련링크
* [http://www.tecmint.com/keep-remote-ssh-sessions-running-after-disconnection/](http://www.tecmint.com/keep-remote-ssh-sessions-running-after-disconnection/)