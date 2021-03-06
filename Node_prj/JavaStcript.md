
[Youtube Learn HTML5 and CSS3 From Scratch - Full Course](https://www.youtube.com/watch?v=mU6anWqZJcc&ab_channel=freeCodeCamp.org)  
[Youtube Node.js Crash Course Tutorial](https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&ab_channel=TheNetNinja)  
[Youtube Introduction To Responsive Web Design - HTML & CSS Tutorial](https://www.youtube.com/watch?v=srvUrASNj0s&t=11s&ab_channel=freeCodeCamp.org)  
[Youtube Build 15 JavaScript Projects - Vanilla JavaScript Course](https://www.youtube.com/watch?v=3PHXvlpOkf4&ab_channel=freeCodeCamp.org)  
[Youtube Learn JavaScript - Full Course for Beginners](https://www.youtube.com/watch?v=PkZNo7MFNFg&ab_channel=freeCodeCamp.org)  
[Youtube JavaScript Course for Beginners 2020 - Learn JavaScript from Scratch](https://www.youtube.com/watch?v=2qDywOS7VAc&ab_channel=Academind)  
[Youtube Learn JavaScript by Building 7 Games - Full Course](https://www.youtube.com/watch?v=lhNdUVh3qCc&ab_channel=freeCodeCamp.org)   
[Youtube JavaScript Programming - Full Course](https://www.youtube.com/watch?v=jS4aFq5-91M&ab_channel=freeCodeCamp.org)  
[Youtube Advanced JavaScript Tutorial - Complete Series](https://www.youtube.com/playlist?list=PLvZkOAgBYrsSZiL0L7T-CBGdiBUaHok4x)  
[Youtube JavaScript Project Tutorial: Shopping Cart](https://www.youtube.com/watch?v=q_TZhCWbS3I&ab_channel=freeCodeCamp.org)  
[Youtube Javascript Project Tutorial: Budget App](https://www.youtube.com/watch?v=m_HJ3juuFvo&ab_channel=freeCodeCamp.org)  
[Youtube E-Commerce JavaScript Tutorial - Shopping Cart from Scratch](https://www.youtube.com/watch?v=023Psne_-_4&ab_channel=freeCodeCamp.org)  
[Youtube Node Projects - Task Manager API](https://www.youtube.com/watch?v=jIsj0upCBAM&list=PLnHJACx3NwAdl4yeJF6LzjDiLyW1yF9Ds)  


### [HTML 标签参考手册](https://www.w3school.com.cn/tags/index.asp)  

[index]  
VsCodeExtension   
Basic  
Object  
WebSocket  
Request  
UDP  

### VsCodeExtension   

[影片](https://youtu.be/mU6anWqZJcc?t=718)  
JavaScript (ES6) code snippets  
JavaScript and TypeScript Nightly  
Live Server  
Prettier formatter  

[影片 VsCodeShortCut](https://youtu.be/mU6anWqZJcc?t=8193)  


### Basic

getElementById(id_name)  
addEventListener(event_type, function(){})   
addEventListener("click", function(){})  按一下  
addEventListener("dbclick", function(){})  按兩下  
[影片](https://youtu.be/jS4aFq5-91M?t=17686)  

textContent 泛用性較好  VS innerText  
textContent [影片](https://youtu.be/jS4aFq5-91M?t=4158)  
innerHTML  [影片](https://youtu.be/jS4aFq5-91M?t=19314)  

pop() push()  移除 推擠  最後尾  
shift() unshift()  移除 推擠 最前端  

localStroage.setItem(key, value)  
localStroage.getItem(key)  
[影片](https://youtu.be/jS4aFq5-91M?t=21474)  


### Object  
[影片](https://youtu.be/OGQUls0s0A4?list=PLvZkOAgBYrsSZiL0L7T-CBGdiBUaHok4x&t=139)   
[影片 property.function](https://youtu.be/5Yeu1Xv6VC8?list=PLvZkOAgBYrsSZiL0L7T-CBGdiBUaHok4x&t=646)  


var obj1 = new Object();  
obj1.name = "a";  obj1.age = 16;  

var obj2 = {};  
obj2.name= "b";  obj2.age = 16;  

[影片 function return object](https://youtu.be/8C9Zh3RwPqk?list=PLvZkOAgBYrsSZiL0L7T-CBGdiBUaHok4x&t=241)  

var obj3 = {  
&nbsp; name:"c", age: 16, fucntion_name = () => {}  };  

Object.keys(obj1).forEach( key => { console.log(obj1[key]);  });  

var obj = function () { this.say = (params) => {  console.log(params); return this; } }  

obj3 = hew obj();
obj3.say('Hellow ').say('World');  

[影片 public and private members](https://youtu.be/PxKHmwUdEss?list=PLvZkOAgBYrsSZiL0L7T-CBGdiBUaHok4x&t=87)  

this.XX => Public  
var xx => Private  

[影片 Nested Objects](https://youtu.be/YriClnrLK_s?list=PLvZkOAgBYrsSZiL0L7T-CBGdiBUaHok4x&t=39)  



### WebSocket  
[影片](https://www.youtube.com/watch?v=1BfCnjr_Vjg&ab_channel=Fireship)  

const socket = new WebSocket("ws://localhost:8080");  

socket.onmessage = ({ data }) => { console.log("msg", data); }  

document.querySelector('button').onclick = () => { socket.send('hello'); }  


### Request  

[影片](https://youtu.be/Pm28JXFAu4Y?list=PLyuRouwmQCjnr-rRrhbPrS4YQ0brDQ-14&t=226)  


### UDP  

[Nodejs：UDP极简入门例子](https://segmentfault.com/a/1190000013092163)  
[在Node.JS中UDP服务器和客户端通信示例](http://ourjs.com/detail/58dcd0304edfe07ccdb2353c)  

