
### [Beautiful Soup 4.4.0 文档](https://beautifulsoup.readthedocs.io/zh_CN/v4.4.0/)  

[Youtube Algorithmic Trading Using Python - Full Course](https://www.youtube.com/watch?v=xfzGZB4HhEE&ab_channel=freeCodeCamp.org)  
[Youtube Beautiful Soup Tutorial - Web Scraping in Python](https://www.youtube.com/watch?v=87Gx3U0BDlo&ab_channel=freeCodeCamp.org)  
[Youtube 20 - web scraping with python using beautiful soup & requests (Python tutorial for beginners 2019)](https://www.youtube.com/watch?v=E5cSNSeBhjw&ab_channel=CleverProgrammer)  
[Youtube Web Scraping with Python - Beautiful Soup Crash Course](https://www.youtube.com/watch?v=XVv6mJpFOb0&ab_channel=freeCodeCamp.org)  
[Youtube Python Project - Ameritrade API Stock Screener](https://www.youtube.com/watch?v=HXGtLIoiv3Q&ab_channel=freeCodeCamp.org)  

[Anaconda Installers](https://www.anaconda.com/products/individual#Downloads)  
開啟 Anaconda Prompt 命令列  

$ conda env list 可以查看目前環境列表  
$ conda create -n webscrap python=3.7 建立名為 webscrap 的python package環境  
$ activate webscrap 激活 剛才建立的 package環境  
$ conda install lxml requests bs4 安裝 網頁應用 package  
$ conda install numpy pandas xlsxwriter openpyxl  安裝 數據應用 package  
$ conda install jupyter  安裝 jupyer package  
$ jupyter notebook  開啟 編碼處理器網頁  
$ python -m notebook  開啟 編碼處理器網頁 另一種命令列寫法   

$ pip install fake-useragent  

在 編碼處理器網頁 點選 new 選擇 python3  
在 新開的網頁,把 Untitled 重新命名為 webscrap  
在 下面輸入格輸入  

[影片](https://www.youtube.com/watch?v=87Gx3U0BDlo&ab_channel=freeCodeCamp.org)  
import requests   
from bs4 import BeautifulSoup  
result = requests.get('https://www.google.com')  
print('result',result.content)  

src = result.content  
soup = BeautifulSoup(src, 'html.parser')  
links = soup.find_all('a')  
for link in links:  
&nbsp; &nbsp; print(link)  
&nbsp; &nbsp; print(link.attrs['href'])
&nbsp; &nbsp; print(link.text)
&nbsp; &nbsp; print(link.string)

print(soup.prettify())  根據Tag附加間隔便利閱讀  

items = soup.find_all('div', class_='gb1')  
item = items[0].find(class_='XXX')  
print(item.get_text())   

[影片](https://youtu.be/E5cSNSeBhjw?t=1530)  

period_names = [item.find(class_='period-name').get_text() for item in items]  
short_descriptions = [item.find(class_='short-desc').get_text() for item in items]  
temperatures = [item.find(class_='temp').get_text() for item in items]  

weather_stuff = pd.DataFrame({  
&nbsp; &nbsp; 'period': period_name,  
&nbsp; &nbsp; 'short_descriptions': short_descriptions,  
&nbsp; &nbsp; 'temperatures': temperatures,  
})  

print(weather_stuff)  
weather_stuff.to_csv()  


### 尚待  

[影片](https://youtu.be/xfzGZB4HhEE?t=1624)  
[檔案 sp_500_stocks.csv](https://drive.google.com/file/d/1ZJSpbY69DVckVZlO9cC6KkgfSufybcHN/view?usp=sharing)

import numpy as np  
import pandas as pd  
import requests  
import xlsxwriter  
import math  
from secrets import IEX_CLOUD_API_TOKEN  

stocks = pd.read_csv('sp_500_stocks.csv')  
symbol='AAPL'  
api_url = f'https://sandbox.iexapis.com/stable/stock/{symbol}/quote?token={IEX_CLOUD_API_TOKEN}'  
data = requests.get(api_url).json()  

price = data['latestPrice']  
market_cap = data['marketCap']  

my_columns = ['Ticker', 'Price','Market Capitalization', 'Number Of Shares to Buy']  
final_dataframe = pd.DataFrame(columns = my_columns)  
final_dataframe.append(pd.Series([symbol,price,market_cap,'N/A'], index=my_columns),  ignore_index=True)   







