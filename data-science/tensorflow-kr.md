# 텐서플로우 코리아에서 스크랩

## 이상훈님 공유 (2019.03.27)

Naver D2채널에서 관심있는 내용이 올라와서 공유드립니다. 금융과 딥러닝 : [https://www.slideshare.net/NaverEngineering/investment-and-deep-learning](https://www.slideshare.net/NaverEngineering/investment-and-deep-learning)
어제 퇴근 후 운동하면서 모바일로 쭉 보고 대략 생각나는 것들을 글로 쭉 정리해놨는데.. (원래 D2에서 이렇게 자세히 정리 안하시다) 이 동영상은 요약본이 유독 잘 정리되어있었습니다;; 허무 ㅜ
자세한 내용은 유튜브 영상을 보시거나 영상 설명을 보시면 있고 그외애 영상과 같이 보면 좋은 추가 내용 위주로 말씀드리겠습니다.

* 발표자 : 크래프트테크놀로지의 문효준 AI 리서치 팀장
* 금융데이터로 딥러닝을 할 경우 왜 학습이 안 되는가?
: 문제점 1 : Feature 종류 대비 짧은 Sequence 길이
: 문제점 2 : Feature 자체의 노이즈
: 문제점 3 : 문제점 1, 2로 인한 오버피팅 문제

크래프트테크놀로지 이름은 많이 들어봤는데 실제 기술 세미나를 들어보는 것은 처음이어서 인상적이었습니다. 그리고 국내 로보어드바이저 엔진 점유율이 90프로 이상이라는 점이 매우 놀라웠습니다. (정확한 산출 방법은 나오지 않아서 확인이 필요합니다) 주식 대회나 관련 ETF 이야기도 있지만 딥러닝이랑은 어울리지는 않아서 혹시 페메나 오프라인으로 말씀드리겠습니다.

먼저 문제점 1은 'stacked CNN AutoEncoder'로 어느정도 해결했다고 언급하고 있습니다. 통계를 아시거나 주식해보신분들은 매우 익숙한 (20일) 이동평균이나, 딥러닝으로 주식 예측해보기로 항상 나오는 RNN(LSTM) 예제로 하다보면 실 데이터에서는 노이즈에 민감해서 들쭉 날쭉하거나 후행 현상이 나타납니다. 그래서 stacked CNN AutoEncoder을 사용해서 데이터 전처리 한 후 기존 네트워크랑 연결하여 denoising한 결과를 예측모델로 넘길 수 있었다고 합니다. 이러한 방법은 크래프트테크놀로지에서 처음 발명한 기법은 아니고 17년에 중국에서 나온 논문중에 wavelet transforms으로 decomposed 시키고 stacked autoencoder로 하이레벨 피처를 생성한 후 lstm으로 예측하는 것을 제안했었습니다. 해당 논문에는 S&P, 항생지수, 니케이 등으로 벤치한 자료도 첨부되어있습니다. 코드가 오픈되지는 않아서 재현성이 있는지는 확실히 체크해보지는 못했었지만 나중에 다시 확인해봐야겠네요.

문제점 2는 딥러닝에 대한 언급이 거의 없지만 매우 중요한 부분입니다. [https://www.slideshare.net/NaverEngineering/investment-and-deep-learning](https://www.slideshare.net/NaverEngineering/investment-and-deep-learning)에 26페이지에서 언급된 Factor Rotation을 잘 봐두면 좋습니다. 막상 해보면 똑같이 어렵긴하지만 잘만 된다면 개인 투자자가 성공할 수 있는 몇 안되는 방법입니다. smart beta라는 이름의 책이나 자료를 보시면 좋습니다.

문제점 3의 오버피팅을 최소화하기 위한 방법은 [https://www.qraftec.com/blog/2019/3/6/asynchronous-multi-network-learning](https://www.qraftec.com/blog/2019/3/6/asynchronous-multi-network-learning) 에 정리가 잘되어있습니다. 이 부분도 재현성을 확인해봐야하고 사람마다 기법이 달라질 수는 있을듯 합니다. 유사한 사례들은 종종있는데 위처럼 아예 학습할때부터 앙상블이나 강화학습 등으로 최적을 찾아내기도 하고, 시계열 요소를 자르거나 자산군을 몇 개씩 분리해서 처리하기도 합니다. 물론 이 경우에도 수십년 전에는 없었던 하이일드와 같은 자산군이 없어서 데이터 부족 문제와 오버피팅 문제를 같이 겪을 수 있습니다.
마지막으로 uncertainty quantification 부분은 deep learnign regression해서 FC를 거치기 전에 Gaussian process regression 학습을 하면 된다고 말씀해주셨습니다. 그런데 발표자분도 관련 논문이 없다고 하시는데 혹시 아시는분은 댓글 부탁드립니다.(Classification 문제는 지도학습 시키고 얻어진 마지막 노드들이 representation이 잘 되었기 때문에 uncertainty quantification을 할 수 있다는 nips 논문이 살짝 언급됩니다. )

짧게 정리하려고 했는데 너무 길어졌네요; 지금이 새벽 4시로 가고 있어서 비몽사몽하며 한방에 쭉 쓴거라 혹시나 잘못된 내용이 있을 수 있습니다. 과감한 의견 부탁드립니다.(너무 과감한것은 페메로;;;)

## 김홍배 님 (2019.03.27)

Gaussian Processing & Bayesian optimization의 이론과 예제

Robot의 Gait optimization, Gesture Recognition, Optimal Control, Hyper parameter optimization, 신약 신소재 개발을 위한 optimal data sampling strategy등과 같은 ML분야에서 약방의 감초 같은 존재인 Gaussian Processing 이지만 이해가 쉽지 않은 GP의 기본적인 이론 및 matlab code 소개

이론 설명이 어려우시면 code 설명과 함께 보세요. 

Gaussian Processing 기본적인 이론 및 matlab code 소개

* [https://www.slideshare.net/ssuser06e0c5/gaussian-processing](https://www.slideshare.net/ssuser06e0c5/gaussian-processing)

Gaussian Processing을 이용한 Bayesian optimization의 이론과 예제

Bayesian Optimization and How to Scale It Up

* [https://ziw.mit.edu/pub/bo_talk_usc.pdf](https://ziw.mit.edu/pub/bo_talk_usc.pdf)

"Automatic Gain Tuning based on Gaussian Process Global Optimization"

* [https://aifrenz.github.io/present_file/3_Bayesian%20optimization_%20LQR%20Tuning%20with%20GP.pdf](https://aifrenz.github.io/present_file/3_Bayesian%20optimization_%20LQR%20Tuning%20with%20GP.pdf)