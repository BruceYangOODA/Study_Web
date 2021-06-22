


## [Youtube Node.js Tutorial - Fundamentals](https://www.youtube.com/playlist?list=PLvZkOAgBYrsQVc9PFn8mQ-xXef9zmy3kC)  
## [Youtube Build and Deploy a Realtime Chat Application - Socket.io](https://www.youtube.com/watch?v=ZwFA3YMfkoc&ab_channel=JavaScriptMastery)  


[Index]  
net API  
readline API  CMD介面  





### net API  
[影片](https://youtu.be/HyGtI17qAjM?t=356)  

const net = require("net");  
const colors = require("colors");  
const server = net.createServer();  

server.on("connection", (socket) => {   
&nbsp; const remoteAddress = socket.remoteAddress + ":" + socket.remotePort;  
&nbsp; console.log("new client connected %s", remoteAddress);  
&nbsp; socket.on("data", (data) => {  
&nbsp; &nbsp; console.log("Data from %s: %s", remoteAddress, data);      
&nbsp; &nbsp; socket.write("Hello!");  });
&nbsp; socket.once("close", () => { console.log("connection from %s closed", remoteAddress); });  
&nbsp; socket.on("error", (err) => {  
&nbsp; &nbsp; console.log("connection %s error: %s", remoteAddress, err.message); });  
});  


server.listen(SERVER_PORT, () => { console.log("Server On %j", server.address());  });  

### readLine API  CMD介面
[影片](https://youtu.be/BvikbwV3O_c?list=PLvZkOAgBYrsQVc9PFn8mQ-xXef9zmy3kC&t=856)  


const readlineSync = require("readline-sync");  
const color = require("colors");  
const net = require("net");  
const HOST = "127.0.0.1";  
const SERVER_PORT = 9000;  

var client = null;  

fucntion menu() {  
&nbsp; var lineRead = readlineSync.question("\n\nEnter Option (1-Open, 2-Send, 3-Close, 4-Quit): ");  
&nbsp; switch (lineRead) {  
&nbsp; &nbsp; case "1":   
&nbsp; &nbsp; &nbsp; OpenConnection();  break;  
&nbsp; &nbsp; case "2":  
&nbsp; &nbsp; &nbsp; var data = readlineSync.question("Enter data to send");  
&nbsp; &nbsp; &nbsp; SendData(data);  break;  
&nbsp; &nbsp; case "3":  
&nbsp; &nbsp; &nbsp; CloseConnection();  break;  
&nbsp; &nbsp; case "4":  
&nbsp; &nbsp; &nbsp; return;  break;  
&nbsp; &nbsp; default:  
&nbsp; &nbsp; &nbsp; setTimeout( () => { menu(); }, 0); break();  
&nbsp; }  
}  

menu();  









$ npm install -g --save create-react-app  
$ mkdir client  
$ cd client  
$ create-reat-app ./  
$ npm install -g --save react-router socket.io-client query-string  
$ npm install --save react-scroll-to-bottom react-emoji  

$ cd ..  
$ mkdir server  
$ cd server  
$ npm init -y  
$ npm install --save cors nodemon express socket.io  

















