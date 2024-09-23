
[Learn Jenkins! Complete Jenkins Course - Zero to Hero](https://www.youtube.com/watch?v=6YZvp2GwT0A)

[【Jenkins】01 Jenkins教程简介](https://www.youtube.com/watch?v=q9QXhpo1B2s&list=PLmOn9nNkQxJH7_AY3ZDTWgD5FIodz1Loh&index=6)

$> sudo apt update

$ sudo apt-get install openssh-server  設置 ssh 遠端伺服器服務

$ sudo apt-get install curl -y


>>> 安裝 GitLab

$ sudo curl -fsSl https://packages.gitlab.cn/repository/raw/scripts/setup.sh | /bin/bash

$ sudo EXTERNAL_URL="http://192.168.31.119:8081" apt install -y gitlab-jh

#sudo gitlab-ctl start # 啟動所有 gitlab 組件

#sudo gitlab-ctl stop # 

#sudo gitlab-ctl restart # 

#sudo gitlab-ctl status # 

#sudo gitlab-ctl reconfigure #  啟動服務

#sudo nano /etc/gitlab/gitlab.rb # 修改配置文件 修改完後要執行此命令 配置才會寫入

external_url "http://192.168.31.119"

#sudo gitlab-ctl tail # 查看日誌

& sudo cat /etc/gitlab/initial_root_password # gitlab 預設root 密碼

http://192.168.31.119 # 修改root 新密碼


windows
https://www.jenkins.io/zh/

ubuntu

$ cd /tmp

$ sudo apt-get update

$ sudo apt-get upgrade -y

$ sudo apt-get install openjdk-8-jdk -y

$ sudo wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -

$ sudo sh -c "echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list"

$ sudo apt-get update

$ sudo wget http://ftp.kr.debian.org/debian/pool/main/i/init-system-helpers/init-system-helpers_1.60_all.deb

$ sudo apt-get install ./init-system-helpers_1.60_all.deb

$ sudo apt-get install jenkins -y

$ sudo service jenkins status

$ sudo ufw status

$ sudo ufw allow 8080

$ sudo cat /var/lib/jenkins/secrets/initialAdminPassword

http://192.168.31.119:8080/

登入預設密碼


>>> Jenkins 配置

Plugin Manager

Maven Integration






