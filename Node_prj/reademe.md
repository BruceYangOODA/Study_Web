[Youtube 爱前端从入门到深入Node js开发实战](https://www.youtube.com/watch?v=sq3FAlPQEyM&list=PLE4XbebCbtzFwGFTalZIRkRgGTXoKfW-1&ab_channel=Program)  
[Youtuve Node.js 从零开发个人博客项目](https://www.youtube.com/watch?v=ABz5f1aVeO4&list=PL9nxfq1tlKKlhV1UzUmElRkxmjkoO3mtH&ab_channel=JomyKing)  
[Youtube Node.js教學](https://www.youtube.com/watch?v=J9PfvdtkFLg&list=PLzKtnppOmiXCPlnd8dDmI8tVxjAUClcmV&ab_channel=AngusChang) 
[Youtube 千锋Web前端教程 NodeJS](https://www.youtube.com/watch?v=jxMvFxOqd24&list=PLwDQt7s1o9J6v1bYUF_mgOXd_C5saqh22&ab_channel=%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2)  

Node適合處理大量IO任務的網路服務  
### I    
1. 安裝 Node.js [官網](https://nodejs.org/en/download/)   
   $ node -v 確認安裝版本  
   安裝資料夾 Program Files/nodejs  
   
## API  
var fs = require('fs');  
### HTTP  
var http = require('http');  
var server = http.createServer(function(req,res){});  
server.listen(3333);  
req.connection.remoteAddress  #USER IP 位址  

### 事件驅動  
