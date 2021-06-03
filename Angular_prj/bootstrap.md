## [index]   
### panel  
### navbar  
### form-group   

### panel  
[影片 panel](https://youtu.be/tPySwBVmGvg?list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5)  
< div class="panel panel-primary">  
< div class="panel-heading"> < div class="panel-title">< /div></ div>  
< div class="panel-body"></ div>  
< div class="panel-footer"></ div>  
</ div>  

### navbar  
[影片 navbar](https://youtu.be/pcOaAU_iaD4?list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5)  
< nav class="navbar navbar-default">  
< ul class="nav navbar-nav">  
< li class="nav-item">  
< a routerLink="/list"> XXX < /a>  routerLink是angular屬性  
< /li>  
< /ul>  
< /nav>  

### form-group   
[影片 input](https://youtu.be/pwQ3L3UFEjk?list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5)  
<form #命名Form="ngForm" (ngSubmit)="方法A(命名Form)">  #命名Form以後可以直接用這個 [命名Form]指向這個物件  
有"ngForm"這個屬性,才能使用 驗證器  
button類型是submit, 點擊方法委託給 ngSubmit  
< div class="form-group">  
< label for="OOO"> XXX < /label>   label的for屬性指定點擊對象,點到label等於點到點擊對象  
< input id="OOO" type="text" class="form-control" [(ngModel)]="OOO" name="AAA">    
[(ngModel)]為 OOO 物件建立資料連結  這個物件沒有名字會報錯,所以加 name屬性  
"form-control"宣告為ngModel物件  

[影片 radioButton](https://youtu.be/IjEWmoOHHvM?list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5)  
< div class="form-group">  
< div class="form-control">  
< label class="radio-inline">  
< input type="radio" name="gender" value="male" [(ngModel)]="OOO">XXX< /label>  
< label class="radio-inline">  
< input type="radio" name="gender" value="female" [(ngModel)]="OOO">XXX< /label>   
"radio-inline"讓按鈕排在一直線上  
[(ngModel)]為 OOO 物件建立資料連結  這個物件沒有名字會報錯,所以加 name屬性  
將會顯示為  {"OOO":"male"}  
如果要設預設值 就在ts文件上寫 OOO = 'male';  
< /div>  < /div>  

[影片 checkbox](https://youtu.be/3qfzuZBoThI?list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5)  
< div class="form-group">  
< div class="form-control">    
< label class="checkbox-inline">    
< input type="checkbox" name="OOO" [(ngModel)]="OOO">XXX< /label>  
"checkbox-inline"讓點選箱排在一直線上  
[(ngModel)]為 OOO 物件建立資料連結  這個物件沒有名字會報錯,所以加 name屬性  
將會顯示為  {"OOO":true}  
如果要設預設值 就在ts文件上寫 OOO = true;  
< /div>  < /div>  

[影片 select list](https://youtu.be/HMK4P_jx0y8?list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5)  
< div class="form-group">  
< label for="OOO"> XXX < /label>  
< select id="OOO" name="OOO" [(ngModel)]="OOO" class="form-control">  
< option value="A"> XXX < /option>  
< option value="B"> XXX < /option>  
< /select>  
< /div>  
[(ngModel)]為 OOO 物件建立資料連結  這個物件沒有名字會報錯,所以加 name屬性  
將會顯示為  {"OOO":"A"}  
如果要設預設值 就在ts文件上寫 OOO ="A";  

< button type="submit">    
< /div> 
< /form>    
{{ #命名Form.value | json }}  
當這個命名Form的input有值時, 資料連結就會顯示 { "OOO":"A" }

import { ngForm } from "@angularForm";  
方法A(命名Form: ngForm): void {}  

在 app.module.ts   
imports { FormsModule } from"@angular/forms";  
imports: [ FormsModule ]  

  
 
  

  
  
