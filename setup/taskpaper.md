# md 파일로 todo 관리하기

맥용 [`TaskPaper`](https://www.taskpaper.com/) 앱은 마크다운 형식으로 아웃라인을 보기 쉽게 텍스트 파일로 작업할 수 있도록 환경을 제공한다. 항상 멀티 플랫폼이 이슈이기 때문에 고민이었는데, 윈도우는 VS Code의 [`Todo+`](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-todo-plus) 익스텐션을 사용하고, 자료 공유는 드랍박스로 하도록 하였다. 깃헙으로 관리하는 것도 생각해보았는데, 자칫 자료를 잃을 수 있기는 하나, 변경이 잦고 매번 히스토리를 기록하는 수고보다는 빠르고 쉽게 환경을 설정하는 방식으로 선택하였다.

작성 방법은 간단하다. 그저 텍스트 파일을 만들되, 확장자를 `.taskpaper`로 지정하면 된다.

2019년 7월 경 "기계인간"님의 트윗에서 독서를 하는 팁으로 목차를 적고, 체크박스를 두고, 체크를 하면서 책을 읽어가는 과정을 소개하였다. 나도 해봐야겠다는 생각에 찾아보다보니, "기계인간"님은 vim를 이용한 것으로 추정되었다. vim환경으로 가기에는 이미 너무 일반인이 되어버린 터라, 이 글에 적어둔 바와 같이 VS Code를 이용하는 방식으로 정리하게 되었다.

더불어 [`Markdown All in One`](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) 익스텐션도 편리한 기능이 많아서 설치하였다. 이 익스텐션을 이용하면, taskpaper보다는 가볍지만, 마크다운을 작성하는 과정에서 손이 좀 덜 가게 된다. 예를 들어, 텍스트를 선택한 후 붙여넣기를하면, 주소링크형식으로 알아서 붙는다. 체크박스를 체크하거나 체크해제하는 것도 단축키로 가능하다.

* [Taskpaper 호환 프로그램 관련 글타래](https://support.hogbaysoftware.com/t/what-other-apps-support-taskpapers-file-format/1114)
