
[Angular Tutorial for Beginners - Web Framework with Typescript Course 2021-10-20](https://www.youtube.com/watch?v=AAu8bjj6-UI&ab_channel=freeCodeCamp.org)  



Output decorator  
ViewChild decorator  
Host selector  
ng-content  
pipe  
attr class style biding  





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


