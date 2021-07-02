
## [Youtube Angular Forms Tutorial](https://www.youtube.com/playlist?list=PLC3y8-rFHvwhwL-XH04cHOpJnkgRKykFi)  


index  

ngForm  
ngModel  
ng-valid    
select validation








### ngForm  

[影片 ngForm](https://youtu.be/iyabqUWYsz4?list=PLC3y8-rFHvwhwL-XH04cHOpJnkgRKykFi&t=124)  
[官方 API](https://angular.io/api/forms/NgForm)  

< form #ZZZ="ngForm">  
< div ngModelGroup="ZZZ">  
< input type='text' ngModel name="AAA"/>  
< input type='tel' ngModel name="BBB"/>  
< input type='email' ngModel name="CCC"/>  
< /div>  
< /form>   

{{ ZZZ.value | json }}

給form ID ZZZ 並指定為 ngForm  
給form成員 ngModel TAG  
name屬性  讓ngForm BIND 這些成員資料    

ngModelGroup  將group下面的ngModel組成一個物件  


### ngModel  

[影片 ngModel](https://youtu.be/2cWPk2X79is?list=PLC3y8-rFHvwhwL-XH04cHOpJnkgRKykFi&t=308)  
[官方 API](https://angular.io/api/forms/NgModel)  

< form #ZZZ="ngForm">  
< div ngModelGroup="ZZZ">  
< input type='text' ngModel name="AAA"/>  
< input type='tel' [ngModel]="OOO.XXX" name="BBB"/>  單向綁定, input不會改變ngModel資料  
< input type='email' [(ngModel)]="OOO.YYY" name="CCC"/>   雙向綁定, input會改變ngModel與ngForm資料  
< /div>  
< /form>   

{{ ZZZ.value | json }}  ngForm資料  
{{ OOO | json }}  ngModel資料  


### ng-valid    

[影片 form validity](https://youtu.be/WyWJwR0FJV0?list=PLC3y8-rFHvwhwL-XH04cHOpJnkgRKykFi&t=124)  

ng-touched  ng-untouched  
ng-dirty  ng-pristine  
ng-valid ng-invalid  

< input type='text' required #WWW="ngModel" [(ngModel)]="OOO.YYY" name="AAA"/>  

指定ID WWW, 賦予 ngModel TAG,轉成 ngModel 與 ngForm相同邏輯  
{{ WWW.valid }}  

[影片 Display Error Messages](https://youtu.be/U8FfRRLFmSY?list=PLC3y8-rFHvwhwL-XH04cHOpJnkgRKykFi&t=154)  

class.d-none 效果跟 hidden一樣  


### select validation  

[影片 Select validation](https://youtu.be/Ikn9eWLw3ys?list=PLC3y8-rFHvwhwL-XH04cHOpJnkgRKykFi&t=338)  

#命名 (blur) (change) 傳入 命名.value 控制 isSelectValid 






















