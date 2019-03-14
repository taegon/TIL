# 케라스 오픈 챗에서 유용한 자료

## 이명규씨 (2019.02.22)

역시 SOTA논문이 괜히 SOTA가 아닌가봐요 ㅠㅠ

이것저것 테스트해보면서 느낀 바는 논문이나 Keras가 제공하는 디폴트값은 괜히 디폴트가 아니다라는것...

* [Making Classification Competitive for Deep Metric Learning](https://arxiv.org/abs/1811.12649)
* [Batch Feature Erasing for Person Re-identification and Beyond](https://arxiv.org/abs/1811.07130)
* [Attention-based Ensemble for Deep Metric Learning](https://arxiv.org/abs/1804.00382)
* [Total Recall: Automatic Query Expansion with a Generative Feature Model for Object Retrieval](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/iccv2007.pdf)
* [Total Recall II: Query Expansion Revisited](http://cmp.felk.cvut.cz/~chum/papers/chum_cvpr11.pdf)

## 이진원 (2019.02.25)

* [Somethings about TPU](https://drive.google.com/file/d/1yEA4l-IIdTykPy3Flp7F6ZySUEU39Amv/view)

## Ryan Shin (2019.02.28)

한국인이 쓴 첫 번째 딥러닝 자연어처리 책입니다. 출간 전부터 관심을 많이 가졌었는데, 기대한 만큼 내용이 상당히 좋았습니다.

1~3장은 기본 사항과 개념에 대해 설명합니다. 4장은 텍스트 분류를 다루는데, 다양한 머신러닝과 딥러닝 알고리즘을 적용합니다. 5장은 두 문장의 유사도를 측정하는 방법입니다. 6장은 Seq2seq와 트랜스포머로 챗봇을 구현합니다.

제가 머신러닝/딥러닝에 관련된 서적을 볼 때 가장 먼저 확인하는 것은 입력 데이터가 무엇인지 명확하게 보여주는가 입니다. 어떤 책들은 이런 데이터가 있다는 말만 하고 바로 코드로 넘어갑니다. 이럴 경우 전체적인 개념이 머리속에 들어오지 않기 때문에 이해하기가 상당히 어렵습니다. 여기서는 데이터 샘플을 보여주는 것에 그치지 않고 시각화한 그림까지 나와 있어 많은 도움이 되었습니다.

전반적으로 개념 설명도 자세하고 코드 하나하나가 어떻게 동작하는지도 쉽게 알려주고 있습니다. 트랜스포머에 대해서 이 정도의 많은 분량으로 설명한 책은 아마 국내에서 처음일 것 같습니다.

다만 github에 올려져 있는 소스코드에 주석이 좀 빈약한 편입니다. 게다가 책에는 그 주석마저 모두 삭제되어 있어 코드를 분석하는데 조금 어려움이 있습니다.

저도 자연어처리에 관한 책을 쓰고 싶었는데 늦어버렸네요^^; 긴 분량의 내용을 한 권으로 묶어서 낸다는게 얼마나 어려운 일인지 알기에, 저자들이 얼마나 고생을 했는지 이해가 됩니다. 앞으로 자연어처리가 발전하는데 이 책이 큰 역할을 하리라 기대합니다.

[텐서플로와 머신러닝으로 시작하는 자연어 처리](http://www.yes24.com/Product/Goods/69334316)

## 김태영 (2019.03.03)

* [GAN 모형에서 trainable 매개변수](https://tykimos.github.io/2017/12/12/One_Slide_GAN/): "여기서 하나 알 수 있는 것은 discriminator이라는 네트워크는 discriminator 모델과 gan 모델에 둘 다 사용되고 가중치도 공유되나 discriminator 모델에서는 가중치 갱신이 일어나고, gan 모델에서는 가중치 갱신이 일어나지 않음"
  * 초기 GAN에서 판별자의 가중치가 훈련하는 동안 trainable = False로 설정해요. 판별자의 가중치가 훈련하는 동안 업데이트되면 판별자는 항상 "진짜"를 예측하도록 훈련되기 때문에.. by 박성욱

## 이상훈 (2019.03.14)

* [Time Series Prediction Using LSTM Deep Neural Networks](https://www.altumintelligence.com/articles/a/Time-Series-Prediction-Using-LSTM-Deep-Neural-Networks?fbclid=IwAR3B1wxAJNMMewrVqMI8zkg31D2h9NB2_IurySIoFkbfe89R2czC2QOW2YI)
  * Github: [LSTM-Neural-Network-for-Time-Series-Prediction](https://github.com/jaungiers/LSTM-Neural-Network-for-Time-Series-Prediction) by jaungiers@GitHub
  * Youtube: [LSTM Neural Networks for Time Series Prediction - IoT Data Science Conference - Jakob Aungiers](https://www.youtube.com/watch?v=2np77NOdnwk&fbclid=IwAR1T0ychb1LPN2BjvY3X0DX5NtAdBCTDjaZtC6aTFukMxSjWM2kENpDu0lc)
