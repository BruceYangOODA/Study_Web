
[Youtube Node.js Crash Course Tutorial](https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&ab_channel=TheNetNinja)  


## [Index]
基礎 method  
fs  
http  
request, response  
express  
ejs  
online-mongo-db  










### 基礎 method  

window  
__dirname  
__filename  
setTimeout(callback,幾毫秒後)  
setInterval(callback,幾毫秒)  
clearInterval(function_name)  

[Youtube require](https://youtu.be/OIBIXYLJjsI?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&t=833)  

XXX.js 內容  
module.exports = Obj  

const XXX = require("./XXX")  
XXX 等於 Obj  

ex.
module.exports = { AAA, BBB}  
const {AAA,BBB} = require("./XXX")  

### fs  
[Youtube fs](https://youtu.be/OIBIXYLJjsI?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&t=1269)  
const fs = require("fs");  

fs.readFile(url,(err,data)=>{})  
fs.writeFile(url, dataObj, callback)  
fs.unlink(url, (err)=>{})  刪除檔案  
fs.mkdir(url, (err)=>{})  
fs.rmdir(url, (err)=>{})  
fs.existsSync(url) : boolean  

const readStream = fs.createReadStream(url, { encoding:"utf8" });  
const writeStream = fs.createWriteStream(url);  
readStream.on("data",(chunk)=>{  
&nbsp; writeStream.write(chunk); });  

readStream.pipe(writeStream)  另一種便捷寫法  

### http  
[Youtube http](https://youtu.be/-HPZ1leCV8k?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&t=390)  
const http = require("http");  

const server = http.createServer((req,res)=>{});  
server.listen(port, ip-address, callback);  

### request, response  
[Youtube req,res](https://youtu.be/DQD00NAUPNk?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&t=292)  

req.url  
req.method  
req.path  
req.hostname  
res.statusCode = 200  

res.setHeader('Content-Type', 'text/html');  
res.write();  
res.end();  

res.setHeader("Location","/home")  網址轉向 ip-address/home  

res.sendFile(url, {root: __dirname});  

res.redirect('/home');  

### express  
[Youtube express](https://youtu.be/Lr9WUkeYSA8?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&t=139)  
const express = require('express');  
const app = express();  

app.listen(port);  
app.get(pathname,(req,res)=>{});  
app.use((req,res)=>{});  萬用匹配  

這個做法稱為 MiddleWare  先用萬用匹配 進行callback  
app.use((req,res,next)=>{......; next(); });  完成callback後, 往下面區塊跑  
app.get('/','index');  

app.use(express.static('assests'));  
app.use(express.urlencoded({extended:true}));  自動轉換查詢參數  
app.post('/blogs',(req,res)=>{
&nbsp; console.log(req.body); });  
[Youtube 參考影片](https://youtu.be/VVGgacjzc2Y?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&t=638)  

### ejs  
[Youtube ejs](https://youtu.be/yXEesONd_54?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&t=101)

$ npm install ejs --save  
app.set('view engine','ejs');  
app.get('/',(req,res) { res.render('index'); });  

HTML  匯入通用網頁模塊  
<%- include('./partials/XXX.ejs') %>  


### online-mongo-db  
[Youtube online-mongo-db](https://youtu.be/bxsemcrY4gQ?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&t=336)  



