
### [index]  
TypeScript  
MongoDb  
Socket.io-client    
simple-peer  
Angular WebSockets Tutorial   
needle  
node-json-db  
discord.js  
couchdb  
mongoDB online  
gridfs-stream  
koa  
nodemailer  
redis  
multer  
puppeteer  
msnodesqlv8    
express-fileupload  

[Youtube MongoDB Tutorial - CRUD app from scratch using Node.js](https://www.youtube.com/watch?v=CyTWPr_WwdI&ab_channel=freeCodeCamp.org)  


### TypeScript  

[Youtube Learn TypeScript - Full Course for Beginners](https://www.youtube.com/watch?v=gp5H0Vw39yw&ab_channel=freeCodeCamp.org)  

[tsconfig.json API](https://www.tslang.cn/docs/handbook/tsconfig-json.html)  

[影片](https://youtu.be/gp5H0Vw39yw?t=3265)  
(Object as any).property  解決大部分 class property error  

[影片](https://youtu.be/gp5H0Vw39yw?t=4430)  
<T extends object> (a: T) 立馬將參數變成一種class  

   



### MongoDb  

[How to Connect Angular and MongoDB to Build a Secure App](https://developer.okta.com/blog/2019/09/11/angular-mongodb)  

[CORS 安全檢查 對策](https://blog.miniasp.com/post/2017/02/05/Setup-proxy-to-backend-in-Angular-CLI)  
1. 在 root目錄新增檔案 proxy.config.json  
內容:  
{
    "/opendata": {
      "target": "http://localhost:3333 ",
      "secure": false,
      "changeOrigin": true
    }
  }
  
http://localhost:4200/opendata/aaa 就會自動轉發到  http://localhost:3333/opendata/aaa  

2. 修改 package.json  
 "scripts":{  
   "start": "ng serve --proxy-config proxy.config.json",  
 }
 
 3. 修改組件  
  import { HttpClient } from '@angular/common/http';  
  constructor(private http:HttpClient) {}  
  this.data = this.http.get("/opendata/aaa");  



### Socket.io-client  
[Youtube Realtime Chat With Users & Rooms - Socket.io, Node & Express](https://www.youtube.com/watch?v=jD7FnbI76Hg&list=PLillGF-RfqbZ2ybcoD2OaabW2P7Ws8CWu&index=29)    
[Youtube Building a chat application with Angular, Node js and Socket.IO](https://www.youtube.com/watch?v=h39ZhR7PUts&t=1826s&ab_channel=TheSwagCoder)  
[Youtube Angular Socket.IO Tutorial](https://www.youtube.com/watch?v=n7OKfVwClE4&ab_channel=TutorialEdge)  
[Youtube Socket.io - Angular :: How to connect to a Socket.io Server with Angular](https://youtu.be/66T2A2dvplY?t=123)  
   

npm install socket.io-client  
npm install @types/socket.io-client  

import { io, Socket } from 'socket.io-client';  
private socket: Socket;  
  private url = 'http://localhost:3000'; // your server local path  

  constructor() {   
    this.socket = io(this.url, {transports: ['websocket', 'polling', 'flashsocket']});  
  }  
  
  

connect(): Rx.Subject<MessageEvent> {  
&nbsp; this.socket. = io(environment.ws_url);    
&nbsp; let observable = new Observable(observer => {    
&nbsp; this.socket.on("message", (data) => {   
&nbsp; &nbsp; console.log("XXX");    
&nbsp; &nbsp; observer.next(data); });  
&nbsp; &nbsp; return () => { this.socket.disconnect();  }  
&nbsp; });  
&nbsp; &nbsp; let obserber = { next: (data: Object) => {  
&nbsp; &nbsp; &nbsp; this.socket.emit("mesage", JSON.stringfy(data));  },};  
&nbsp; &nbsp; return Rx.subject.create(observer, observable);  
&nbsp; }

### simple-peer  
$ npm install simple-peer @types/simple-peer --save  

@angular.json  
"scripts": ["./node_modules/simple-peer/simplepeer.min.js"],  

//import * as SimplePeer from 'simple-peer';  
import { Instance, SignalData } from 'simple-peer';  
peer: Instance;  

### Angular WebSockets Tutorial  
[Youtube Angular WebSockets Tutorial](https://youtu.be/8CNVYWiR5fg?list=PLzUGFf4GhXBLlWgVXafxrXRQWhGQr2lKQ&t=49)  

private create(url): Rx.Subject<MessageEvent> {  
&nbsp; let ws = new WebSocket(url);  
&nbsp; let observable = Rx.Observable.create(  
&nbsp; (obs: Rx.Observer<MessageEvent>) => {  
&nbsp; &nbsp; ws.onmessage = obs.next.bind(obs);  
&nbsp; &nbsp; ws.onerror = obs.error.bind(obs);  
&nbsp; &nbsp; we.onclose = obs.complete.bind(obs);  
&nbsp; &nbsp; return ws.close.bind(ws); });  

&nbsp; let observer = {  
&nbsp; &nbsp; next (data: Object) => {  
&nbsp; &nbsp; &nbsp; if (ws.readyState === WebSocket.OPEN) {  
&nbsp; &nbsp; &nbsp; &nbsp; ws.send(JSON.stringfy(data));  
&nbsp; &nbsp; &nbsp; }}}  
&nbsp; return Rx.Subject.creat(observer, observable);  
}

constructor() {  
&nbsp; &nbsp; this.socket = io(this.url, {transports: ['websocket', 'polling', 'flashsocket']});
}  


###  needle  

http client module  
[影片](https://youtu.be/PjjjhGW4ceM?list=PLillGF-RfqbZ2ybcoD2OaabW2P7Ws8CWu&t=648)  


### node-json-db
   
[影片](https://youtu.be/KQya9i6czhM?list=PLillGF-RfqbZ2ybcoD2OaabW2P7Ws8CWu&t=414)  


### discord.js  

[影片 discord bot](https://youtu.be/BmKXBVdEV0g?&ab_channel=TraversyMedia&t=316)  
[影片 discord.js](https://youtu.be/BmKXBVdEV0g?&ab_channel=TraversyMedia&t=704) 
[影片 Code a Discord Bot with Python](https://www.youtube.com/watch?v=SPTfmiYiuok&pp=sAQA)  
$ npm install discord.js  


### couchdb  

[影片](https://youtu.be/R6LUMXrAoCE?list=PLillGF-RfqbZ2ybcoD2OaabW2P7Ws8CWu&t=368)  

$ npm install node-couchdb --save  



### mongoDB online  

[影片](https://youtu.be/3f5Q9wDePzY?list=PLillGF-RfqbZ2ybcoD2OaabW2P7Ws8CWu&t=281)  
[影片2](https://youtu.be/3f5Q9wDePzY?list=PLillGF-RfqbZ2ybcoD2OaabW2P7Ws8CWu&t=1160)  
[WEB連結](https://mlab.com/welcome/)  


### gridfs-stream  

[影片](https://youtu.be/3f5Q9wDePzY?list=PLillGF-RfqbZ2ybcoD2OaabW2P7Ws8CWu&t=444)  
[影片2](https://youtu.be/3f5Q9wDePzY?list=PLillGF-RfqbZ2ybcoD2OaabW2P7Ws8CWu&t=1299)  


### koa  

[影片](https://youtu.be/z84uTk5zmak?list=PLillGF-RfqbZ2ybcoD2OaabW2P7Ws8CWu&t=607)  


### nodemailer  

[影片](https://youtu.be/nF9g1825mwk?list=PLillGF-RfqbZ2ybcoD2OaabW2P7Ws8CWu&t=101)  


### redis  

[影片](https://youtu.be/oaJq1mQ3dFI?list=PLillGF-RfqbZ2ybcoD2OaabW2P7Ws8CWu&t=376)  


### multer  

[影片](https://youtu.be/9Qzmri1WaaE?list=PLillGF-RfqbZ2ybcoD2OaabW2P7Ws8CWu&t=972)  


### puppeteer  

[影片 node 爬蟲 | puppeteer js](https://youtu.be/m25RkljTUfY?t=202)  
[影片 Puppeteer Tutorial ](https://www.youtube.com/watch?v=lv316WcAVEQ&list=PL-hNDoK1-od_-4jX3ZL8LMpvlxmZ4cp10&ab_channel=KanielOutis)  


### msnodesqlv8  

[API](https://www.npmjs.com/package/msnodesqlv8)  

$ npm install msnodesqlv8 --save  

const sql = require('msnodesqlv8')  
const connectionString = "server=(LocalDb)\\MSSQLLocalDB;Database=Sample;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";  
const query = "SELECT * FROM tblDepartment";  
sql.open(connectionString, (err, con) =>{  
&nbsp; con.query(query, (err, rows) => {  
&nbsp; console.log(`rows.length ${rows.length} `)   
&nbsp; console.log(rows)  
})  })  


### express-fileupload  

[Youtube How to Upload Files to Node.js Express Server Using Express FileUpload Library](https://youtu.be/ymO_r1hcIXk?t=235)  

const upload = require('express-fileupload')  
const app = require('express')()  
app.use(upload())  

if (req.files) {  
&nbsp; let file = req.files.file  
&nbsp; file.mv('./uploads'+file.name, (err) => {  
&nbsp; &nbsp; if(err) console.log(err)
})  }  

