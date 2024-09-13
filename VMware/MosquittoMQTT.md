
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

# default true, 是否允許clientid 為空,  false 啟用 session功能
allow_zero_length_clientid false

# default 65535, 最大值 65535秒 = 18小時12分15秒, 超過這個時間客戶端沒有傳送封包, 伺服器會自動斷開
# 這個值, 會由客戶端傳過來的 keepalive 複寫過去
# 設定為 0, 伺服器不會去檢查 keepalive, 當客戶端斷開沒有再傳送封包, 伺服器不會自動斷開
# V5
max_keepalive 65535

# default 0, 不限制客戶端的封包大小
# V5
max_packet_size 0

# default 0, 0 不限制。 當處理封包總量大於此值時,將後續的封包放置 queue區 
max_queued_bytes 0

# default 1000, 0 不限制。 每個客戶端 queue區的 message 暫存數量
max_queued_messages 1000

