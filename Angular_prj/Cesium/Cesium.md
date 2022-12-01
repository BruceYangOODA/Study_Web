

[cesium-angular-example](https://github.com/Developer-Plexscape/cesium-angular-example)  
[Cesium and Angular](https://cesium.com/blog/2018/03/12/cesium-and-angular/)  
[[3D地圖－CesiumJS系列]](https://ithelp.ithome.com.tw/users/20130604/ironman/3749)    




$ npm install -g @angular/cli  
$ ng new my-app  
$ ng serve  
$ npm install --save cesium  

Open angular.json  
"scripts": ["../node_modules/cesium/Build/Cesium/Cesium.js"]  

==================================================  
app.component.ts  

import { Component } from '@angular/core';  
@Component({  
  selector: 'app-root',  
  template: '<div appCesium></div>'  
})  
export class AppComponent {}  

===================================================  
cesium.directive.ts  

$ ng generate directive cesium  

import { Directive, OnInit } from '@angular/core';  

@Directive({  
 selector: '[appCesium]'  
})  
export class CesiumDirective implements OnInit {  

 constructor(private el: ElementRef) { }  

 ngOnInit() {  
   const viewer = new Viewer(this.el.nativeElement);  
 }  
}  

====================================================  
styles.css  

html, body, div[appCesium] {  
  width: 100%; height: 100%; margin: 0; padding: 0; overflow: hidden;  
}  

====================================================  
main.ts  

window['CESIUM_BASE_URL'] = '/assets/cesium/';    
(window as Record<string, any>)['CESIUM_BASE_URL'] = '/assets/cesium/';   











