

[Youtube NGINX Tutorial for Beginners](https://www.youtube.com/watch?v=9t9Mp0BGnyI&t=498s)

[Youtube How to Install and Configure NGINX Web Server in Ubuntu 22.04 LTS](https://www.youtube.com/watch?v=7YqlP7HYU1g)


$ sudo apt install nginx

http://localhost:80 

>>> 建立新網站

$ cd /var/www
$ sudo mkdir techweb.com
$ cd techweb.com
$ sudo nano index.html  貼上網頁首頁程式碼

>>> nginx 網站設定

$ cd /etc/nginx/sites-enabled
$ cat default 複製內容
$ sudo nano techweb 貼上內容

server {
	listen 81;
	listen [::]:81;

	server_name techweb.com;

	root /var/www/techweb.com;
	index index.html;

	location / {
		try_files $uri $uri/ =404;
	}
}

$ sudo ufw allow 80/tcp
$ sudo ufw allow 443/tcp
$ sudo ufw allow 81/tcp
$ sudo ufw status verbose 確認防火牆開放規則
$ sudo service nginx restart
$ sudo service nginx status

http://localhost:81 





