# Xlsxwriter 튜토리얼로 배우는 Python 엑셀프로그래밍

바울랩미디어의 이호준 님이 쓴 무료 서적. 리디북스를 통해 읽었다. 저자는 [제주 코딩 베이스캠프](http://www.jejucodingcamp.com)을 운영하고 있다.

파이썬으로 엑셀 다루기는 openpyxl를 이용하고 있어서, 자세한 내용은 스킵하고, 기억해둘 부분만 메모로 남겨둔다.

## 포맷 지정하기

```python
import xlsxwriter
workbook = xlsxwriter.Workbook('2_2.xlsx')
worksheet = workbook.add_worksheet('First_sheet')

bold = workbook.add_format({'bold': True})
worksheet.write(row, 0, "Average", bold)
```

자세한 포맷 리스트는 36페이지에 있다. 혹은 [공식 문서](https://xlsxwriter.readthedocs.io/format.html#format-methods-and-format-properties)를 참조하면 된다.

## 기능

차트를 추가할 수 있다. 이미지 삽입도 가능하다. 인터넷 상의 이미지를 삽입할 때는 `io.ByteIO(urllibs2.urlopen(url).read())`를 이용하여 삽입 가능하다.

## 메일첨부

네이버 SMTP를 이용하여 메일 첨부가 가능하다. 작성한 파일을 첨부하기 위해서는 다음과 같은 코드를 이용할 수 있다.

```python
import smtplib
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart
from email import encoders

server = smtplib.SMTP_SSL('smtp.naver.com', 465)
server.login(NAVER_ID, NAVER_PW)
My_email = "test@naver.com"
# student[1] = "student@school.edu.kr"

mail = MIMEMultipart()
# 헤더 정보 입력
mail['Subject'] = "제목"
mail['From'] = My_email
mail['To'] = student[1]
# 메시지 입력
# 파일첨부
excelfile = MIMEBase("application", "octet-stream")
excelfile.set_payload(open(filename, "rb").read())
encoders.encode_base64(excelfile)
excelfile.add_header(
    'Content-Disposition',
    'attachment;filename="{file}"'.format(file=filename)
)
mail.attach(excelfile)
# 서버 전송
server.sendmail(My_email, [student[1]], mail.as_string())
server.quit()
```
