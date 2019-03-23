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

## 이상훈 (2019.03.21)

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
