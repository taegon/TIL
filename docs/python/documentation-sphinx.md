# Sphinx를 이용하여 파이썬 코드 문서화하기

[이 링크](https://tech.ssut.me/2015/07/28/start-python-documentation-using-sphinx/)를 참조하자. 스핑크스의 간단한 사용법과 함께 깃헙 페이지 셋팅하는 방법도 같이 기술되어 있다.

```bash
$ rm -rf _build/html
$ mkdir -p _build/html
$ cd _build/html
$ git init

Initialized empty Git repository in /Users/ssut/sphinx-tutorial/docs/_build/html/.git/

$ git checkout --orphan gh-pages
# 주소는 알아서 바꿔줍시다.

$ git clone git@github.com:ssut/sphinx-tutorial.git --branch gh-pages --single-branch .

Cloning into '.'...
remote: Counting objects: 70, done.
remote: Compressing objects: 100% (53/53), done.
remote: Total 70 (delta 17), reused 69 (delta 16), pack-reused 0
Receiving objects: 100% (70/70), 392.82 KiB | 480.00 KiB/s, done.
Resolving deltas: 100% (17/17), done.
Checking connectivity... done.

$ rm .git/index
$ git clean -fdx

Removing .gitignore
Removing docs/
Removing my_package/

$ touch .nojekyll
# (사용하고 있는 터미널 환경에 따라 ../.. 로 입력해야 할 수도 있습니다.)

$ cd ...
$ make html
...
$ cd _build/html
$ git add .
$ git commit -m "Initial documentation"
$ git push
```
