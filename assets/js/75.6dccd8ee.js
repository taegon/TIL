(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{183:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._m(0),t._m(1),e("p",[t._v("Markdown은 다양한 변종이 존재하는데, 현재 내가 작업하고 있는 맥환경은 Sublime Text + Marked2를 이용하고 있다. Marked2에서는 풋노트를 지원해주기 때문에 문제 없이 사용할 수 있었는데, 이게 깃헙에 올라가니 작동하지 않는다. 깃헙페이지(userid.github.io)에서는 풋노트가 작동하는 것으로 봤었는데, jekyll 엔진이 붙어야 제대로 동작하나 보다.")]),t._m(2),t._m(3),t._m(4),e("p",[t._v("Then from within the footnote, link back to it.")]),t._m(5),e("p",[t._v("This will add a little ↩ at the end of your footnote's content, which takes your readers back to the line containing the footnote's link.")]),t._m(6),e("p",[t._v("이런 방법을 제안한 사람이 있다.")]),t._m(7),e("p",[t._v("...\nAt the bottom:")]),t._m(8),t._m(9),e("p",[t._v("cmark-gfm에 풋노트가 추가되어 merge된 상태인데, 반영된 것인지 몰라서, 테스트를 해본다.[^3]")]),e("p",[t._v("여기 밑에 각주가 나타난다고 가정하였다. 이건 작동이 안되는 것으로 보인다. (2019년 5월 24일 현재)")]),e("p",[t._v("[^3]: 아래 출처에서 참고하였다.")]),e("ul",[e("li",[t._v("출처: "),e("a",{attrs:{href:"https://github.com/github/markup/issues/498",target:"_blank",rel:"noopener noreferrer"}},[t._v("Enable Markdown footnotes extension #498"),e("OutboundLink")],1)]),e("li",[t._v("출처: "),e("a",{attrs:{href:"https://github.com/github/cmark-gfm/pull/64",target:"_blank",rel:"noopener noreferrer"}},[t._v("Footnotes #64"),e("OutboundLink")],1)])]),e("hr"),e("p",[e("b",{attrs:{id:"f1"}},[t._v("1")]),e("a",{attrs:{href:"http://stackoverflow.com/questions/25579868/how-to-add-footnotes-to-github-flavoured-markdown",target:"_blank",rel:"noopener noreferrer"}},[t._v("stackoverflow: How to add footnotes to GitHub-flavoured Markdown?"),e("OutboundLink")],1),e("a",{attrs:{href:"#a1"}},[t._v("↩")])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"github에서-각주-넣기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github에서-각주-넣기","aria-hidden":"true"}},[this._v("#")]),this._v(" Github에서 각주 넣기")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"배경"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#배경","aria-hidden":"true"}},[this._v("#")]),this._v(" 배경")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"해결법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#해결법","aria-hidden":"true"}},[this._v("#")]),this._v(" 해결법")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("임시방편으로 해결한 방법은 다음과 같다."),a("sup",{attrs:{id:"a1"}},[a("a",{attrs:{href:"#f1"}},[this._v("1")])]),this._v("\nExpanding on the previous answers even further, you can add an id attribute to your footnote's link:")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[t._v("Bla bla "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("sup")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("a1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("[1](#f1)"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("sup")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("b")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("f1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("b")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" Footnote content here. [↩](#a1)\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"꼼수"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#꼼수","aria-hidden":"true"}},[this._v("#")]),this._v(" 꼼수")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Here is a note"),a("a",{attrs:{href:"#-note-two"}},[this._v("²")]),this._v(".")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"²-note-two"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#²-note-two","aria-hidden":"true"}},[this._v("#")]),this._v(" ² Note Two")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"테스트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#테스트","aria-hidden":"true"}},[this._v("#")]),this._v(" 테스트")])}],!1,null,null,null);a.default=r.exports}}]);