
[Youtube Install ActiveMQ on Linux | Install Java/JDK on Ubuntu](https://youtu.be/_VlxW2Vv460?t=39)

安裝 JDK 環境

[Youtube How To Install Oracle Java (JDK) On Ubuntu 22.04 LTS, Debian Linux](https://www.youtube.com/watch?v=vVrIDJ--GOA)

[JDK Development Kit](https://www.oracle.com/tw/java/technologies/downloads/)

下載 x64 Debian Package

解壓縮 至根目錄 /tmp

$> sudo su 開啟管理員模式

$> 輸入管理員密碼

$> cd /home/管理員/Downloads

$> sudo dpkg -i jdk-21_linux-x64_bin.deb

$> sudo update-alternatives --install /usr/bin/java java /usr/lib/jvm/jdk-21.0.4-oracle-x64/bin/java 1

$> sudo update-alternatives --install /usr/bin/javac javac /usr/lib/jvm/jdk-21.0.4-oracle-x64/bin/javac 1


> 安裝 ActiveMQ
[ActiveMQ](https://activemq.apache.org/components/classic/download/classic-06-01-03)

apache-activemq-6.1.3-bin.tar.gz

$ cd /home/管理員/Downloads

$ sudo mv apache-activemq-6.1.3-bin.tar.gz /opt

$ cd /opt

$ tar -zxvf apache-activemq-6.1.3-bin.tar.gz

$ mv apache-activemq-6.1.3 activemq

$ cd activemq

$ bin/activemq start  啟動服務

$ netstat -nl|grep 61616  確認端口監聽中

$ bin/activemq status 確認啟動服務

$ bin/activemq console

http://127.0.0.1:8161/admin/

預設 admin/admin

1883 端口被占用

$ lsof -i:端口號


[ActiveMQ 文件](https://activemq.apache.org/components/classic/documentation/getting-started)

[文件2](https://activemq.apache.org/components/artemis/documentation/latest/using-cli.html)

[設定檔](https://blog.csdn.net/weixin_33293848/article/details/112615525?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0-112615525-blog-109707263.235^v43^control&spm=1001.2101.3001.4242.1&utm_relevant_index=3)



