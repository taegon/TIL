# 프로그래밍 관련 북마크

## 깃헙

* [깃헙으로 팀플하기](https://www.slideshare.net/nexusz99/github-64532279): 아주 기초적인 단계에서 깃헙 소개
* [깃헙으로 취직하기](https://sujinlee.me/professional-github/): 깃헙을 잘 사용하기 위한 실용적인 방법을 잘 제시함

## 강좌

* [구글 코드랩](https://codelabs.developers.google.com)
* [마소 Learn](https://docs.microsoft.com/en-us/learn/): Azure 실습형 강좌

## 성과체크

* [스킬 IQ 체크](https://www.pluralsight.com/)
* [CodeWar](https://www.codewars.com/)

## 프로그래밍 언어

## Go

* [Do you make these Go coding mistakes?](https://yourbasic.org/golang/gotcha/)
* [github.com/byounghoonkim/project-layout/tree/translate-ko](https://github.com/byounghoonkim/project-layout/tree/translate-ko): 표준 Go 프로젝트 레이아웃
* [Creating a RESTful API With Golang](https://tutorialedge.net/golang/creating-restful-api-with-golang/)
* [github.com/luckyp71/go-mux-gorm-pg-nginx](https://github.com/luckyp71/go-mux-gorm-pg-nginx): RESTful web service using Golang, Gorilla Mux, Gorm, PostgreSQL, and Nginx
* [Golang 패키지 이름(Package Names)](https://byounghoonkim.github.io/posts/golang-package-names/)
* [How to Code in Go](https://www.digitalocean.com/community/books/how-to-code-in-go-ebook): 디지털오션 커뮤니티의 Go 튜토리얼 (27P 무료 PDF)

## Rust

Rust는 강력한 타입체킹과 퍼포먼스가 장점인데, 배포과정이 매우 간편하다. 최근 CLI용 프로그램 중 rust로 제작되어 배포되는 경우가 꽤 많이 보이는데, 대부분 명령어 한줄로 설치가 가능하며, OS별로 동일하게 설치가능하다. 그러면서 성능은 네이티브 수준으로 나온다. 다만 타입과 포인터가 있다보니, 파이썬처럼 쉽지는 않다.

* [Scientific computing: a Rust adventure [Part 2 - Array1]](https://www.lpalmieri.com/posts/2019-04-07-scientific-computing-a-rust-adventure-part-2-array1/)
* [Cookin' with Rust](https://rust-lang-nursery.github.io/rust-cookbook/)
* [Rust 기초](https://jiyeonseo.github.io/2020/03/07/start-rust/) by 치즈님
* [Tour of Rust](https://tourofrust.com/): 단계별로 배우는 Rust 가이드
* [Python을 Rust로 변환하며 Rust배우기](https://news.hada.io/topic?id=2563)
* [Design patterns in Rust](https://rust-unofficial.github.io/patterns/)

## 파이썬

* [빠르게 시작하는 pytest](https://jiyeonseo.github.io/2020/03/10/pytest/) by 치즈님
* [Data To Fish](https://datatofish.com/): Data To Fish was born in an effort to facilitate the application of data science using various tools such as Python, R, Julia and SQL.
* [중급 파이썬: 파이썬 팁들](https://ddanggle.gitbooks.io/interpy-kr/content/)
* [A Curious Course on Coroutines and Concurrency](http://www.dabeaz.com/coroutines/Coroutines.pdf)
* [note.nkmk.me](https://note.nkmk.me/en/): 개인블로그인데, 파이썬 관련한 코드들이 깔끔하게 잘 정리되어 있다.

## Swift

* [Hacking with Swift](https://www.hackingwithswift.com/)

### 성능 이슈

당연하게도 C언어가 가장 빠르고, 자바가 다음, 파이썬이 가장 느린 결과를 보여준다. 다만 자바 같은 경우 어느정도 잘 쓰면(주로 내가 상용했던 메소드들), C언어의 괜찮은 성능과 근사한 값을 보인다는 점. PyPy가 C의 일반적인 사용법에 유사한 성능을 내지만, 자바 최적화 버전보다는 느린 점도 인상적이다. 그리고 C++의 가장 성능 좋은 방식은 성능이 정말 압도적이다.

* [언어별 입력속도 비교](https://www.acmicpc.net/blog/view/56) by baekjoon
* [언어별 출력속도 비교](https://www.acmicpc.net/blog/view/57) by baekjoon
* [언어별 정렬속도 비교](https://www.acmicpc.net/blog/view/58) by baekjoon

## 내가 주목하는 언어

이 글을 쓰고 있는 현재 (2020년 1월), 파이썬의 대중화는 매우 반길 일이지만, 한편으로 30년 포트란, 20년 전 c, 10년 전 java의 정점이 떠오른다. 30년 전 베이직을 배우면서 c가 대세임을 알았었고, 20년 전 자바의 성장을 느낄 수 있었다. 물론 그동안 많은 언어나 프레임워크의 예측을 빗나가게 했기 때문에, 내 예측을 자랑하고 싶은 것은 아니다. 파이썬을 처음 접한 것이 거의 20년 전이었고, 장난감 이상으로 써보고 싶다고 생각한지도 10년이 넘었는데, 불과 3-4년전부터 메인으로 이용하고 있다.
그런데, 지금의 '파이썬=프로그래밍 입문=인공지능'이라는 공식이 두렵다. 파이썬의 장점이 무척이나 많지만 만능이 아니기에, 그래서 더더욱 성능에 방점을 찍는 언어들에 관심을 갖게 되는 것 같다. go를 재미삼아 본지도 5-6년은 최소한 넘은 것 같다. 생각보다는 사용처가 제한적이면서, 최근에서는 rust가 더 강세를 보이는 듯한 기분이 든다.
노드js는 제대로 따라가보지도 못했지만, 리액트나 뷰 정도는 손에 익는 정도로 배워두고 싶긴 하다.
줄리아는 불과 2년 전쯤 그 존재를 알았는데, 파이썬의 느린 계산능력을 타겟팅하여 개발된 언어여서 성능은 좋으나, 너무 연구자를 고려하다보니, R의 향기가 있다. 다만 크지않은 최적화 문제쪽으로는 예제도 많고, 써볼 여지가 충분해 보인다.
코트린은 자바를 10년 넘게 써온 경력이 아쉬워서 jvm상에서 돌아가는 언어중에서는 그나마 제일 나은 언어여서 관심이 간다. 물론 안드로이드 개발을 할 수 있다는 핑계도 있다.
스위프트는 당연히 iOS 개발이라는 핑계로 배워보고 싶은 언어이다. 10년째 관심목록에 있다.(10년전에는 obj-c였지만)
다트는 멀티플랫폼을 지원하는 웹앱 프레임워크인 flutter의 공식 언어이다. 역시나 구글이 밀고 있다는 점에서 관심있게 보고 있긴 한다. 이쪽 생태계가 너무 빠르게 바뀌고, 웹앱으로 가는 메리트가 있을지 고민이 된다. 모바일웹으로 어느정도 커버가 가능하기 때문이기도 하고, 앱 개발로 갈거면, 네이티브로 개발하는 편이 낫지 않나 싶기도 하다. 특히나 스위프트 UI툴킷이 개선되면서, 작업성이 매우 향상되었다고 하니, 그쪽에 시간 투자를 더 하는 것이 도움이 되지 않을까 싶다.

* rust
* go
* react or vue.js
* julia for OR
* kotlin
* swift
* dart for flutter

<vue-disqus/>
