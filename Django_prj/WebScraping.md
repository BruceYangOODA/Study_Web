


[Anaconda Installers](https://www.anaconda.com/products/individual#Downloads)  
開啟 Anaconda Prompt 命令列  

$ conda env list 可以查看目前環境列表  
$ conda create -n webscrap python=3.7 建立名為 webscrap 的python package環境  
$ activate webscrap 激活 剛才建立的 package環境  
$ conda install requests bs4 安裝 網頁應用 package  
$ conda install jupyter  安裝 jupyer package  
$ jupyter notebook  開啟 網頁編碼IDE  

在 網頁編碼IDE點選 new 選擇 python3  
在 新開的網頁,把 Untitled 重新命名為 webscrap  
在 下面輸入格輸入  
import requests   
from bs4 import BeautifulSoup  
result = requests.get('https://www.google.com')  
print('result',result.status_code)  






























