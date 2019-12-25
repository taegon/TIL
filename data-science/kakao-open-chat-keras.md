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

## 이상훈 (2019.03.21)

이미지 처리나 딥러닝 책을 보면 이미지를 네모로 잘 잘라놓고(crop) 이 사진 개인지 고양이인지 구분하는 예제들이 많이 있습니다.

그런데 실제 환경에서는 누가 명확하게 네모박스를 만들어주지 않습니다. 그냥 고객이 찍은 수 많은 사진들 혹은 영상 속에서 일부에서 개나 고양이를 먼저 찾아내고 여기에 이 부분이 개인지, 고양이인지를 구분해 내야합니다.

그렇게 하기 위해서는 object detection이라는 기술이 필요합니다. detection을 한다는 것은 생각보다 어려운데, 한 이미지 내에 여러 오브젝트가 있을 수 있고 그 사이즈도 다양하며 가려질수도 있습니다. 심지어 정면샷만 있는게 아니라 보는 각도가 다양하며 고양이도 그 종류가 다양합니다. 그중에 명확히 고양이 위치를 잡아내야하고 고양이도 어디까지를 고양이로 봐야할지 후보 영역들이 많아서 그 후보중에 어디를 진짜 최종 박스 봐야할지도 고민이 될 것 입니다.

제가 학생때는 수많은 피쳐엔지니어링이나 HOG와 같은 방법을 많이 사용했는데 최근에는 딥러닝으로 이것이 한방에(??) 가능해졌습니다. 그에 대한 대표적인 알고리즘을 설명하는 포스팅을 공유드립니다. 그리고 참고할만한 좋은 "Keras" 코드도 댓글로 남기겠습니다. 앞으로 공유드릴 상당수는 colab에서 쉽게 돌려볼 수 있어서 굳이 gpu가 없어도 간단한 수준을 테스트 해볼 수 있습니다. (특히 pretrained model이 오픈 된경우에는 더욱..)

