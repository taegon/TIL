# PHP를 이용해서 gmail 보내기
## tl;dr
* Swift Mailer라는 걸로 쉽게 구현가능
* gmail 설정에서 보안설정 하나를 풀어줘야 한다.
* Gmail API를 이용하는 건 쉽지 않다.

## 배경
홈페이지를 제작하는 과정에서 피드백을 남기는 기능을 구현할 필요가 있었다. 간단하게 서버에 저장하고 따로 관리페이지를 두어도 되지만, 새로운 관리페이지가 생긴다는 측면에서 기존의 작업환경에 녹여넣으려고 gmail로 직접 메시지를 쏴주도록 구현하고자 하였다. 최초 시도는 google sheet를 이용하여 저장하고, 구글 스크립트를 이용하여 메일로 모아서 보내주는 걸 생각했으나, 다소간의 번거로움으로 직접 쏴주는 걸로 변경하였다. 덕분에 sheet API, gmail API를 다 만지게 되었고, 인증은 성공하고, sheet에 값을 써 넣는 것까지는 가능하나, gmail를 보내는 것은 에러를 뿜어내고 있었다. 그래서 다시 구글링한 후 swift mailer라는 라이브러리를 이용하기 했다. 또 다른 이유로는 현재 작업중인 서버의 php 버젼이 5.3이나 구글 API는 5.4 이상을 요구하고 있어 서버를 이원화하여 구현하는 것 역시 부담스러웠던 점이 있다.

## Swift Mailer
### 라이브러리 설치하기
Stack overflow에서 찾은 답변
* [Send email using the GMail SMTP server from a PHP page](http://stackoverflow.com/questions/712392/send-email-using-the-gmail-smtp-server-from-a-php-page)

그리고 공식 사이트: [http://swiftmailer.org](http://swiftmailer.org/download)
설치는 composer를 이용해서 설치하는데, php용 패키지 배포 프로그램 정도로 이해하면 될 듯 하다. 
관리자 권한 없이 사용자 폴더에 설치가능하며, 공식사이트에서 제공하는 4줄의 코드만 실행하면 설치된다.
* [Composer 설치](https://getcomposer.org/download/)

설치후, composer로 alias 해주어야 동일하게 쓸 수 있으며, 그렇지 않은 경우에는 composer 대신 php composer.phar를 대치해서 사용해도 문제 없었다.

### 실제 코드
앞서 stack overflow의 답변 중에 있던 예제코드. 딱 원했던만큼이나 간단한 코드이다. 그리고 서버주소와 아이디, 비번을 이용해서 접속하므로 gmail 외에 다른 서비스에도 응용가능할 것으로 생각된다. 나는 안 해봤다.
```php
<?php
require_once __DIR__. '/vendor/swiftmailer/swiftmailer/lib/swift_required.php';

$transport = Swift_SmtpTransport::newInstance('ssl://smtp.gmail.com', 465)
  ->setUsername(' __GMAIL_ID__ ')
  ->setPassword(' __GMAIL_PW__ ');

$mailer = Swift_Mailer::newInstance($transport);

$message = Swift_Message::newInstance('MESSAGE TITLE')
  ->setFrom(array('haha@haha.com' => 'John Doe'))
  ->setCc(array('haha@haha.com' => 'Agent Smith'))
  ->setTo(array('hong@gil.dong'))
  ->setBody('This is a test mail.');

// Send the message
if ($mailer->send($message)) {
    echo 'Mail sent successfully.';
} else {
    echo 'I am sure, your configuration are not correct. :(';
}
?>
```

### 보안상 다소 덜 안전한 소프트웨어라는데...
모든 과정을 따라 만들고 나서도 535 에러코드를 뿜으며 구동하지 않는데, 에러메시지를 따라가 보면, 아래 링크를 알려준다. 아래 링크에 따라 설정을 바꾸어주면 정상작동한다. 이러한 설정에 대한 부담과 소스코드에 비밀번호를 평문으로 써넣어야 한다는 꺼림직함 때문에 새로운 계정을 하나 팠다.
* [Allowing less secure apps to access your account](https://support.google.com/accounts/answer/6010255?hl=en)
