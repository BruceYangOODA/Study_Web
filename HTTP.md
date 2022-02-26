


[Building a NodeJS HTTP/2 Server and Secure it with Let’s Encrypt](https://www.youtube.com/watch?v=b35Dcz91ItE&ab_channel=HusseinNasser)  20220225  
[HTTP Crash Course & Exploration](https://www.youtube.com/watch?v=iYM2zFP3Zn0&ab_channel=TraversyMedia)  20220225   
[Angular HTTP Client Quick Start Tutorial](https://www.youtube.com/watch?v=_05v0mrNLh0&ab_channel=Fireship)  20220226  
[Angular 9 Tutorial For Beginners #64- HTTP Headers](https://www.youtube.com/watch?v=z83KBAoyNWw&ab_channel=ARCTutorials) 20220226  



### Building a NodeJS HTTP/2 Server and Secure it with Let’s Encrypt  
### HTTP Crash Course & Exploration  
### Angular HTTP Client Quick Start Tutorial  
### Angular 9 Tutorial For Beginners #64- HTTP Headers  











### Building a NodeJS HTTP/2 Server and Secure it with Let’s Encrypt  
[respond](https://youtu.be/b35Dcz91ItE?t=374)  
stream.respond({  
'content-type': 'application/json',  
'status': 200  
})  

stream.end(JSON.stringify({  
'user': 'Hellow',  
'id': 'World'  
}))  

### HTTP Crash Course & Exploration    
[HEADER](https://youtu.be/iYM2zFP3Zn0?t=1257)  
host  
user-agent  
req.rawHeaders  


### Angular HTTP Client Quick Start Tutorial  
[HTTP Client](https://www.youtube.com/watch?v=_05v0mrNLh0&ab_channel=Fireship)  
let params = new HttpParams().set('userId','hellow')  
let headers = new HttpHeaders().set('Authorization', 'auth-token')  
this.post = this.http.get('url', {params, headers})  

### Angular 9 Tutorial For Beginners #64- HTTP Headers  
[HEADERS](https://www.youtube.com/watch?v=z83KBAoyNWw&ab_channel=ARCTutorials)  
let headers = new HttpHeaders();  
headers.append('content-type','application/json');  
headers.append('authorization','set16');   

[GET](https://youtu.be/z83KBAoyNWw?t=537)  
const headers = new HttpHeaders({  
'content-type':'application/json',  
'Authorization' : 'abcdefg'  
})  







