


## [Youtube Node.js Tutorial - Fundamentals](https://www.youtube.com/playlist?list=PLvZkOAgBYrsQVc9PFn8mQ-xXef9zmy3kC)  
## [Youtube Build and Deploy a Realtime Chat Application - Socket.io](https://www.youtube.com/watch?v=ZwFA3YMfkoc&ab_channel=JavaScriptMastery)  


[Index]  






### net API  
[影片](https://youtu.be/HyGtI17qAjM?t=356)  

const net = require("net");  
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

















