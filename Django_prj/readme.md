# Django_prj

[Django DOCS](https://docs.djangoproject.com/en/3.2/)  
[Youtube Python Django Tutorial 2020 - Full Course for Beginners](https://www.youtube.com/watch?v=JT80XhYJdBw)  
[django tutorial code web1](https://github.com/CleverProgrammer/codedaddies_list)  
[django tutorial code web2](https://replit.com/@NazariyDumansk1/To-Do-App)  

語系設定
setting.py
LANGUAGE_CODE = 'zh-hant'
TIME_ZONE = 'Asia/Taipei'

cmd 
python manage.py runserver  
python manage.py startapp polls  
python manage.py makemigrations polls 建立Models裡面的資料庫  
python manage.py sqlmigrate polls 0001  
python manage.py migrate  
python manage.py shell  開啟資料庫管理CMD  
python manage.py createsuperuser  



01. 安裝Django套件  
$ conda create --name django  
$ activate django  
$ cd prj資料夾  
$ conda install django  #安裝django預設模組  
$ django-admin startproject testsite  #建立網站資料夾  
$ cd 網站資料夾  
$ python manage.py migrate  #創建數據庫  
$ python manage.py runserver  
  127.0.0.1:8000/  ＃預設網址  
  修改語系 testsite/testsite/settings.py  
  LANGUAGE_CODE = 'zh-hant'
  TIME_ZONE = 'Asia/Taipei'
02.  建立網頁code資料夾  
$ python manage.py startapp polls  
  修改polls/view.py, 新增polls/urls.py  寫入url路徑  
  修改testsite/urls.py,  寫入url路徑  
  path()有四個參數, 第一參數 route, 第二參數 view, 第四參數 name(以name直接指定網址)  
03.  建立網頁用資料庫  
  修改polls/models.py  建立資料庫欄位  
  修改testsite/settings.py INSTALLED_APPS 新增 'polls.apps.PollsConfig',  
$ python manage.py test  自動檢測資料庫欄位設定  
$ python manage.py makemigrations polls  創建資料庫  
  django會自動建立 migrations資料夾, 並登記資料庫變更紀錄  
$ python manage.py migrate  承認變更交易  
$ python manage.py shell  進入資料庫 cmd  
cmd  
% from pools.models import User, Message  
  新增資料庫資料  
  modelClass.objects.filter(條件)  查詢操作,取得ClassSet  
  modelClass.objects.get(條件)  查詢操作，只取第一個  
  pk=1 ; primaryKey = 1  
% usr = User.objects.get(pk=1)  
% msg = Message(msg='Hellow!', sender=usr)  
% msg = usr.message_set.create(msg='what?')  
  因為是 ForeinKey,可以這樣寫  
04. 建立網站管理帳號  
$ python manage.py createsuperuser  
  127.0.0.1:8000/admin  
  在polls/admin.py匯入資料庫資料  
  from .models import User, Message  
  admin.site.register(User)  
  admin.site.register(Message)  
05. 建立網頁首頁  
  在polls/urls.py 用path()註冊網頁網址與對應的view  
  建立網頁畫面 polls/templates/polls/index.html  
  polls/views.py return render(request, 網址, 資料字典)  
  表單驗證添加 {% csrf_token %}  
  from django.views import generic  網頁畫面界接器  
06. CSS 和 JS  
  在html檔加 {% load static %} 導入CSS設定  
  <link rel="stilesheet" type="text/css" href="{% static 'polls/style.css' %}"/>  
