(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{330:function(e,_,o){"use strict";o.r(_);var v=o(17),t=Object(v.a)({},(function(){var e=this,_=e.$createElement,o=e._self._c||_;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"_18장-asyncio를-이용한-동시성"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_18장-asyncio를-이용한-동시성"}},[e._v("#")]),e._v(" 18장 asyncio를 이용한 동시성")]),e._v(" "),o("blockquote",[o("p",[e._v("동시성을 구조, 병렬성은 실행에 관한 것이다. - 롭 파이크의 "),o("a",{attrs:{href:"https://blog.golang.org/concurrency-is-not-parallelism",target:"_blank",rel:"noopener noreferrer"}},[e._v("Concurrency Is Not Paralleism (It's Better)"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("이미리 사이먼(Imre Simon)은 과학에서의 2대 죄악으로 "),o("strong",[e._v("동일한 것을 의미하기 위해 다른 단어를 사용하는 것")]),e._v("과 "),o("strong",[e._v("동일한 단어를 이용해서 여러 가지를 의미하는 것")]),e._v("이라고 이야기했다.")]),e._v(" "),o("p",[e._v("asyncio는 파이썬 3.4에서 추가되었고, 3.3과도 호환되지만, "),o("code",[e._v("yield from")]),e._v(" 표현식을 많이 사용하므로, 그 이전 버전과는 호환되지 않는다. Trollius 프로젝트는 파이썬 2.6 이후 버전으로 하위 포팅된 프로젝트이다.")]),e._v(" "),o("h2",{attrs:{id:"스레드와-코루틴-비교"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#스레드와-코루틴-비교"}},[e._v("#")]),e._v(" 스레드와 코루틴 비교")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("ayncio.Task")]),e._v("와 "),o("code",[e._v("threading.Thread")]),e._v("는 거의 대등하다.")]),e._v(" "),o("li",[o("code",[e._v("Task")]),e._v("는 코루틴을 구동하고, Thread는 콜러블을 호출한다.")]),e._v(" "),o("li",[o("code",[e._v("Task")]),e._v("는 객체를 직접생성하지 않고, "),o("code",[e._v("asyncio.async()")]),e._v("나 "),o("code",[e._v("loop.create_task()")]),e._v("를 통해 생성한다.")]),e._v(" "),o("li",[o("code",[e._v("Task")]),e._v(" 객체는 생성과 동시에 실행되고, 쓰레드는 start를 호출해줘야 한다.")]),e._v(" "),o("li",[e._v("스레드는 외부에서 중단시킬 수 있는 수 없고, "),o("code",[e._v("Task")]),e._v("는 코루틴 안에 "),o("code",[e._v("CancelledError")]),e._v("를 발생시키는 "),o("code",[e._v("Task.cancel()")]),e._v("를 호출할 수 있다.")]),e._v(" "),o("li",[e._v("스레드에서는 "),o("code",[e._v("supervisor()")]),e._v("를 그냥 호출하지만, async 버전에서는 "),o("code",[e._v("loop.run_until_complete()")]),e._v("로 호출해야 한다.")])]),e._v(" "),o("h3",{attrs:{id:"asyncio-future-논블로킹-설계"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#asyncio-future-논블로킹-설계"}},[e._v("#")]),e._v(" asyncio.Future: 논블로킹 설계")]),e._v(" "),o("p",[o("code",[e._v("asyncio.Future")]),e._v("와 "),o("code",[e._v("concurrent.futures.Future")]),e._v("는 인터페이스가 거의 같지만, 다르게 구현되어 있어 호환되지 않는다.")]),e._v(" "),o("p",[o("code",[e._v("asyncio.Future")]),e._v("가 다른 점은 다음과 같다.")]),e._v(" "),o("ul",[o("li",[e._v("코루틴 안에서 "),o("code",[e._v("yield from")]),e._v("으로 하위 함수를 호출하므로, 제어권을 돌려받기 위해 호출하는 함수에 콜백함수를 전해줄 필요가 없다.")]),e._v(" "),o("li",[o("code",[e._v("yield from")]),e._v(" 식 자체가 리턴 값이 되므로 "),o("code",[e._v("result()")]),e._v("를 호출할 필요가 없다.")]),e._v(" "),o("li",[o("code",[e._v("result()")]),e._v(" 함수는 인수를 받지 않고, 실행이 완료되지 않았을 때 호출하면, "),o("code",[e._v("asyncio.InvalidStateError")]),e._v(" 예외가 발생한다.")])]),e._v(" "),o("h3",{attrs:{id:"future-task-코루틴에서-생성하기"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#future-task-코루틴에서-생성하기"}},[e._v("#")]),e._v(" Future, Task, 코루틴에서 생성하기")]),e._v(" "),o("p",[o("code",[e._v("asyncio.async(coro_or_future, *, loop=None)")]),e._v(": 코루틴과 Future를 다 받을 수 있아서 통합한다. 코루틴을 넘겨주면, "),o("code",[e._v("loop.create_task()")]),e._v("를 호출해서 "),o("code",[e._v("Task")]),e._v("를 생성한다. 이벤트 룹을 생략하면, "),o("code",[e._v("asyncio.get_event_loop()")]),e._v("를 호출해서 루프 객체를 가져온다.")]),e._v(" "),o("p",[o("code",[e._v("BaseEventLoop.create_task(coro)")]),e._v(": 이 메서드는 코루틴을 실행하기 위해서 사용되며, 파이썬 3.4.2 이후로 사용가능하다.")]),e._v(" "),o("h2",{attrs:{id:"asyncio와-aiohttp로-내려받기"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#asyncio와-aiohttp로-내려받기"}},[e._v("#")]),e._v(" asyncio와 aiohttp로 내려받기")]),e._v(" "),o("p",[e._v("파이썬 3.4에서 asyncio는 TCP와 UDP만 지원한다. HTTP 프로토콜을 사용하기 위해서는 서드파티 패키지를 설치해야 한다.")]),e._v(" "),o("p",[e._v("asyncio를 이용한 예제는 "),o("a",{attrs:{href:"https://github.com/taegon/fluentpython-example-code/blob/master/17-futures/countries/flags_asyncio.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("다음 링크"),o("OutboundLink")],1),e._v("와 같다.")]),e._v(" "),o("p",[o("code",[e._v("asyncio.wait()")]),e._v(" 코루틴은 "),o("code",[e._v("Future")]),e._v(" 객체나 코루틴의 반복형을 받아서, "),o("code",[e._v("Task")]),e._v(" 안에 래핑한다. 결국 모든 객체가 "),o("code",[e._v("Future")]),e._v("객체가 되고, 이를 "),o("code",[e._v("loop.run_until_complete()")]),e._v("에 넘겨주어 실행하게 된다. 리턴 값으로 "),o("code",[e._v("(<실행완료된 Future 셋>, <실행 완료되지 않은 Future 셋>)")]),e._v("를 전달 받는데, 일반적으로 두번째 인자는 공집합이므로 "),o("code",[e._v("_")]),e._v("로 할당한다. 하지만 일부 Future객체는 "),o("code",[e._v("timeout")]),e._v("과 "),o("code",[e._v("return_when")]),e._v(" 키워드를 통해 완료 안된 채로 리턴될 수 있다. 자세한 사항은 "),o("a",{attrs:{href:"http://bit.ly/1JIwZS2",target:"_blank",rel:"noopener noreferrer"}},[e._v("공식문서"),o("OutboundLink")],1),e._v("를 참조하자.")]),e._v(" "),o("p",[e._v("이 예제에서 블로킹 입출력을 수행하는 "),o("a",{attrs:{href:"https://github.com/taegon/fluentpython-example-code/blob/master/17-futures/countries/flags.py#L33",target:"_blank",rel:"noopener noreferrer"}},[e._v("이전 코드"),o("OutboundLink")],1),e._v("를 사용할 수 없다. "),o("code",[e._v("asyncio")]),e._v("를 활용하기 위해서는 모든 함수가 "),o("code",[e._v("yield from")]),e._v("를 통해서 제어권을 다시 이벤트 루프에 넘겨주어야 하기 때문이다.")]),e._v(" "),o("p",[o("code",[e._v("asyncio")]),e._v("는 알아야 할 개념도 많고 복잡해 보이지만, 귀도 반 로섬은 '실눈을 뜨고 보면서 yield from 키워드가 없는 것처럼 생각'하면 된다고 조언한다.")]),e._v(" "),o("p",[o("code",[e._v("yield from foo")]),e._v("를 사용하면, 이 코드가 있는 현재의 코루틴은 중단되지만, 제어권이 이벤트 루프로 다시 넘어가서 이벤트 루프가 블로킹 되지 않는다. foo가 완료되면, 중단된 코루틴으로 반환해서 실행이 계속 된다.")]),e._v(" "),o("p",[o("code",[e._v("yield from")]),e._v(" 사용법은 짧게 다시 정리하면 다음과 같다.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("yield from")]),e._v("으로 연결된 전체 코루틴 체인은 가장 바깥쪽에서 "),o("code",[e._v("next()")]),e._v(", "),o("code",[e._v("send()")]),e._v(" 혹은 암묵적(for loop 같은)으로 호출하는 비코루틴 호출자에 의해 구동된다.")]),e._v(" "),o("li",[e._v("가장 안쪽 체인에서는 단지 yield를 사용하여 단순 제너레이터나 반복형 객체가 되어야 한다.")])]),e._v(" "),o("p",[o("code",[e._v("async")]),e._v(" API에서도 동일한 원칙이 적용되는데,")]),e._v(" "),o("ul",[o("li",[e._v("가장 바깥쪽에서는 대표 제너레이터를 "),o("code",[e._v("loop.run_until_complete()")]),e._v(" 등으로 구동한다. "),o("code",[e._v("next()")]),e._v(", "),o("code",[e._v("send()")]),e._v("를 사용하지 않고 "),o("code",[e._v("asyncio")]),e._v(" 이벤트 루프가 직접 관리하도록 한다.")]),e._v(" "),o("li",[e._v("가장 안쪽의 하위제너레이터는 우리가 만든 코드가 아니라, 실제로 입출력을 수행하는 라이브러리 함수여야 한다.")])]),e._v(" "),o("p",[e._v("다음 절에는 앞서 말한 이 질문에 대해서 살펴본다.")]),e._v(" "),o("blockquote",[o("p",[e._v("둘 다 단일 스레드환경인데, asyncio를 이용하면, 그렇지 않았을 때에 비해서 5배나 빨라졌던 걸까?")])]),e._v(" "),o("h2",{attrs:{id:"블로킹-호출을-에둘러-실행하기"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#블로킹-호출을-에둘러-실행하기"}},[e._v("#")]),e._v(" 블로킹 호출을 에둘러 실행하기")]),e._v(" "),o("p",[e._v("Node.js 창시자 라이언 달(Ryan Dahl)은 '우리는 입출력을 완전히 잘못하고 있다'라고 설명하였다. 그는 디스크나 네트워크 입출력을 블로킹 함수로 정의하며 이 함수를 논블로킹 함수처럼 취급하면 안된다고 말한다. 블로킹 함수가 전체 애플리케이션을 멈추게 하지 않기 위해서는 다음과 같은 방법이 있다.")]),e._v(" "),o("ul",[o("li",[e._v("블로킹 연산을 각기 별도의 스레드에서 실행한다.")]),e._v(" "),o("li",[e._v("모든 블로킹 연산을 논블로킹 비동기 연산으로 바꾼다.")])]),e._v(" "),o("p",[e._v("파이썬에서 사용하는 OS 쓰레드는 수 메가 바이트의 메모리를 소비하므로, 수천 개의 연결을 처리하기 위해 윗 방식을 선택하기 어렵다. 전통적으로 콜백으로 비동기 호출을 구현했다. 개념적으로는 하드웨어 인터럽트와 비슷한 저수준 개념이다. 라이언 달은 단순함과 저부하를 이유로 콜백을 지지한다.")]),e._v(" "),o("p",[e._v("asyncio를 이용하면 블로킹되는 부분이 거의 없이 처리할 수 있으나, 순수 버전에서는 이미지를 다운받는동안 블로킹이 되어 성능이 나올 수가 없었던 것이다.")])])}),[],!1,null,null,null);_.default=t.exports}}]);