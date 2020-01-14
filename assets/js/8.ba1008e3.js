(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{237:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),a("p",[t._v("제너레이터 표현식은 지능형 리스트와 유사하게 사용하며, 대괄호([]) 대신 괄호(())를 이용하면 되는 것으로 보인다. 차이점은 제너레이터는 반복문에서 호출할때마다 하나씩 값을 생성하고, 지능형 리스트는 리스트를 만들어 두고, 거기서 값을 꺼내준다.")]),t._m(5),a("p",[t._v("namedtuple은 2개의 인자를 갖는데, 첫번째는 클래스명, 두번째는 필드명이 필요하다. 필드명은 공백으로 구분된 하나의 문자열, 혹은 문자열 리스트로 가능하다.")]),t._m(6),t._m(7),a("p",[t._v("인덱스 0부터 시작하는 이유: "),a("a",{attrs:{href:"https://www.cs.utexas.edu/users/EWD/transcriptions/EWD08xx/EWD831.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("번호를 0부터 매겨야 하는 이유(Why Numbering Should Start at Zero by Edsger W. Dijkstra)"),a("OutboundLink")],1)]),t._m(8),t._m(9),t._m(10),a("ul",[a("li",[a("a",{attrs:{href:"http://bit.ly/1Vm6WEa",target:"_blank",rel:"noopener noreferrer"}},[t._v("SortedCollection 비법"),a("OutboundLink")],1),t._v(" by Raymond Hettinger")])]),t._m(11),a("p",[t._v("bisect는 성적 등급을 결정할 때 유용하다.")]),t._m(12),t._m(13),a("p",[t._v("숫자만 있는 리스트는 배열을 이용하는 것이 더 효율적이다. fromfile(f, n)와 tofile(f) 함수가 추가로 제공되기 때문이다.")]),t._m(14),a("p",[t._v("씨언어에서 union과 비슷한 개념으로 이해된다. NumPy, SciPy에서 영감을 얻어 개발된 내장 클래스인데, 다음 글을 참조하자.")]),a("p",[a("a",{attrs:{href:"http://bit.ly/1Vm6C8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("언제 메모리 뷰를 사용해야 하는가?"),a("OutboundLink")],1),t._v(" by Travis Oliphant")]),t._m(15),a("p",[t._v("NumPy, SciPy, pandas, Blaze, 그리고 collections.deque")])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"_2장-시퀀스"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2장-시퀀스","aria-hidden":"true"}},[this._v("#")]),this._v(" 2장 시퀀스")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"구성"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#구성","aria-hidden":"true"}},[this._v("#")]),this._v(" 구성")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("컨테이너 시퀀스와 균일 시퀀스")]),s("li",[this._v("가변 시퀀스와 불변 시퀀스")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"지능형-리스트와-제너레이터-표현식"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#지능형-리스트와-제너레이터-표현식","aria-hidden":"true"}},[this._v("#")]),this._v(" 지능형 리스트와 제너레이터 표현식")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("지능형 리스트(list comprehension)를 "),s("em",[this._v("listcomp")]),this._v("로, 제너레이터 표현식을 "),s("em",[this._v("genexp")]),this._v("로 표현하기도 한다.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"namedtuple"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#namedtuple","aria-hidden":"true"}},[this._v("#")]),this._v(" namedtuple")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("City"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_fields "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 필드명 튜플을 돌려준다.")]),t._v("\nseoul "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" City"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_make"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seoul_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 일반 튜플을 네임드튜플로 생성")]),t._v("\nseoul"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_asdict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# collections.OrderedDict 객체를 돌려준다.")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"슬라이싱"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#슬라이싱","aria-hidden":"true"}},[this._v("#")]),this._v(" 슬라이싱")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("seq[start:stop:step]")]),t._v("은 "),a("code",[t._v("seq.__getitem__(slice(start, stop, step))")]),t._v("을 호출한다.\nNumPy는 n차원 텐서를 지원하며, "),a("code",[t._v("x")]),t._v("가 4차원 배열이라고 하면, "),a("code",[t._v("x[i, ...]")]),t._v("은 "),a("code",[t._v("x[i, :, :, :]")]),t._v("와 동일하다.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"sort"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sort","aria-hidden":"true"}},[this._v("#")]),this._v(" sort")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("fruits"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sort"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 리스트 자체를 바꿈")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sorted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fruits"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 새로운 리스트를 돌려줌")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("정렬된 시퀀스는 "),s("code",[this._v("bisect(haystack, needle)")]),this._v("로 검색하고, "),s("code",[this._v("bisect.insort(my_list, new_item)")]),this._v("으로 정렬된 리스트를 유지한다.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grade")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" breakpoints"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("70")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" grades"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'FDCBA'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("     i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bisect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bisect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("breakpoints"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" grades"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"array-array"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#array-array","aria-hidden":"true"}},[this._v("#")]),this._v(" array.array")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"메모리-뷰"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#메모리-뷰","aria-hidden":"true"}},[this._v("#")]),this._v(" 메모리 뷰")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"추가적으로-읽을거리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#추가적으로-읽을거리","aria-hidden":"true"}},[this._v("#")]),this._v(" 추가적으로 읽을거리")])}],!1,null,null,null);s.default=n.exports}}]);