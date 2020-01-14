(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{154:function(t,e,n){"use strict";n.r(e);var r=n(0),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),n("p",[t._v("주기적으로 usb로 연결된 외장하드와의 연결이 끊기면서 파일 복사가 굉장히 지연됨.")]),n("p",[t._v("해결법은 다음 블로그에서 잘 정리되어 있다.")]),n("ul",[n("li",[n("a",{attrs:{href:"http://codens.info/1154",target:"_blank",rel:"noopener noreferrer"}},[t._v("하드디스크 프리징, 쓰기 지연 에러 발생 해결 방법"),n("OutboundLink")],1),t._v(" by 코드루덴스")])]),n("p",[t._v("정리하자면 효율적인 전원관리 측면에서, 유휴자원에 대하여 주기적으로 idle 상태로 전환할 수 있도록 허용하는 것인데, 이게 외장하드에서는 우리가 기대하는 바와 다르게 동작하기 때문인 것으로 보인다.")]),n("p",[t._v('처음 해볼 수 있는 것은 "장치관리자"와 "전원관리 옵션"에서 전원관리를 하지 못하도록 설정하는 것이다. 예전에 블루투스 마우스 프리징은 이걸로 해결했는데, 현재 한경대 윈도우 서버에서 발생한 이슈는 이걸로 해결이 안되었다.')]),n("p",[t._v("다음으로 시도하는 것이 숨겨진 옵션을 켠 후, 이걸 활성화하는 것인다. 레지스트리를 건드는 부분이 해당부분이다.")]),n("p",[t._v("레지스트리를 갖다 붙이는 것이 다소 두렵다면, 다음 글을 참조하자.")]),n("ul",[n("li",[n("a",{attrs:{href:"https://www.sevenforums.com/tutorials/177819-ahci-link-power-management-enable-hipm-dipm.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to Enable HIPM and DIPM for your SSD and HDD in Windows 7 and Windows 8"),n("OutboundLink")],1)])]),t._m(1),n("p",[t._v("현재 여기까지 해서 문제가 해결되었다.")]),n("p",[t._v("추가적인 대응할 수 있는 방법은 관련 드라이버를 업데이트하는 것이다.")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"트러블슈팅-이벤트-129"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#트러블슈팅-이벤트-129","aria-hidden":"true"}},[this._v("#")]),this._v(" 트러블슈팅: 이벤트 129")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v('2가지 레지스트리 등록 절차가 단순히 숨겨진 옵션을 "전원관리 옵션" 패널에서 보이게 하는 것 뿐임을 알 수 있다. 그 이후, 다른 레지스트리를 추가하지 않았다. 또한 2번째 링크에서는 '),e("code",[this._v("HIPM+DIPM")]),this._v("를 설정하도록 해서 헷갈렸는데, "),e("code",[this._v("Active")]),this._v("로 설정하는 것이 맞다.")])}],!1,null,null,null);e.default=i.exports}}]);