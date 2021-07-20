
### [Youtube Node.js Crash Course Tutorial](https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&ab_channel=TheNetNinja)  
### [Youtube Node JS Tutorial for Beginners](https://www.youtube.com/watch?v=w-7RQ46RgxU&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=2&ab_channel=TheNetNinja)  
### [Youtube WebSockets Tutorial (Node & Socket.io Chat App)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9i4V-_ZVwLmOusj8YAUhj_9)  
### [Youtube Express.js & Node.js Course for Beginners - Full Tutorial](https://www.youtube.com/watch?v=G8uL0lFFoN0&ab_channel=freeCodeCamp.org)  

[http-video-stream](https://github.com/Abdisalan/blog-code-examples/tree/master/http-video-stream)  
## [index] 

基礎 method  
fs  
http  
request, response  
express  
ejs  
online-mongo-db  
EventEmitter  
WebSockets  
Sequelize  




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
[影片](https://youtu.be/U57kU311-nE?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&t=266)  
const fs = require("fs");  

fs.readFile(url,(err,data)=>{})  
var file = fs.readFileSync(url, 'utf-8');  
fs.writeFile(url, dataObj, callback)  
fs.writeFileSync(url, dataObj);  
fs.unlink(url, (err)=>{})  刪除檔案  
fs.mkdir(url, (err)=>{})  
fs.mkdirSync('name')  
fs.rmdir(url, (err)=>{})  
fs.existsSync(url) : boolean  

[影片](https://youtu.be/E3tTzx0Qoj0?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&t=233)  
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
[影片](https://youtu.be/oZGmHNZv7Sc?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&t=543)  

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
[影片 Partials](https://youtu.be/CdvSVkF9m_Y?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&t=143)  

$ npm install ejs --save  
app.set('view engine','ejs');  
app.get('/',(req,res) { res.render('index'); });  

HTML  匯入通用網頁模塊  
<%- include('./partials/XXX.ejs') %>  


### online-mongo-db  
[Youtube online-mongo-db](https://youtu.be/bxsemcrY4gQ?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&t=336)  


### EventEmitter  
[影片](https://youtu.be/NtrnaTKqFPQ?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&t=509)  

var util = require('util');  
var Person = function(name) { this.name=name; }  
utils.inherits(Person, events.EventEmitter);  繼承  
var a = new Person('a');  
var b = new Person('b');  
var c = new Person('c');  
var people = [a, b, c];  

people.forEach(function(person){  
person.on('speak', function(msg){ console.log(person.name + msg); });  
});  

a.emit('speak', 'say hello');  
輸出  a say hello  


### WebSockets  
[影片](https://youtu.be/UwS3wJoi7fY?list=PL4cUxeGkcC9i4V-_ZVwLmOusj8YAUhj_9&t=138)   

$ npm install --save socket.io socket.io-client  

#### SERVER-SIDE  
const express = require("express");  
const socket = require("socket.io");   
const app = express();  
const server = app.listen(SERVER_PORT, function(){ console.log("Serve On ",PORT); });  

var io = socket(server);  

io.on("connection", function(socket){  
&nbsp; console.log(socket.id);  
&nbsp; socket.on("some_key_word", fucntion( some_data ){ console.log(some_data);  });  
&nbsp; socket.emit("your_id", socket.id);  
&nbsp; });  

#### CLIENT_SIDE  

const io = require("socket.io-client");  
const socket = io.connect("http://localhost" + SERVER_PORT);  
const socket_id;  

socket.emit("some_key_word", some_data );  
soket.on("your_id", (id) => socket_id = id );  

#### broadcast event  
[影片](https://youtu.be/FvArk8-qgCk?list=PL4cUxeGkcC9i4V-_ZVwLmOusj8YAUhj_9&t=56)  

server_side

socket.join(group_name);
socket.to(group_name).brocast.emit("bro_event", () => {} );  


### sequelize  

[影片](https://youtu.be/G8uL0lFFoN0?t=1825)  
[官方 API](https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html)  

$ npm install swquelize  pg sequelize-cli --save

$ echo "" > .sequelizerc  











