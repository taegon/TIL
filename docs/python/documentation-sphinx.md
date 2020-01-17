# Sphinx를 이용하여 파이썬 코드 문서화하기

[이 링크](https://tech.ssut.me/start-python-documentation-using-sphinx/)를 참조하자. 스핑크스의 간단한 사용법과 함께 깃헙 페이지 셋팅하는 방법도 같이 기술되어 있다.

```bash
$ rm -rf _build/html
$ make html
$ cd _build/html
$ git init
$ git add -A
$ git commit -m "Deploy"

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
```

## 히스토리

* (2020.01.14) 문서 업데이트. 참조했던 링크를 최신링크로 수정하고, `gh-pages`로 푸시하는 방식을 vuepress에서 사용한 방식을 옮겨놓았다.

<vue-disqus/>
