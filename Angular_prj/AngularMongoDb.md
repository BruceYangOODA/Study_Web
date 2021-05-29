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





