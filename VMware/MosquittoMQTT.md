
[Youtube How to setup mqtt mosquitto server and client in Ubuntu linux](https://www.youtube.com/watch?v=tN2pzbKxCd0)

更新 apt 並安裝 mosquitto MQTT

$> sudo apt update

$> sudo apt install mosquitto

$> sudo apt install mosquitto-clients

$> sudo systemctl status mosquitto  可以確認伺服器資訊

$> sudo apt install net-tools 檢查網路狀態

$> sudo netstat -nltp 檢查網路狀態

$> sudo ufw allow 1883  開啟預設端口

$> sudo ufw enable // 開啟防火牆

$> pgrep mosquitto 確認 MQTT服務 是否存在

$> sudo service mosquitto stop  關閉MQTT服務

$> sudo service mosquitto start 啟動MQTT服務


// 確認server運作

$> sudo mosquitto_sub -t "/test"

另一執行序

$> sudo mosquitto_pub -t "/test" -m 'Hellow World'


修改配置

$ sudo vi /etc/mosquitto/mosquitto.conf

$ sudo cd /usr/sbin

$ sudo mosquitto -c /etc/mosquitto/mosquitto.conf 將新的配置寫入系統設定

https://github.com/eclipse/mosquitto/blob/master/mosquitto.conf


