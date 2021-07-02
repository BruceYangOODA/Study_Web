
## [Youtube Angular Forms Tutorial](https://www.youtube.com/playlist?list=PLC3y8-rFHvwhwL-XH04cHOpJnkgRKykFi)  
## [Youtube Angular Component Interaction Tutorial](https://www.youtube.com/playlist?list=PLC3y8-rFHvwgKhaLU8GTyF-5Bb8qT-wzV)  

index  

ngForm  
ngModel  
ng-valid    
select validation
FormGroup  
FormBuilder  
AbstractControl  
valueChanges.subscribe()  
FormArray  
ElementRef  
getter and setter   
Input Decorator  父組件to子組件  
ngOnChange  
ViewChild  修飾子組件,直接取得ts實例  
Output Decorator  子組件to父組件  
Sunject  





### ngForm  

[影片 ngForm](https://youtu.be/iyabqUWYsz4?list=PLC3y8-rFHvwhwL-XH04cHOpJnkgRKykFi&t=124)  
[官方 API](https://angular.io/api/forms/NgForm)  

< form #ZZZ="ngForm">  
< div ngModelGroup="ZZZ">  
&nbsp; < input type='text' ngModel name="AAA"/>  
&nbsp; < input type='tel' ngModel name="BBB"/>  
&nbsp; < input type='email' ngModel name="CCC"/>  
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
&nbsp; < input type='text' ngModel name="AAA"/>  
&nbsp; < input type='tel' [ngModel]="OOO.XXX" name="BBB"/>  單向綁定, input不會改變ngModel資料  
&nbsp; < input type='email' [(ngModel)]="OOO.YYY" name="CCC"/>   雙向綁定, input會改變ngModel與ngForm資料  
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


### FormGroup    
 
[影片 FormGroup](https://youtu.be/-7hS1mZKT2Y?list=PLC3y8-rFHvwhwL-XH04cHOpJnkgRKykFi&t=202)  
[影片 FormGroup2](https://youtu.be/B0a3IIQckBw?list=PLC3y8-rFHvwhwL-XH04cHOpJnkgRKykFi&t=112)  

app.module.ts  
import { MgModule } from '@angular/core';  
import { ReactiveFormsModule } from '@angular/forms';  
imports: [ ReactiveFormsModule ]  

[官方 API](https://angular.io/api/forms/ReactiveFormsModule)

綁定 FormGroup [formGroup]="registrationForm"  
TAG FormControl name  formControlName="userName"  
TAG FormGroup name formGroupName="adress"  

< div [formGroup]="ZZZ">  
&nbsp; < input type='text' formControlName="userName"/>  
&nbsp; < input type='password' formControlName="password"/>  
&nbsp; < input type='password' formControlName="confirmPassword"/>  
&nbsp; < div formGroupName="adress">   
&nbsp; &nbsp; < input type='text' formControlName="city">  
&nbsp; &nbsp; < input type='text' formControlName="state">  
&nbsp; &nbsp; < input type='text' formControlName="postalCode">  
< /div>  
< /div>  

.ts  

import { FormGroup, FormControl } from '@angular/forms';  

registrationForm = new FormGroup(  
&nbsp; userName: new FormControl('AAA'),   
&nbsp; password: new FormControl(''),  
&nbsp; confirmPassword: new FormControl(''),  
&nbsp; adress: new FormGroup({  
&nbsp; &nbsp; city: new FormControl('');  
&nbsp; &nbsp; state: new FormControl('');  
&nbsp; &nbsp; postalCode: new FormControl('');  
})  
);  


### FormBuilder  

[影片 FormBuilder](https://youtu.be/3_dFnULt3FA?list=PLC3y8-rFHvwhwL-XH04cHOpJnkgRKykFi&t=59)  
[影片 Validators](https://youtu.be/ZQroyD2rLzY?list=PLC3y8-rFHvwhwL-XH04cHOpJnkgRKykFi&t=95)  
[官方 API](https://angular.io/api/forms/FormBuilder)  

.ts  
import { FormBuilder, Validators } from '@angular/forms';  
constructor(private fb: FormBuilder) {}  

registrationForm = this.fb.group({  
&nbsp; userName: ['AAA', Validators.required],  
&nbsp; password: [''],  
&nbsp; confirmPassword: [''],  
&nbsp; adress: this.fb.group({  
&nbsp; &nbsp; city: [''],  
&nbsp; &nbsp; state: [''],  
&nbsp; &nbsp; postalCode: [''],  
}),  
});  


### AbstractControl  

[影片 AbstractControl](https://youtu.be/nm-x8gsqB2E?list=PLC3y8-rFHvwhwL-XH04cHOpJnkgRKykFi&t=121) 
[官方 API](https://angular.io/api/forms/AbstractControl)  

import { AbstractControl } from '@angular/forms';  

ForbiddenNameValidator.ts
export function AAAValidator(control: AbstractControl): {[key: string]: any} | null {  
&nbsp; const forbidden = /admin/.test(control.value);  
&nbsp; return forbidden ? { 'forbiddenName': {value: control.value}} : null;  
}  

registrationForm = this.fb.group({  
&nbsp; userName: ['AAA', Validators.required], forbiddenNameValidator.AAAValidator,  
});  

[影片 Validator2](https://youtu.be/dlVVYmntDnE?list=PLC3y8-rFHvwhwL-XH04cHOpJnkgRKykFi&t=237)  

把 Validator放在 FormGroup 層級,就可以Call 下面兩個 FormControl pw && confirmPW  


### valueChanges.subscribe()  

[影片 valueChanges.subscribe()](https://youtu.be/7y6GV3EeMHE?list=PLC3y8-rFHvwhwL-XH04cHOpJnkgRKykFi&t=263)  


### FormArray  

[影片 Dynamic Form Control](https://youtu.be/4nJJQMxZkF0?list=PLC3y8-rFHvwhwL-XH04cHOpJnkgRKykFi&t=58)  
[官方 API](https://angular.io/api/forms/FormArray)  

import { FormArray,FormBuilder } from '@angular/forms';  
constructor(private fg: FormBuilder) {}  


### ElementRef  

[影片 ElementRef](https://youtu.be/lreYTcPxPRk?list=PLC3y8-rFHvwgKhaLU8GTyF-5Bb8qT-wzV&t=88)  
[官方 API](https://angular.io/api/core/ElementRef)  
< input #AAA_Ref type='text'>

.ts  
import { ElementRef, ViewChild } from '@angular/core';  

Ref綁定 html元素  
@ViewChild('AAA_Ref') AAA_ElementRef: ElementRef;  

輸入框載入時,focus, 必須在 AfterViewInit 時才能 focus    
ngAfterViewInit() { this.AAA_ElementRef.nativeElement.focus();  }     

### getter ans setter  

[影片 getter ans setter](https://youtu.be/132VfEETYvs?list=PLC3y8-rFHvwgKhaLU8GTyF-5Bb8qT-wzV&t=88)  

private _AAA: string;  
get AAA(): string { return this._AAA; }  
set AAA(value: string) { this._AAA = value; } 


### Input Decorator  

[影片 Input Decorator](https://youtu.be/mUd_4ASfnog?list=PLC3y8-rFHvwgKhaLU8GTyF-5Bb8qT-wzV&t=461)  
.子組件ts  
@Input() 子組件物件名稱: 類別  

.父組件html  
<app-child [子組件物件名稱]="父組件物件名稱"></app-child>  

.子組件ts  這樣也可以  
@Input('子組件物件名稱') 另外取名子: 類別  

用Input Decorator 裝飾 setter()  
從父組件灌注資料進 子組件物件名稱 seteter  


### ngOnChange  

[影片 ngOnChange](https://youtu.be/ZZYo-YkixTA?list=PLC3y8-rFHvwgKhaLU8GTyF-5Bb8qT-wzV&t=65)  

import { OnChanges, SimpleChanges } from '@angular/core';  

ngOnChanges(changes: SimpleChanges) {  
&nbsp; console.log(changes);  
&nbsp; const AAA_Value = changes['AAA'];  
console.log(AAA_Value);  
}  

SimpleChanges { previousValue: any, currentValue: any, firstChange: boolean};  


### ViewChild  

[影片 ViewChild Decorator](https://youtu.be/YnSyi7BIIUs?list=PLC3y8-rFHvwgKhaLU8GTyF-5Bb8qT-wzV&t=62)  

除了ngModel 資料綁定,  
使用 ViewChild 修飾器,也可以從父組件灌注資料  
用 @ViewChild 修飾 Component 取得子組件,直接操作子組件 ts    


### Output Decorator  

[影片 Output Decorator](https://youtu.be/QQ4gYIeZQrs?list=PLC3y8-rFHvwgKhaLU8GTyF-5Bb8qT-wzV&t=251)  
 
子組件.ts  
import { Output , EventEmitter } from '@angular/core';  

@Output() greetEvent = new EventEmitter();  

callParentGreet() { this.greetEvent.emit('AAA');  }  

父組件.html  
<app-child (greetEvent)='greet($event)'></app-child>

父組件.ts  
greet(event: string) { console.log(event); }  


### Subject  

[影片 Subject](https://youtu.be/oj6Tae2oSo0?list=PLC3y8-rFHvwgKhaLU8GTyF-5Bb8qT-wzV&t=331)  

.sevice.ts  
Import { Subject } from 'rxjs';  

private _AAA = new Subject<string>();
AAA = this._AAA.asObservable();  
 
sendMessage(msg: string) {  
&nbsp;  this._AAA.next(msg);
}  

父組件  
constructor(private _service: Service) { }  
 
funA() { this._service.sendMessage('BBB');  }  
 
funB() { this._service.sendMessage('CCC');  }   

子組件  
constructor(private _service: Service) { }   

ngOnInit() {  
&nbsp; this._service.AAA.subscribe((msg) => {  
&nbsp; &nbsp; console.log(msg);  
});  
}



