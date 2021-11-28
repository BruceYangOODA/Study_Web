
[Angular Tutorial for Beginners - Web Framework with Typescript Course 2021-10-20](https://www.youtube.com/watch?v=AAu8bjj6-UI&ab_channel=freeCodeCamp.org)  



Output decorator  
ViewChild decorator  
Host selector  



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





