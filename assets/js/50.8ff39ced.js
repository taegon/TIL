(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{212:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("바울랩미디어의 이호준 님이 쓴 무료 서적. 리디북스를 통해 읽었다. 저자는 "),a("a",{attrs:{href:"http://www.jejucodingcamp.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("제주 코딩 베이스캠프"),a("OutboundLink")],1),t._v("을 운영하고 있다.")]),a("p",[t._v("파이썬으로 엑셀 다루기는 openpyxl를 이용하고 있어서, 자세한 내용은 스킵하고, 기억해둘 부분만 메모로 남겨둔다.")]),t._m(1),t._m(2),a("p",[t._v("자세한 포맷 리스트는 36페이지에 있다. 혹은 "),a("a",{attrs:{href:"https://xlsxwriter.readthedocs.io/format.html#format-methods-and-format-properties",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식 문서"),a("OutboundLink")],1),t._v("를 참조하면 된다.")]),t._m(3),t._m(4),t._m(5),a("p",[t._v("네이버 SMTP를 이용하여 메일 첨부가 가능하다. 작성한 파일을 첨부하기 위해서는 다음과 같은 코드를 이용할 수 있다.")]),t._m(6)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"xlsxwriter-튜토리얼로-배우는-python-엑셀프로그래밍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xlsxwriter-튜토리얼로-배우는-python-엑셀프로그래밍","aria-hidden":"true"}},[this._v("#")]),this._v(" Xlsxwriter 튜토리얼로 배우는 Python 엑셀프로그래밍")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"포맷-지정하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#포맷-지정하기","aria-hidden":"true"}},[this._v("#")]),this._v(" 포맷 지정하기")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" xlsxwriter\nworkbook "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xlsxwriter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Workbook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2_2.xlsx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nworksheet "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workbook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_worksheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'First_sheet'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nbold "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workbook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bold'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nworksheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Average"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bold"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"기능"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#기능","aria-hidden":"true"}},[this._v("#")]),this._v(" 기능")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("차트를 추가할 수 있다. 이미지 삽입도 가능하다. 인터넷 상의 이미지를 삽입할 때는 "),s("code",[this._v("io.ByteIO(urllibs2.urlopen(url).read())")]),this._v("를 이용하여 삽입 가능하다.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"메일첨부"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#메일첨부","aria-hidden":"true"}},[this._v("#")]),this._v(" 메일첨부")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" smtplib\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("base "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" MIMEBase\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("multipart "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" MIMEMultipart\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" email "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" encoders\n\nserver "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" smtplib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SMTP_SSL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smtp.naver.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("465")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("login"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NAVER_ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NAVER_PW"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nMy_email "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test@naver.com"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# student[1] = "student@school.edu.kr"')]),t._v("\n\nmail "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MIMEMultipart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 헤더 정보 입력")]),t._v("\nmail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Subject'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"제목"')]),t._v("\nmail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'From'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" My_email\nmail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'To'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" student"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 메시지 입력")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 파일첨부")]),t._v("\nexcelfile "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MIMEBase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"octet-stream"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nexcelfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rb"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nencoders"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encode_base64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("excelfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nexcelfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Disposition'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'attachment;filename=\"{file}\"'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attach"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("excelfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 서버 전송")]),t._v("\nserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sendmail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("My_email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("student"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("as_string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("quit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);