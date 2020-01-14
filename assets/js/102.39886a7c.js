(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{156:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._m(1),s("ul",[s("li",[s("a",{attrs:{href:"https://blog.ayukawa.kr/archives/1342",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache와 Python 연동하기"),s("OutboundLink")],1),t._v(": cgi를 이용한 방식으로 진행")]),s("li",[s("a",{attrs:{href:"https://httpd.apache.org/docs/2.4/howto/public_html.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("사용자별 웹디렉토리 - 아파치 2.4 공식문서"),s("OutboundLink")],1)]),s("li",[s("a",{attrs:{href:"https://www.linux.com/blog/configuring-apache2-run-python-scripts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configuring Apache2 to run Python Scripts"),s("OutboundLink")],1)])]),s("p",[t._v("아파치에 cgi 모듈을 추가해줘야 한다.")]),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),s("ul",[s("li",[s("a",{attrs:{href:"https://crustulus.de/2013/09/encodings-in-cgi-scripts-using-python3/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Encodings In CGI Scripts Using Python3"),s("OutboundLink")],1)])]),t._m(8),t._m(9),t._m(10),s("p",[t._v("cgi를 구동하기 위한 파이썬 파일의 첫줄에 다음과 같이 스크립트 실행프로그램을 적시해야 한다.")]),t._m(11),s("p",[t._v("스크립트는 아파치 데몬이 실행 권한을 가지고 있어야 한다.")]),t._m(12),t._m(13),s("p",[t._v("한글 출력이 잘 되지 않아 에러가 나는 경우, spam 이라는 문자열과 함께 에러를 보여준다. 이 경우 아파치 에러 로그를 확인하면, cgi 에러를 확인할 수 있다. 오늘 문제는 한글 인코딩이 문제였는데, 아래와 같이 해결할 수 있었다.")]),t._m(14),s("p",[t._v("python 2 환경이라면, 아래와 같이 해결 가능하다.")]),t._m(15),s("ul",[s("li",[t._v("출처: "),s("a",{attrs:{href:"https://stackoverflow.com/questions/4374455/how-to-set-sys-stdout-encoding-in-python-3",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to set sys.stdout encoding in Python 3?"),s("OutboundLink")],1)]),s("li",[t._v("출처2: "),s("a",{attrs:{href:"https://stackoverflow.com/questions/2276200/changing-default-encoding-of-python",target:"_blank",rel:"noopener noreferrer"}},[t._v("Changing default encoding of Python?"),s("OutboundLink")],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"리눅스-서버에-파이썬-cgi-환경설정하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#리눅스-서버에-파이썬-cgi-환경설정하기","aria-hidden":"true"}},[this._v("#")]),this._v(" 리눅스 서버에 파이썬 cgi 환경설정하기")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"apache2에서-cgi-디렉토리-설정하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apache2에서-cgi-디렉토리-설정하기","aria-hidden":"true"}},[this._v("#")]),this._v(" apache2에서 cgi 디렉토리 설정하기")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("sudo")]),this._v(" a2enmod cgi\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("/etc/apache2/mods-enabled/userdir.conf")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-conf extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("<Directory /home/*/public_html/cgi-bin/>\nOptions ExecCGI\nSetHandler cgi-script\n</Directory>\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"아파치-서버-재시동"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#아파치-서버-재시동","aria-hidden":"true"}},[this._v("#")]),this._v(" 아파치 서버 재시동")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("sudo")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("service")]),this._v(" apache2 restart\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"인코딩-해결하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#인코딩-해결하기","aria-hidden":"true"}},[this._v("#")]),this._v(" 인코딩 해결하기")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("/etc/apache2/apache2.conf")]),this._v("에 다음과 같이 기본 인코딩 추가")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-conf extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("AddDefaultCharset UTF-8\nSetEnv PYTHONIOENCODING utf8\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"기타-주의사항"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#기타-주의사항","aria-hidden":"true"}},[this._v("#")]),this._v(" 기타 주의사항")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("#!/usr/bin/env python3")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("chmod")]),this._v(" +x hello.py\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"encoding이-제대로-되지-않을-경우"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#encoding이-제대로-되지-않을-경우","aria-hidden":"true"}},[this._v("#")]),this._v(" Encoding이 제대로 되지 않을 경우")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("sys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stdout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" codecs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getwriter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stdout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("detach"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-python2 extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("sys.setdefaultencoding('UTF8')\n")])])])}],!1,null,null,null);e.default=n.exports}}]);