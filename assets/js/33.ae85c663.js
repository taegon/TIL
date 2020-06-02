(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{329:function(t,s,a){"use strict";a.r(s);var n=a(17),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"분류"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#분류"}},[t._v("#")]),t._v(" 분류")]),t._v(" "),a("p",[t._v("가장 일반적인 지도 학습은 회귀와 분류인데, 2장에서 회귀에 대해 살펴보았고, 이번 장에서는 분류에 대해서 살펴본다.")]),t._v(" "),a("h2",{attrs:{id:"mnist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mnist"}},[t._v("#")]),t._v(" MNIST")]),t._v(" "),a("p",[t._v('미국 인구조사국 직원과 고등학생이 손으로 쓴 70,000개의 숫자 이미지인 MNIST 데이터셋을 이용한다. 워낙 널리 이용되기 때문에 머신러닝 분야의 "Hello World"라고 불린다.')]),t._v(" "),a("p",[t._v("사이킷런에서 여러 헬퍼 함수를 이용하여 자료를 획득할 수 있는데, 데이터셋을 다운받는 코드 중 하나는 다음과 같다.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sklearn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datasets "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" fetch_mldata\nmnist "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fetch_mldata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MNIST original'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("이 데이터셋은 설명키인 "),a("code",[t._v("DESCR")]),t._v(", 샘플 자료를 담고 있는 "),a("code",[t._v("data")]),t._v(", 그리고 레이블 배열을 담고 있는 "),a("code",[t._v("target")]),t._v("키로 구성된다.\n특성은 784개인데, 이는 28x28 픽셀을 의미한다.")]),t._v(" "),a("p",[t._v("이미지를 플롯하기 위해서는 다음과 같은 코드를 이용할 수 있다.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("matplotlib inline\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" matplotlib\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" matplotlib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pyplot "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" plt\n\nX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mnist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nsome_digit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" X"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("36000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nsome_digit_image "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" some_digit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reshape"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("some_digit_image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cmap "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" matplotlib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("binary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" interpolation"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nearest"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("axis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"off"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("show"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("이 데이터셋은 앞쪽 60,000개는 훈련용으로 뒤쪽 10,000개는 테스트 세트로 구성해 두었다. 또한 훈련 샘플은 순서에 민감하기 때문에 비슷한 샘플이 연이어 나오게 되면, 성능이 나빠지므로 데이터를 섞어줄 필요가 있다.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np\nshuffle_index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("permutation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nX_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Y_train "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" X_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("shuffle_index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Y_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("shuffle_index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=p.exports}}]);