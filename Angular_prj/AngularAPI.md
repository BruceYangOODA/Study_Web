
## [index]  
### MongoDb  
### Socket.io-client    
### Angular WebSockets Tutorial   









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
[Youtube Angular Socket.IO Tutorial](https://www.youtube.com/watch?v=n7OKfVwClE4&ab_channel=TutorialEdge)  
[Youtube Socket.io - Angular :: How to connect to a Socket.io Server with Angular](https://youtu.be/66T2A2dvplY?t=123)  

npm install socket.io-client  
npm install @types/socket.io-client  

import * as io from "socket.io-client";  

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




