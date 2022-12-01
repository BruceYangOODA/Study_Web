

[cesium-angular-example](https://github.com/Developer-Plexscape/cesium-angular-example)  
[Cesium and Angular](https://cesium.com/blog/2018/03/12/cesium-and-angular/)  
[Angular-Cesium API](https://articodeltd.github.io/angular-cesium/)  
[Cesium.js tutorial: My tips how to start learn cesium](https://www.youtube.com/watch?v=TQxTBNFrDvQ&list=PLzxF7WV4IZssEyDEhK5KtA1Pn7X-pmUuf&index=1)  
[[3D地圖－CesiumJS系列]](https://ithelp.ithome.com.tw/users/20130604/ironman/3749)    


相較於ArcGIS，Cesium具有較輕量的優勢，所需記憶體空間較少，速度較快，並支援WebGL，在行動裝置上不需安裝外掛應用程式。    

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











