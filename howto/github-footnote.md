# Github에서 각주 넣기

## 배경

Markdown은 다양한 변종이 존재하는데, 현재 내가 작업하고 있는 맥환경은 Sublime Text + Marked2를 이용하고 있다. Marked2에서는 풋노트를 지원해주기 때문에 문제 없이 사용할 수 있었는데, 이게 깃헙에 올라가니 작동하지 않는다. 깃헙페이지(userid.github.io)에서는 풋노트가 작동하는 것으로 봤었는데, jekyll 엔진이 붙어야 제대로 동작하나 보다.

## 해결법

임시방편으로 해결한 방법은 다음과 같다.<sup id="a1">[1](#f1)</sup>
Expanding on the previous answers even further, you can add an id attribute to your footnote's link:

```html
Bla bla <sup id="a1">[1](#f1)</sup>
```

Then from within the footnote, link back to it.

```html
<b id="f1">1</b> Footnote content here. [↩](#a1)
```

This will add a little ↩ at the end of your footnote's content, which takes your readers back to the line containing the footnote's link.

## 꼼수

이런 방법을 제안한 사람이 있다.

Here is a note[²].

...
At the bottom:

#### ² Note Two
[²]:#-note-two

## 테스트

cmark-gfm에 풋노트가 추가되어 merge된 상태인데, 반영된 것인지 몰라서, 테스트를 해본다.[^3]

여기 밑에 각주가 나타난다고 가정하였다. 이건 작동이 안되는 것으로 보인다. (2019년 5월 24일 현재)

[^3]: 아래 출처에서 참고하였다.

* 출처: [Enable Markdown footnotes extension #498](https://github.com/github/markup/issues/498)
* 출처: [Footnotes #64](https://github.com/github/cmark-gfm/pull/64)

------
<b id="f1">1</b> [stackoverflow: How to add footnotes to GitHub-flavoured Markdown?](http://stackoverflow.com/questions/25579868/how-to-add-footnotes-to-github-flavoured-markdown) [↩](#a1)
