# AWS 환경설정하기

인스턴스 만들고, IP 연결한다.

* [터미널에서 SSH를 사용하여 Linux 또는 Unix 인스턴스에 연결](https://lightsail.aws.amazon.com/ls/docs/ko_kr/articles/amazon-lightsail-ssh-using-terminal)

Git은 다음과 같이 설치한다.

```bash
#Create an EC2 instance with Amazon Linux 2 with internet access
#Connect to your instance using putty
 
#Perform a quick update on your instance:
sudo yum update -y
 
#Install git in your EC2 instance
sudo yum install git -y
 
#Check git version
git version
```

* [How To Install Git In AWS EC2 Instance](https://cloudaffaire.com/how-to-install-git-in-aws-ec2-instance/)

파이썬도 설치할 수 있지만, 아나콘다를 이용했다.

* [How To Install Python 3.8 on Amazon Linux 2](https://techviewleo.com/how-to-install-python-on-amazon-linux/)

아나콘다를 이용하는 방법은 다음과 같다.

* [AWS EC2: Install Anaconda on Linux Instance](https://medium.com/@GalarnykMichael/aws-ec2-part-3-installing-anaconda-on-ec2-linux-ubuntu-dbef0835818a)

아나콘다 최신버전은 다음 링크에서 찾을 수 있다.

* [https://repo.anaconda.com/archive/](https://repo.anaconda.com/archive/)

```bash
# In EC2 instance terminal, type
wget https://repo.continuum.io/archive/Anaconda2-4.1.1-Linux-x86_64.sh
# In EC2 instance terminal, type
bash what_Anaconda_you_downloaded_Linux_x86_64.sh
# In EC2 instance terminal, type
source .bashrc
```

* [Caching your GitHub credentials in Git](https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git)

* [Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

```bash
$ ssh-keygen -t ed25519 -C "your_email@example.com"
```

* [Adding a new SSH key to your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

이제 github에서 클론할 때, SSH 주소를 이용하면 된다.