* [Zero to Hero: Guide to Object Detection using Deep Learning: Faster R-CNN,YOLO,SSD](https://cv-tricks.com/object-detecti…/faster-r-cnn-yolo-ssd/)
* [https://github.com/broadinstitute/keras-rcnn](https://github.com/broadinstitute/keras-rcnn)
* [https://github.com/jinfagang/keras_frcnn](https://github.com/jinfagang/keras_frcnn)
* [https://github.com/qqwweee/keras-yolo3](https://github.com/qqwweee/keras-yolo3)
* [https://github.com/matterport/Mask_RCNN](https://github.com/matterport/Mask_RCNN)
* [https://github.com/pierluigiferrari/ssd_keras](https://github.com/pierluigiferrari/ssd_keras)

## 이상훈 (2019.03.21) - 3d 영상처리

* [ZEDfu - Real-time 3D Mapping using ZED stereo camera](https://www.youtube.com/watch?v=AFH2yN3rM78)
* [RayNet: Learning Volumetric 3D Reconstruction with Ray Potentials](https://avg.is.tuebingen.mpg.de/publications/paschalidou2018cvpr)

## 이상훈 (2019.03.21) - 개체 인식

몇몇분께서 제가 Object Detection 글을 올리고 나서 다른 알고리즘들이 뭐가 있는지와 이후에 디테일한 글에 대해서도 따로 질문을 주셨습니다. 우선 다른 알고리즘들에 대해서는 전체 계보를 보는게 좋을듯해서 참고 자료를 첨부드립니다.

* [첨부파일](https://www.dropbox.com/s/v3rq3895r05xick/deep_learning_state_of_the_art.pdf?dl=0&fbclid=IwAR2m6Zpf9ZNapgSCmcvKUDc_pDXtubelfB8lP8EbLtn7jJ-x8-4jYG7_GhE)
* [첨부파일 복사본](https://www.dropbox.com/home/taegon-ebook/sns?preview=deep_learning_state_of_the_art.pdf)

첨부 자료의 38페이지를 보시면 됩니다.(댓글로도 남겨놓겠습니다.)
첨부는 전에 태웅님이 공유해주신 영상의 발표자료인데 최근 딥러닝 트랜드를 보기에 좋습니다. 아래는 발표내용입니다. 영상을 보면 아주 자세하게는 다루지 못하지만 대강보고 관심이 생기는 영역을 해당 키워드로 찾아보시면 좋을듯 합니다. (단 발표자의 발음은 조금 특이합니다^^;) 영상 링크는 댓글에 달겠습니다.
저는 개인적으로 BERT(GPT-2도 나오긴 했지만 NLP 영역에서 꼭 알아야 함)와 AdaNet(Auto Hyperparameter tunning 분야를 원래 가장 좋아합니다)을 좋아합니다. 그리고 데이터가 중요해짐에 따라 레이블링이 굉장히 중요한데 Interactive Object Annotation with Polygons도 관심 가지시면 좋을듯 합니다. 이것도 댓글에 데모를 공유드리겠습니다.

Introduction
BERT and Natural Language Processing
Tesla Autopilot Hardware v2+: Neural Networks at Scale
AdaNet: AutoML with Ensembles
AutoAugment: Deep RL Data Augmentation
Training Deep Networks with Synthetic Data
Segmentation Annotation with Polygon-RNN++
DAWNBench: Training Fast and Cheap
BigGAN: State of the Art in Image Synthesis
Video-to-Video Synthesis
Semantic Segmentation
AlphaZero & OpenAI Five
Deep Learning Frameworks
2019 and beyond

* [Deep Learning State of the Art (2019) - MIT](https://www.youtube.com/watch?v=53YvP6gdD7U)
* [PolygonRNN++](http://www.cs.toronto.edu/~amlan/demo/)
  * 테스트 방법은 마우스를 클릭해서 대강의 영역을 잡으면 자동으로 해당영역을 segmentation합니다. 조금 틀린 영역은 사람이 마우스로 드래그해서 수정하면 되는데 하나 수정하면 그것을 기반으로 재계산하여 다시 segmentation합니다.
  * 약간은 틀리기도하고 속도가 느리기도한데(이건 사람이 몰려서 그렇고 대중에게 오픈안한 벤치속도는 훨씬 빠르다고함) 그래도 이러한 알고리즘들이 데이터 레이블링 스타트업에서 자주 사용되고 있고 앞으로도 더 많이 사용될듯 합니다.

## 곽대훈님 페이스북(2019.03.22)

오늘 stanford의 [cs230](http://cs230.stanford.edu/)강의 영상이 공개됐네요.
요즘 이외에도 좋은 강의 영상이 많이 나와서, 같이 공유드립니다 ㅎㅎ

* [Berkeley CS294-158 Deep Unsupervised Learning (2019)](https://www.youtube.com/channel/UCf4SX8kAZM_oGcZjMREsU9w/featured)
* [CMU Probabilistic Graphical Models (2019)](https://www.youtube.com/playlist?list=PLoZgVqqHOumTY2CAQHL45tQp6kmDnDcqn)
* [Deep Learning and Bayesian Methods summer school (2018)](https://www.youtube.com/playlist?list=PLe5rNUydzV9Q01vWCP9BV7NhJG3j7mz62)
* [MIT Non-convex optimization and deep learning workshop (2018)](http://mifods.mit.edu/deep.php)
* [CMU Convex optimization (2018)](https://www.youtube.com/playlist?list=PLpIxOj-HnDsMM7BCNGC3hPFU3DfCWfVIw)
* [Berkeley CS294-112 at UC Berkeley Deep Reinforcement Learning (2018)](https://www.youtube.com/playlist?list=PLkFD6_40KJIxJMR-j5A1mkxK26gh_qg37)
* [DeepMind Advanced Deep Learning & Reinforcement Learning (2018)](https://www.youtube.com/playlist?list=PLqYmG7hTraZDNJre23vqCGIVpfZ_K2RZs)
* [ipam New Deep learning Techniques workshop (2018)](https://www.youtube.com/playlist?list=PLHyI3Fbmv0SdM0zXj31HWjG9t9Q0v2xYN)
* [Stanford CS230 Deep Learning (2018)](https://www.youtube.com/playlist?list=PLoROMvodv4rOABXSygHTsbvUz4G_YQhOb)
* [Stanford CS224N NLP with Deep learning(2019)](https://www.youtube.com/playlist?list=PLoROMvodv4rOhcuXMZkNm7j3fVwBBY42z)
* [CMU Neural Network for NLP (2019)](https://www.youtube.com/playlist?list=PL8PYTP1V4I8Ajj7sY6sdtmjgkt7eo2VMs)
* [DL & RL Summer school (2018)](http://videolectures.net/DLRLsummerschool2018_toronto/)
* [MIT Introduction to Deep learning (2019)](http://introtodeeplearning.com/)
* [CMU Deep learning (2019)](https://www.youtube.com/channel/UC8hYZGEkI2dDO8scT8C5UQA/videos)
* [MIT STATISTICAL LEARNING THEORY AND APPLICATIONS (2018)](https://www.youtube.com/playlist?list=PLyGKBDfnk-iAtLO6oLW4swMiQGz4f2OPY)

## VAE 개념에 대해서 잘 설명된 문서 (2019.04.23)

* 왕승현님: [오토인코더의 모든 것](https://youtu.be/o_peo6U7IRM)
* danial님: [What is a variational autoencoder](https://jaan.io/what-is-variational-autoencoder-vae-tutorial/)
  * 그리고 외국분 글이 있는데 전 영어 싫어해서 원본으로는 안읽었는데 어떤 훌륭한 분이 번역도 하셔서 블로깅 했다고 합니다.
  * 번역본: [What is a variational autoencoder](http://nolsigan.com/blog/what-is-variational-autoencoder/)
* danial님: [유재준님 블로그](http://jaejunyoo.blogspot.com/2017/04/auto-encoding-variational-bayes-vae-1.html) 요기있습니다
* 이대곤님: [Variational Autoencoder를 여러가지 각도에서 이해하기](https://www.slideshare.net/haezoom/variational-autoencoder-understanding-variational-autoencoder-from-various-perspectives)

## 멀티 태스크 러닝 (2019.08.02)

* Chong님: [What are the differences between the joint learning and multitask learning?](https://www.quora.com/What-are-the-differences-between-the-joint-learning-and-multitask-learning)
  * joint learning은 두개 이상 작업을 같이하는 거 정도? 언어 처리할때 텍스트를 벡터로 만드는 과정과 (embedding 이나 word2vec), 그 결과물로 텍스트 분류같은 모델을 만드는 걸 한 트레이닝 싸이클에서 같이 하는 거고.
  * multi task learning은 이미지 분류하는 모델을 만든다고 할때, 한쪽 모델은 모양을 구분하는 걸 배우고 (가방, 차) 또 다른 모델은 색깔 구분하는 걸 배우는 거.
  * Joint Learning: Your task has multiple sub-tasks that you all train together
  * Multitask: learn to do multiple things at ones e.g. multiple outputs
* [Keras: Multiple outputs and multiple losses](https://www.pyimagesearch.com/2018/06/04/keras-multiple-outputs-and-multiple-losses/)

## 텐서플로우+케라스 학습 자료 (박찬성님, 2019.10.05)

François Chollet 가 직접 제작한 TF2.0+Keras의 Colab 튜토리얼이 하나 더 공개 되었습니다.

TensorFlow 2.0 + Keras Overview for Deep Learning Researchers

이는 예전에 공개한 "tf.keras for Researchers: Crash Course" 와는 다른 버전의 자료로, 크게 Part 1: TensorFlow basics 와 Part 2: The Keras API로 구성되어 있습니다.
개인적으론 이전 자료보다 더 알차게 구성되어 있는것 같아 마음에 드네요 :) 다른분들께도 유용한 정보이길 바랍니다!

* [최근 자료 링크](https://colab.research.google.com/drive/1UCJt8EYjlzCs1H1d1X0iDGYJsHKwu-NO)

* [이전자료 (Crash Course) 링크](https://colab.research.google.com/drive/17u-pRZJnKN0gO5XZmq8n5A2bKGrfKEUg)

## L1과 L2 Regularization

* l1-> 변수 각각에 걸리는 가중치 중 일부가 아예 0이 되어버리길 원할 때 (그래서 feature selection으로도 사용됨)
l2-> 변수 각각에 걸리는 가중치 전부가 엇비슷하게 되길 바랄때 (튀는 값이 없도록; shrinkage method)

## 맥에서 딥러닝 사용 (박찬성님, 2019. 10.31)

약간 뒷북성 내용이긴 하지만, Mac 사용 유저에게 도움이 되는 내용을 알게 되어 공유 드립니다.

mac 에서 딥러닝을 하는 방법은 크게, 1. **CPU** 이용, 2. **PlaidML + OpenCL** 이용, 3. **ROCm** (RadeonOpenCompute) 이용, 4. **eGPU enclosure + NVIDIA GPU** 이용 정도가 있습니다.

CPU는 속도가 느리니 고려 대상이 아닐 것이고, 3번과 4번의 경우 셋업이 너무 어려울 뿐만 아니라 macos 버전을 타서, mavericks 및 catalina 버전에서는 사실상 불가능한 옵션입니다.

2번에 대해서 좀 더 소개해 드리겠습니다. PlaidML 은 Intel 에서 리드하는 프레임워크로, NVIDIA/AMD 및 CPU 하드웨어가 각각에 맞는 OpenCL로 추상화 된 것을 다시한번 통합 추상화 하여 딥러닝을 가능하게 해 주는 프로젝트 입니다. [그림 1]

여기에 PlaidML-Keras 라는 프로젝트가 있어서, PlaidML를 백엔드로 동작하는 Keras의 사용이 2017년경 부터 가능해 왔습니다. 현재까지도 지속적으로 업데이트 되어 Keras 2.x 까지의 지원이 됩니다.

중요한 사실은 Apple/macos 진영에서는 수년 전 부터 Metal 이라는 프레임워크를 개발해 왔습니다. Metal 은 AMD GPU를 제어하기 위한 API를 제공하는 매우 저 수준의 프레임워크 입니다. 현재 애플의 모든 상품에 적용이 되어 왔고, OpenCL은 사실상 Deprecated 되었다고 보시면 됩니다. 

그간의 상황을 살펴보면, Metal이 적용된 여러가지 killing 애플리케이션의 성능이 OpenCL에 비해서 월등히 좋아진 사례를 많이 목격할 수 있습니다. 대부분 전환 하고 있고, 이는 iOS 애플리케이션 또한 마찬가지 입니다.

PlaidML-Keras 프로젝트에서는 2018년 5월경 부터 OpenCL과 더불이 Metal 의 지원을 런칭 했다는 사실을 알게 되었습니다. AMD Radeon GPU 를 활용하여, Metal의 고성능 프레임워크를 백엔드로,  Keras API를 사용한 딥러닝이 가능하다는 것이죠. [그림 2] (더불어, Mac 컴퓨터에 eGPU를 연결해서 하이엔드급 Radeon GPU의 연결도 가능합니다)

제가 보유한 iMac 2017 (Radeon Pro 580 8GB) 기준, 테스트를 해본 결과 , CIFAR10 데이터셋을 VGG16 모델로 256 배치사이즈 기준, 1 epoch 당 약 90초 정도 소요 됩니다. Colab에서 제공하는 K80 대비 절반 수준의 성능입니다. 하지만, 충분히 활용 가치가 있다고 판단됩니다.

사용 방법은 매우 간단합니다.

1. pip install -U plaidml-keras
2. plaidml-setup
    여기서 OpenCL 대신, metal 을 선택하시면 됩니다 [그림2]
3. Python 코드 작성
    import os
    os.environ["KERAS_BACKEND"] = "plaidml.keras.backend"
    위의 내용 입력 후, import keras 하여 평소 쓰던대로 사용

PlaidML은 현재 버전 0.6 이기 때문에, 여러가지 실험을 해 봐야 겠지만, 일단 비싼 mac 을 활용 해볼만한 좋은 수단이 될 것 같습니다. eGPU등 여러가지 환경의 벤치마크가 부족하기 때문에, 혹시 시도하시는 분이 계시다면, 결과를 공유해 주시면 좋을것 같습니다.

plaidml: [https://github.com/plaidml/plaidml](https://github.com/plaidml/plaidml)
plaidml-keras: [https://vertexai-plaidml.readthedocs-hosted.com/en/latest/index.html](https://vertexai-plaidml.readthedocs-hosted.com/en/latest/index.html)

## 임밸런스한 멀티레이블 데이터의 오버샘플링

혹시 멀티레이블 데이터가 임밸런스할때, 오버샘플링하기 위한 방법이나 관련된 방법이 제안된 논문이 있을까요?

이제현님
2019년 논문: [https://ecmlpkdd2019.org/downloads/paper/624.pdf](https://ecmlpkdd2019.org/downloads/paper/624.pdf)
2013년 논문: [https://link.springer.com/content/pdf/10.1007/978-3-642-41822-8_42.pdf](https://link.springer.com/content/pdf/10.1007/978-3-642-41822-8_42.pdf)
2015년 논문인데, 인용이 좀 많이 됐네요: [https://www.sciencedirect.com/science/article/abs/pii/S0950705115002737](https://www.sciencedirect.com/science/article/abs/pii/S0950705115002737)
