
[Angular Tutorial for Beginners - Web Framework with Typescript Course 2021-10-20](https://www.youtube.com/watch?v=AAu8bjj6-UI&ab_channel=freeCodeCamp.org)  



Output decorator  
ViewChild decorator  
Host selector  
ng-content  
pipe  
attr class style biding  
template variables #  
ngClass  
ngModel  
Directive @HostListener  







### Output decorator   
[影片](https://youtu.be/AAu8bjj6-UI?t=986)  
import { Output, EventEmitter } from '@angular/core'  

ChildC.ts    
@Output() messageEvent = new EventEmitter<any>();  
sendMessage() {  this.messageEvent.emit( ChildC.object ); }   

Child.html  
< button (click)="sendMessage()"> TEST < /button>

ParentC.ts  
receiveMessage(msg: any) {   
alert(msg);  }  

ParentC.html    
< app-child (messageEvent)="receiveMessage($event)">< \app-child>  

### ViewChild decorator  
[影片](https://youtu.be/AAu8bjj6-UI?t=1093)  

ChildC.ts  
message = 'message from child'  

Parent.ts   
import { ViewChild } from '@angular/core'  
import { ChildComponent } from '@../child/child.component'  
@ViewChild(ChildComponent) child;  

ngAfterViewInit() { alter(this.child.message);  }  


### Host selector  
[影片](https://youtu.be/AAu8bjj6-UI?t=1328)    

C.css  
& :host { } // 目前的組件   
& :host(.active) { } // 目前的組件,附加的class   
& :host-context(.theme-light) h2(元素) { } //目前的組件的元素內容,附加的class   

C.html  
< div class="theme-light"> < app-child class="active">< /app-child> < /div>  


### ng-content  
[影片](https://youtu.be/AAu8bjj6-UI?t=1478)  
佔位符  

ChildC.html  
< ng-content [question]>< /ng-content>  
< ng-content  [answer]>< /ng-content>  

ParentC.html 
< app-child>  
< p question> Is this a book?  < /p>  
< p answer> This is a pen. < /p>  
< /app-child>  


### pipe  
[影片](https://youtu.be/AAu8bjj6-UI?t=1891)  

$ ng g p test-pipe  

import { Pipe, PipeTransform } from '@angular/core';  

@Pipe({ name: 'testPipe' })  
export class TestPipe implements PipeTransfrom {  
  transform(value: string, ...args: unknown[]): string {   
  return `Hero ${value}`; }
} 


### attr class style biding  
[影片](https://youtu.be/AAu8bjj6-UI?t=2211)  

C.html  
<td [attr.colspan]="1+1"> TEST < /td>  
<div [class.sale]="onSale"> TEST < /div>  
<div [class]= "{ classOne: true, classTwo: false }">< /div>  
<div [class]="['classOne', 'classTwo']">< /div>  
<div [style.background-color]="'red'">< /div>  
<div [style]="'width: 200px; height:200px;'">< /div>  
<div [style]="{ width: '50px', height: '50px'}">< /div>    

C.ts  
onSale = true;  


### template variables #  
[影片](https://youtu.be/AAu8bjj6-UI?t=2719)  

C.html  
< input #phone placeholder="phone" />  
< button (click)="callPhone(phone.value)">< /button>  

C.ts  
callPhone(value: string) {  
console.log(value)  }  

========  

C.html  
< input #ref type="text" [(ngModel)]="firstExample" />  
< ng-template>  < span> {{ ref.value }} < /span>  
< /ng-template>  

C.ts  
firstExample='';  
  
#ref 不能放在 ng-template 裡面(ng-template 裡面有 ref)  


### ngClass  
[影片](https://youtu.be/AAu8bjj6-UI?t=3063)  

C.html  
< div [ngClass]="currentClasses"> TEST < div>  

C.ts  
currentClasses = {};  
ngOnInit() { this.setCurrentClasses();  }  
setCurrentClasses() {  
this.currentClasses = {  
saveable: true,  
modifiled: false,  
special: true}  
}  

========

C.html  
< div [ngStyle]="currentStyle"> TEST < div>  

C.ts  
currentStyle = {}  
ngOnInit() { this.setCurrentStyle();  }  
setCurrentStyle() {  
this.currentStyle = {  
'font-style': 'italic',  
'font-weight': 'bold'
}  
}


### ngModel  
[影片](https://youtu.be/AAu8bjj6-UI?t=3127)  

module.ts  
import { FormsModule } from '@angular/forms';  

@NgModule({ imports: [FormsModule, ]})

C.html  
< input [(ngModel)]="name" id="test"/>  

C.ts  
name = 'test'


### Directive @HostListener 
[影片](https://youtu.be/AAu8bjj6-UI?t=3205)  

module.ts  
@NgModule({ declarations: [ TestDirective, ]})  
export class AppModule { }   

C.html  
< p [test]="'red'"> for exmaple < /p>  

Directive.ts  
import { Directive, ElementRef, HostListener, Input } from '@angular/core';  

@Directive({ selector: '[test]'})
export class TestDirective {  
@Input() color;  
construct(el: ElementRef)  {  
el.nativeElement.style.backgroundColr = this.color  
}  

@HostListener('mouseenter') onMouserEnter() { this.highlight(this.color); }  
@HostListener('mouseleave') onMouserLeave() { this.highlight(''); }  
private highlight(color: string) {  
this.el.nativeElement.style.backgroudColor = color;  
}  
}

































