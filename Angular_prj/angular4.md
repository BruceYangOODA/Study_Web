


## [index]   
panel  
navbar  
form-group     
--input  
--radioButton  
--checkbox   
--select  
ngx-bootstrap Datepicker  
--bsDaterangepicker  
--Datapicker 模板樣式修改   
form validataion   
--email 驗證器  
--pattern 正則表達式 驗證器  
--動態添加驗證器  
--select 預設值   
自定義驗證器  
--confirm-password 驗證器  
Service  
ngSwitch  
ngChanges  
--ngChanges Property  
property setter  
EventEmitter    
路由守衛  
路由取值 ActivatedRoute  
動態修改路由  



### panel  
[影片 panel](https://www.youtube.com/watch?v=tPySwBVmGvg&list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5&index=2&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  
< div class="panel panel-primary">  
< div class="panel-heading"> < div class="panel-title">< /div></ div>  
< div class="panel-body"></ div>  
< div class="panel-footer"></ div>  
</ div>  

### navbar  
[影片 navbar](https://www.youtube.com/watch?v=pcOaAU_iaD4&list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5&index=3&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  
< nav class="navbar navbar-default">  
< ul class="nav navbar-nav">  
< li class="nav-item">  
< a routerLink="/list"> XXX < /a>  routerLink是angular屬性  
< /li>  
< /ul>  
< /nav>  

### form-group   
在 app.module.ts   
imports { FormsModule } from"@angular/forms";  
imports: [ FormsModule ]  

ts文件  
import { ngForm } from "@angularForm";  
方法A(命名Form: ngForm): void {}  

#### input  
[影片 input](https://www.youtube.com/watch?v=pwQ3L3UFEjk&list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5&index=5&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)   
< form #命名Form="ngForm" (ngSubmit)="方法A(命名Form)">   
#命名Form以後可以直接用這個 [命名Form]指向這個物件   
有"ngForm"這個屬性,才能使用 驗證器   
button類型是submit, 點擊方法委託給 ngSubmit   
< div class="form-group">   
< label for="OOO"> XXX < /label>    
label的for屬性指定點擊對象,點到label等於點到點擊對象   
< input class="form-control" id="OOO" type="text" [(ngModel)]="OOO" name="OOO">     
[(ngModel)]為 OOO 物件建立資料連結  這個物件沒有名字會報錯,所以加 name屬性   
"form-control"宣告為ngModel物件   
< button type="submit">     
< /div>   
< /form>     
{{ #命名Form.value | json }}   
當這個命名Form的input有值時, 資料連結就會顯示 { "OOO":"A" }   

#### radioButton  
[影片 radioButton](https://www.youtube.com/watch?v=IjEWmoOHHvM&list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5&index=6&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  
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

#### checkbox  
[影片 checkbox](https://www.youtube.com/watch?v=er8FD9V3FEU&list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5&index=7&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  
< div class="form-group">  
< div class="form-control">    
< label class="checkbox-inline">    
< input type="checkbox" name="OOO" [(ngModel)]="OOO">XXX< /label>  
"checkbox-inline"讓點選箱排在一直線上  
[(ngModel)]為 OOO 物件建立資料連結  這個物件沒有名字會報錯,所以加 name屬性  
將會顯示為  {"OOO":true}  
如果要設預設值 就在ts文件上寫 OOO = true;  
< /div>  < /div>  

#### select  
[影片 select list](https://www.youtube.com/watch?v=HMK4P_jx0y8&list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5&index=9&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  
< div class="form-group">  
< label for="OOO"> XXX < /label>  
< select id="OOO" name="OOO" [(ngModel)]="OOO" class="form-control">  
< option value="A"> XXX < /option>  
< option value="B"> XXX < /option>  

[影片 select list2](https://www.youtube.com/watch?v=4fKa13TTn7E&list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5&index=10&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  
< option *ngFor="let item of AAA" [value]="item.屬性"  > item.XXX < /option>  
< /select>  
< /div>  
[(ngModel)]為 OOO 物件建立資料連結  這個物件沒有名字會報錯,所以加 name屬性  
將會顯示為  {"OOO":"A"}  
如果要設預設值 就在ts文件上寫 OOO ="A";  

### ngx-bootstrap Datepicker    
[影片 Datepicker](https://www.youtube.com/watch?v=edaN6iCcqP4&list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5&index=11&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  
[Datepicker 官網API](https://valor-software.com/ngx-bootstrap/datepicker)  
1. $ npm install ngx-bootstrap --save  
2. $ npm install bootstrap@3 --save  
3. 標明樣式表路徑,在 .angular.json  
  "styles":[  
  "../node_modules/bootstrap/dist/css/bootstrap.min.css",  
  "../node_modules/ngx-bootstrap/datepicker/bs-datepicker.css"]  

使用 ngx-bootstrap 的 package  
在 app.module.ts  
import { BsDatepickerModule } from "ngx-bootstrap/datapicker";  
imports: [ BsDatepickerModule.forRoot() ]  

< div class="form-group">  
< label for="OOO"> XXX < /label>  
< input class="form-control" id="OOO" name="OOO" [(ngModel)]="OOO" type="text"  bsDatepicker>  
< /div>  
將會顯示為  {"OOO":"2018-01-16T13:23:32.000Z"}   

#### bsDaterangepicker  
bsDaterangepicker 會出現兩個日曆,返回 [Date(), Date()]  
將會顯示為  {"OOO":["2018-01-16T13:23:32.000Z","2019-06-37T13:23:32.000Z"]}   
 
#### Datapicker 模板樣式修改  
[BsDatepickerConfig API](https://valor-software.com/ngx-bootstrap/datepicker)  
[bsConfig] 在BsDatepickerInlineDirective 說明為 Config object for datepicker  

< input bsDatepicker [bsConfig]="datePickerConfig" placement="right">   
placement 跳出的日曆的位置  

import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";  
datePickerConfig : Partial<BsDatepickerConfig>;  Partial局部  
constructor(){  
  this.datePickerConfig : Object.assign({}, {  
   containerClass: "theme-dark-blue",  
   showWeekNumbers: false,  
   minDate: new Date(2018,1,1),  
   maxDate: new Date(2018,12,31),  
   dateInputFormat: "YYYY/MM/DD"  }) }  
containerClass 外觀主色 ;  showWeekNumbers 顯示第幾周 ; minDate,maxDate 日曆起始點,終止點   
dateInputFormat 日期表示樣式    
Themes 的值有6種 theme-default, theme-green, theme-blue, theme-dark-blue, theme-red, theme-orange  

### form validataion  
[影片 驗證錯誤 訊息](https://www.youtube.com/watch?v=Vh6estB9kqk&list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5&index=17&ab_channel=kudvenkat)  
novalidate nfForm預設不允許 html的 validate指定  
< form ngNativeValidate ></ form>   
  
ngNativeValidate 允許 html5的 validate指令 例如  
required  
maxlength  
pattern   正則表達式驗證器  
min   
max    
email  郵件驗證器  
  
Angular Form Validation Properyies  
touched untouched   當點擊並blur後,修改其布林值  
pristine dirty   當 值 經過改變後,修改其布林值  
valid invalid  驗證 值 是否合格  

< div class="form-group" [class.has_error]="OOOControl.invalid && OOOControl.touched"  
     [class.has-success]="OOOControl.valid">     
< label for="OOO" class="control-label"> XXX < /label>    
< input class="form-control" id="OOO" name="OOO" type="text" [(ngModel)]="OOO"  
       #OOOControl="ngModel">       
#OOOControl="ngModel" 為了要驗證資料,新增另一個 ngModel參照, 由於已經有 OOO 名稱的資料,  
所以加上 Control,讓系統進行區別   
< span class="help-block" *ngIf="OOOControl.invalid && OOOControl.touched"> XXX < /span>  
< /div>   
< button type="submit" class="btn btn-primary" [disable]="命名Form.invalid"> XXX < /button>  
  
[class.has_error]  class="control-label"  class="help-block"  驗證沒過,字體顏色會變成紅色  
[class.has-success]   驗證通過,字體顏色會變成綠色  
[disable]  驗證通過,才可以點擊  
  
{{ OOOControl.touched }} {{ 命名Form.touched }}  
顯示為  "OOOControl": true   "命名Form":true  
因為 #命名Form="ngForm" #OOOControl="ngModel" , 宣告建立 ngModel物件參照他們的值  
所以可以在 html得到這個物件的值  

當 [(ngModel)] 綁定其他物件的名稱時, ngModel綁定的name 就可以跟id 同樣  
< input class="form-control" id="OOO" name="OOO" type="text" [(ngModel)]="Object.OOO"  
       #OOO="ngModel">    

#### email 驗證器   
[影片 Html5 email 驗證器](https://www.youtube.com/watch?v=DNqZ7Du_64Y&list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5&index=18&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  
< div class="form-group" [class.has_error]="OOO.invalid && OOO.touched"  
     [class.has-success]="OOO.valid">     
< label for="OOO" class="control-label"> XXX < /label>    
< input class="form-control" required [email]="Object.OOO!=''" id="OOO" name="OOO" type="text" [(ngModel)]="Object.OOO"    
#OOO="ngModel">       
< span class="help-block" *ngIf="OOO.errors && OOO.errors.required && OOO.touched"> XXX < /span>  
< span class="help-block" *ngIf="OOO.errors?.required && OOO.touched"> XXX < /span>  
< span class="help-block" *ngIf="OOO.errors?.email && OOO.touched"> XXX < /span>  
< /div>   

class="form-control" required email     
OOO.errors && OOO.errors.required  
當 required錯誤 不存在時, OOO.errors.required沒有這個屬性, 所以前面用 OOO.errors 跳掉後面的判斷    
OOO.errors?.required  效果同等於  OOO.errors && OOO.errors.required  

class="form-control" required [email]="Object.OOO!=''"    
*ngIf="OOO.errors?.email && OOO.touched"  
當 input 是 空字串時, email 驗證器不存在, 這樣在觸發 errors.required 時,不會一併觸發 html5 email驗證器   
  
#### pattern 正則表達式 驗證器     
[影片 正則表達式 驗證器](https://www.youtube.com/watch?v=V8GVKAVkTVc&list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5&index=19&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  
< input class="form-control" required   
pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"  
       id="OOO" name="OOO" type="text" [(ngModel)]="Object.OOO"    
#OOO="ngModel">       
< span class="help-block" *ngIf="OOO.errors?.pettern && OOO.touched"> XXX < /span>  

"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"  
XXX@XXX.XXX   
  
#### 動態添加驗證器  
[影片 動態添加驗證器](https://www.youtube.com/watch?v=6QUkIS6vvEI&list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5&index=20&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  
< input type="radio" required name="OOO" value="AAA" [(ngModel)]="Object.OOO" #OOO="ngModel" >   
< input type="radio" required name="OOO" value="BBB" [(ngModel)]="Object.OOO" #OOO="ngModel" >  
  
< input type="text" name="AAA" [required]="OOO.value=='AAA'">   
< input type="text" name="BBB" [required]="OOO.value=='BBB'">    
  
#### select 預設值  
[影片 select](https://www.youtube.com/watch?v=dyif1Xy9GY8&list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5&index=24&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  
< select #OOO="ngModel" [(ngModel)]="Object.OOO" required >  
< option disabled [ngVale]="null"> XXX < /option>  
< option *ngFor="let item of CCC" [value]=item.AAA> {{ item.BBB }} < /option>  
< /select>  
  
[ngVale]="null" [value]="null" 的差異   
[ngVale]的null 是null， 但[value]的null是字串  
required 驗測會認定 字串null 是有值 而認定 驗證通過    

### 自定義驗證器 
[影片 自定義驗證器](https://www.youtube.com/watch?v=2AAUf32pKy8&list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5&index=25&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  
新增檔案  命名-validator.directive.ts  

import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";  
import { Directive, Input } from "@angular/core";  
@Directive({  
  selector: "[app命名Validator]",  在HTML上面的標示器  
  providers: [{  
  provide: NG_VALIDATORS,  宣告這個是NG 驗證器  
  useExisting: 命名ValidatorDirective,  使用這個class進行驗證   
  multi:true  }]    
  })  
  
export class 命名ValidatorDirective implements Validator {   
  // tslint:disable-next-line:no-input-rename  讓 app命名Validator標示器 化名為 CCC 可以編碼成功  
  @Input("app命名Validator")  CCC: string;  
  validate(control: AbstractControl): {[key:string]:any} | null  
  { control.value === this.CCC ? { "AAA":true }  : null ;}  
  }  
HTML  
< select ...... app命名Validator="BBB" >  
  < option value="BBB"> XXX < /option>  
< /select>    
< span class="help-block" *ngIF="OOO.touched && OOO.errors?.AAA"> XXX< /span>  
由於 control.value傳來 option的值 BBB, 在html標記 app命名Validator的值是 "BBB"  
所以驗證器就會傳回  { "AAA":true } , 結果驗證不通過   
  
在 app.module.ts 宣告 自定義驗證器  
import { 命名ValidatorDirective }   from"檔案位址";  
declarations: [ 命名ValidatorDirective ]    
  
#### confirm-password 驗證器    
[影片 confirm-password 驗證](https://www.youtube.com/watch?v=2AAUf32pKy8&list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5&index=25&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)   
  
< div ngModelGroup="CCC"   
[class.has-error]="AAA.touched && AAA.invalid && !AAA.errors?.required">  
< input name="OOO" #OOO="ngModel" (change)="AAA.control.updateValueAndValidity()">  
< input name="AAA" #AAA="ngModel" app命名Validator="OOO">    
< /div>  
  
@Input() app命名Validator: string;    
validate(control: AbstractControl): {[key:string]:any} | null {   
  const controlToCompare = control.parent.get(this.app命名Validator);  
  if (controlToCompare && controlToCompare.value !== control.value) { return { "BBB":true } };   
  else { return null; }    }  
control 是 OOO 因為標示器 app命名Validator 的值指向 OOO  
controlToCompare 是 AAA => 由 OOO的parent,就是rootForm找到有 app命名Validator 的控制項就是 AAA  
control.parent.get(this.app命名Validator);    
  
AAA.control.updateValueAndValidity()  
由於 OOO 沒有標示器 不會自動驗證, 所以呼叫 AAA模板功能取代    
  
#### [影片 confirm-password 進化版]([加強版](https://www.youtube.com/watch?v=YhazkQd59Hk&list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5&index=27&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)    
HTML  
< div ngModelGroup="CCC" app命名Validator #CCC="ngModelGroup"   
[class.has-error]="CCC.errors?BBB && !AAA.errors?required">  
< /div>  
validate(CCC: AbstractControl): { [ key:string ]: any} | null  {  
  const OOOField = CCC.get("OOO");  
  const AAAField = CCC.get("AAA");  
  if ( OOOField && AAAField &&   
  OOOField.value !== AAAField.value ){ .....}  }   
  
### Service    
[影片 Angular Service](https://www.youtube.com/watch?v=4lSvgj8ohAI&list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5&index=30&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)    
新增檔案 命名.service.ts    
import { Injectable } from "@angular/core";  
import { 資料類別 } from "檔案位址";  

@Injectable()  
export class 命名Service {  
  private 資料物件: 資料類別[] = [{....},{....}]  
  get方法(): 資料類別[] { return this.資料物件 }  
  add方法( AAA : 資料類別 ): void { this.資料物件.push(AAA); }  }   
 
在app.module.ts 宣告  所有組件都可以用  
import { 命名Service } from "檔案位址";  
providers: [ 命名Service ]    
  
在使用服務的組件.ts    
import { 命名Service } from "檔案位址";  
constructor( private OOO: 命名Service ) {}    
ngOnInit(){ this.網頁資料物件 = this.OOO.get方法() }    
  
### ngSwitch      
[影片 Switch Case](https://www.youtube.com/watch?v=IlKIuP-5SKA&list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5&index=32&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  
< div class="col-xs-6" [ngSwitch]="Object.OOO">  
< span *ngSwitchCase="1"> 111 < /span>  
< span *ngSwitchCase="2"> 222 < /span>  
< span *ngSwitchCase="3"> 333 < /span>  
< span *ngSwitchDefault> N/A < /span>  
< /div>  

### ngChanges  
[影片 ngChanges](https://www.youtube.com/watch?v=E9wqQw3JLvM&list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5&index=34&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)    
import { OnChanges,SimpleChanges } from "@angular/core";  
export class 命名Component implements OnChanges {  
  @Input 資料物件: 資料類別;
  ngOnChanges(changes : SimpleChanges ) { console.log( changes ); }  }    
log => 
{ 資料物件 : SimpleChange }    
展開 =>  
currentValue : { 資料物件b }  
previousValue : { 資料物件a }  

#### ngChanges Property    
[影片 ngChanges Property](https://www.youtube.com/watch?v=_En0KBHQKZI&list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5&index=35&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  
ngOnChanges(changes : SimpleChanges ) {  
  for (const propertyName of Object.keys(changes)) {  
  const change = changes[propertyName];  
  const from = JSON.stringify(change.previousValue);  
  const to = JSON.stringify(change.currentValue);  
  console.log( propertyName + " changed from " + from + " to " + to);  
  } }    
  
### property setter  
[影片 property setter](https://www.youtube.com/watch?v=BYwfrSlJFfY&list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5&index=36&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)   
import { Input } from "@angular/core";  
private _資料物件 : 資料類別;  
@Input()  
set 資料物件( val: 資料類別 ) { this._資料物件 = val; }  
get 資料物件(): 資料類別 { return this._資料物件; }    
  
set 資料物件( val: 資料類別) {  
  console.log( " change.previousValue " + JSON.stringify( this._資料物件; ));
  console.log( " change.currentValue " + JSON.stringify( val; ));  
  this._資料物件 = val;  }  
上面這個就是 ngChanges Property 的原理    
  
### EventEmitter  
[影片 EventEmitter](https://www.youtube.com/watch?v=-zJVea9DPb8&list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5&index=37&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)    
子組件    
import { Output, EventEmitter } from "@angular/core";   
@Input AAA: 資料類別;    
@Output OOO: EventEmitter<資料類別> = new EventEmitter<資料類別>();  
方法() { this.OOO.emit(this.資料物件); }  

父HTML 
< 子組件選擇器 [子組件AAA]="父組件BBB" (子組件事件OOO)="父組件接收方法CCC($event)">  
父組件    
父組件BBB : 資料類別;  
父組件接收方法( XXX: 資料類別) { this.父組件物件 = XXX; }   
當子組件emit資料物件出來後,this.父組件物件就會改變    

### 路由守衛      
[影片 路由守衛](https://www.youtube.com/watch?v=WveRq-tlb6I&list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5&index=39&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  
  
路由守衛命名規則  
CanDeactivate    可以離該當前URL  
CanActivate    可以進入此URL  
CanActivateChild  可以觸發子路由  
CanLoad    可以載入同步資料  
Resolve  

新增檔案 命名-can-deactivate-guard.service.ts    
import { Injectable } from "@angular/core";    
import { CanDeactivate } from"@angular/router";  
@Injectable()    
export class 命名CanDeactivateGuardService implemts CanDeactivate<組件類別> {  
  canDeactivate( component: 組件類別) : boolean {  
  if ( component.AAAForm.dirty ) { return confirm("你確定要離開?"); }
  return true;  }   }   
  
組件類別  
HTML  
< form #OOO="ngForm" >    
組件    
@ViewChild("OOO") public AAAForm: NgForm;  
  
在 app.module.ts 宣告  
import { 命名CanDeactivateGuardService } from "檔案位址";   
  
在 appRoutes: Routes 宣告路由守衛    
{ path: "路徑",  
  conponent: 組件類別,  
  canDeactivate: [命名CanDeactivateGuardService],    
  activate: []  }  
 
### 路由取值 ActivatedRoute  
[影片 路由取值 ActivatedRoute](https://www.youtube.com/watch?v=3r43-VITWrU&list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5&index=41&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)    
路由模式    
{ path: "list/:id",  
  component: 組件類別 }   
  
import { ActivatedRoute } from "@angular/router";  
資料物件 : 資料類別;  
constructor( private _route: ActivateRoute, private _service: 服務類別 ) {}    
ngOnInit() {  
  const OOO = +this._route.snapshot.params["id"];    Angular2  
  const OOO = +this._route.snapshot.paramMap.get("id");   Angular4  
  this.資料物件 = this._service.get方法( OOO ); }    

### 動態修改路由  
[影片 動態修改路由](https://www.youtube.com/watch?v=jZJY70PY10w&list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5&index=42&ab_channel=kudvenkatkudvenkat%E5%B7%B2%E9%A9%97%E8%AD%89)  
HTML  
< a class="btn btn-primary" [routerLink]="['/list']"> 回到list < /a>  
< button class="btn btn-primary pull-right" (click)="方法A()" > 下一位 < /button>  
組件    
private _id : number;   
資料物件 : 資料類別;     
  
constructor (  
  private _route: ActivatedRoute,  
  private _service: 服務類別,  
  private _router: Router) {}   
  
ngOnInit() {    
  this._id = +this._route.snapshot.paramMap.get("id");   方法A 動態修改路由,但靜照snapshot不能處理  
  this._route.paramMap.subscribe( params => {  
  this._id = params.get("id");  
  this.資料物件 = this._service.get方法( this._id );  });  }   
  
方法A() {  
  if(this._id < 3) { this_id = this._id + 1 ; }  
  else { this._id = 1; }  
  this._router.navigate(["/位址", this._id]);  路由模式是 /位址/:id    }  
## 123
                  
