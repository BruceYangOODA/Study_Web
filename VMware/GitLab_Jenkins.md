
[【Jenkins】01 Jenkins教程简介](https://www.youtube.com/watch?v=q9QXhpo1B2s&list=PLmOn9nNkQxJH7_AY3ZDTWgD5FIodz1Loh&index=6)

$> sudo apt update

$ sudo apt-get install openssh-server  設置 ssh 遠端伺服器服務

$ sudo apt-get install curl -y


>>> 安裝 GitLab

$ sudo curl -fsSl https://packages.gitlab.cn/repository/raw/scripts/setup.sh | /bin/bash

$ sudo EXTERNAL_URL="http://192.168.31.119" apt install -y gitlab-jh

#sudo gitlab-ctl start # 啟動所有 gitlab 組件
#sudo gitlab-ctl stop # 
#sudo gitlab-ctl restart # 
#sudo gitlab-ctl status # 
#sudo gitlab-ctl reconfigure #  啟動服務
#sudo vi /etc/gitlab/gitlab.rb # 修改配置文件
#sudo gitlab-ctl tail # 查看日誌


















