(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{421:function(_,v,e){"use strict";e.r(v);var t=e(25),r=Object(t.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"php-버전-이슈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#php-버전-이슈"}},[_._v("#")]),_._v(" PHP 버전 이슈")]),_._v(" "),e("h2",{attrs:{id:"악명-높은-php"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#악명-높은-php"}},[_._v("#")]),_._v(" 악명 높은 php")]),_._v(" "),e("p",[_._v("php는 웹환경에서 가장 널리 이용되는 언어 중 하나이나, 진입 장벽이 낮은 대신 언어가 자주 변하는 터라 악명 역시 높다(언어가 버젼별로 변화가 큰데, 서버사이드 언어이다 보니 서버환경에 의존적일 수 밖에 없다. 서버환경에서는 보수적으로 접근하기 때문에 버전이 낮은 경우가 많고, 호스팅 업체마다 버젼이 다른 경우가 많다). 오늘은 예전 코드를 포팅하면서 발생한 이슈들에 대해서 정리해 볼까 한다.")]),_._v(" "),e("h2",{attrs:{id:"사건-1-농촌정주환경지표-평가사이트-2008년-경-개발-살려내기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사건-1-농촌정주환경지표-평가사이트-2008년-경-개발-살려내기"}},[_._v("#")]),_._v(" 사건 1: 농촌정주환경지표 평가사이트 (2008년 경 개발) 살려내기")]),_._v(" "),e("p",[_._v("대학원 시절 연구실 게시판 사이트로 개발되었던 코드를 수정하여, 연구용 사이트를 개발하였다.\n베이스가 됐던 코드가 2000년 경에 연구실 선배가 구축해놓은 것으로 코드가 대부분 php3 내지 php4 수준에서 작성되었다.\n두 서버에 포팅을 했는데, 하나는 php5, 하나는 php7 환경에서 기존 코드를 디플로이했다.")]),_._v(" "),e("ul",[e("li",[_._v("POST, GET으로 넘겨준 인자는 "),e("code",[_._v("$_POST")]),_._v(", "),e("code",[_._v("$_GET")]),_._v("으로 받아야 한다.\n"),e("ul",[e("li",[_._v("구 버젼에서는 페이지로 넘겨준 값은 "),e("code",[_._v("POST")]),_._v(", "),e("code",[_._v("GET")]),_._v(" 메소드와 상관없이 변수명으로 그대로 받을 수 있었으나, 최근 버젼은 아니다.")]),_._v(" "),e("li",[_._v("파일업로드시 속성값도 바뀌었다. "),e("code",[_._v("$_POST")]),_._v("가 아니라, "),e("code",[_._v("$_FILES")]),_._v("로 받아줘야 한다.")])])]),_._v(" "),e("li",[_._v("php 코드 도입부는 "),e("code",[_._v("<?php")]),_._v("가 기본 설정이다.\n"),e("ul",[e("li",[_._v("구 버젼은 "),e("code",[_._v("<?")]),_._v("와 같이 간략하게 쓰는 경우가 많았다.")])])]),_._v(" "),e("li",[_._v("더이상 간단한 식 표현("),e("code",[_._v("<?=$variable?>")]),_._v(")를 지원하지 않는다.\n"),e("ul",[e("li",[_._v("최근버젼에는 보안 문제로 해당 구분을 지원하지 않으므로, "),e("code",[_._v("<?php echo $variable; ?>")]),_._v("과 같이 풀어써줘야 한다.")])])]),_._v(" "),e("li",[_._v("일부 함수가 바뀌었다.\n"),e("ul",[e("li",[e("code",[_._v("split")]),_._v(" -> "),e("code",[_._v("preg_split()")]),_._v(", "),e("code",[_._v("explode()")]),_._v(", "),e("code",[_._v("str_split()")])]),_._v(" "),e("li",[e("code",[_._v("mysql")]),_._v(" -> "),e("code",[_._v("mysqli")])])])]),_._v(" "),e("li",[_._v("서버 파라미터도 직접 접근이 안된다.\n"),e("ul",[e("li",[e("code",[_._v("$PHP_SELF")]),_._v(" -> "),e("code",[_._v("$_SERVER['PHP_SELF']")])])])])]),_._v(" "),e("h2",{attrs:{id:"좀-더-정리된-문헌"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#좀-더-정리된-문헌"}},[_._v("#")]),_._v(" 좀 더 정리된 문헌")]),_._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://php.net/manual/kr/migration70.incompatible.php",target:"_blank",rel:"noopener noreferrer"}},[_._v("Migrating from PHP 5.6.x to PHP 7.0.x: 이전 버전과 호환되지 않는 변경점"),e("OutboundLink")],1),_._v("점")]),_._v(" "),e("li",[e("a",{attrs:{href:"http://php.net/manual/kr/migration5.incompatible.php",target:"_blank",rel:"noopener noreferrer"}},[_._v("PHP 4에서 PHP 5.0.x로 이행: 이전 버전과 호환되지 않는 변경점"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=r.exports}}]);