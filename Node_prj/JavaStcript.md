
## 


[index]
JavaScript Programming - Full Course  
WebSocket  


### JavaScript Programming - Full Course  
[Youtube JavaScript Programming - Full Course](https://www.youtube.com/watch?v=jS4aFq5-91M&ab_channel=freeCodeCamp.org)  

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












### WebSocket  
[影片](https://www.youtube.com/watch?v=1BfCnjr_Vjg&ab_channel=Fireship)  

const socket = new WebSocket("ws://localhost:8080");  

socket.onmessage = ({ data }) => { console.log("msg", data); }  

document.querySelector('button').onclick = () => { socket.send('hello'); }  






