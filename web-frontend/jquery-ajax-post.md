# POST로 AJAX 처리하기
## tl;dr
* jquery를 이용하면 쉽게 구현할 수 있다.
* 서버측에서 출력값이 리턴값이 되며, 포맷을 맞춰주면 된다.
* 시행착오가 있었지만 잘된다.

## 배경
프로젝트 사이트에서 메시지를 남기면 메일로 쏴주는 기능을 구현중인데, 원페이지 사이트라서 페이지 리프레시가 없도록 ajax로 구현하였다. 제출 버튼 클릭시 정보를 post로 쏴주고 (텍스트가 길어서 post로 보내도록 했다), 정상적으로 메시지가 보내지고 나면, 제출 완료 창이 떠서 피드백을 줄 수 있도록 구현하였다.

## 사용예
아래링크를 참고하자.
* [jquery-ajax 방법](http://rocabilly.tistory.com/27) by 도깨비방망이

서버쪽 리턴코드
```php
// Send the message
if ($mailer->send($message)) {
    echo '{"status":"ok", "message":"Thank you. '.$_POST["name"].'. Sent message successfully."}';
} else {
    echo '{"status":"error", "message":"I am sure, your configuration are not correct. :("}';
}
```

클라이언트쪽 호출코드
```javascript
$.post("HOMEPAGE_URL/send_feedback.php", { name: name, email: email, message: message },    
      function(r) {
	    if (r["status"] == "ok") {
	    	alert(r["message"]);
	    } else {
			console.log(r);
		}
	  }, "json");
return false;
```
뒤에 json은 리턴파일의 포맷인데, 출력이 제대로 되지 않으면, 해당 파라미터를 생략하고, raw 데이터를 찍어서 확인하면서 해결했다.

