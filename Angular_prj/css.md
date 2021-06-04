
[Angular 深入淺出三十天] Day 19 - 路由（二）(https://ithelp.ithome.com.tw/articles/10207709)

[Loading IO 線上CCS樣式](https://loading.io/)  

##[index]  
物件置中  
改變滑鼠指標樣式  


### 物件置中  
{ display:flex; align-items:center;}  

### 改變滑鼠指標樣式  
{ cursor: pointer; }  

### 轉圈圈 spinner  
{  
border: 16px solid silver;  
border-top: 16px solid #337AB7;  
border-radius: 50%;  
width: 80px;  
height: 80px;  
animation: spin 700ms liner infinite;  
top: 50%;  
left: 50%;  
position: absolute;  
}  
@keyframes spin {  
0% { transform: rotate(0deg)}    
100% { transform: rotate(-360deg)}  
}  
