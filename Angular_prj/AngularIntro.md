https://www.kancloud.cn/jony_ii/angular/945658
ANGULAR 學習文檔

[Youtube Angular Tutorial for Beginners: Learn Angular & TypeScript](https://www.youtube.com/watch?v=k5E2AVpwsko&ab_channel=ProgrammingwithMosh)  
[Youtube Angular Course Online Free - Tutorial for Beginners](https://www.youtube.com/watch?v=N4MF3mDPFww&list=PLEjh-YiSBCDLC_zhXQ2J5SkHrLHdmV8qc&index=1&ab_channel=MonsterlessonsAcademy) 
[Youtube Angular Crash Course 2021](https://www.youtube.com/watch?v=3dHNOWTI7H8&ab_channel=TraversyMedia)  
[Youtube Learn Angular - Full Tutorial Course](https://www.youtube.com/watch?v=2OHbjep_WjQ&t=15184s&ab_channel=freeCodeCamp.org)  
[Youtube Angular 6 tutorial for beginners](https://www.youtube.com/playlist?list=PL6n9fhu94yhWNJaDgh0mfae_9xoQ4E_Zj)  
[Youtube Spring Boot Full Stack with Angular | Full Course [2021] [NEW]](https://youtu.be/Gx4iBLKLVHk?t=7194)  


## [index]  
install 
base href  
decorator  
proxy  



### install  

[影片](https://youtu.be/7MD9n0yg1y0?list=PLEjh-YiSBCDLC_zhXQ2J5SkHrLHdmV8qc&t=195)  
[NodeJsDownload](https://nodejs.org/en/)  
$ npm install -g @angular/cli  
$ ng new [SiteName]  
$ cd [SiteName]  
$ ng serve  


### base href  
[影片 base href](https://www.youtube.com/watch?v=lMjN-NXjia4&list=PL6n9fhu94yhWqGD8BuKuX-VTKqlNBj-m6&index=3&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)

index.html  
< base href="/">
可以改變網站基礎 URI  

### decorator  

[影片](https://youtu.be/2OHbjep_WjQ?t=1122)  
  
使用 decorator 會自動傳參數,  
第一參數 使用這個decorator 的物件,  
第二參數 這個物件的名稱,  
第三參數 這個物件傳入的參數  


### proxy  

[影片](https://youtu.be/2OHbjep_WjQ?t=6230)  




----------

$ ng add @ng-bootstrap/ng-bootstrap
$ ng add @ng-bootstrap/ng-bootstrap --project myProject

https://www.youtube.com/watch?v=xgc1vnEcPCw&ab_channel=TechieOcean







popup  
https://www.youtube.com/watch?v=aqCMlI6Wq64&t=242s&ab_channel=dotsway
$ npm install ng2-opd-popup

import { PopupModule } from "ng2-opd-popup";
imports: [ PopupModule.forRoot()]  


TS  
import { Popup } from"ng2-opd-popup";  
constructor (private popup:Popup)   


