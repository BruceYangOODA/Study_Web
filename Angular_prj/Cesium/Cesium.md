

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


====================================================  
地圖作畫
[[3D地圖－CesiumJS系列]　一、快速上手](https://ithelp.ithome.com.tw/articles/10252460)  

點  
    this.viewer.entities.add({  
      position: Cesium.Cartesian3.fromDegrees(121, 23.5),  
      point: {  
        pixelSize: 10,  
        color: Cesium.Color.YELLOW,  
      },  
    });  

線  
let line = this.viewer.entities.add({  
      name: "line",  
      polyline: {  
        positions: Cesium.Cartesian3.fromDegreesArray([121.523333, 25.15, 120.3508, 23]),  
        width: 5,  // 線寬度  
        material: Cesium.Color.RED,　　// 紅色  
        clampToGround: true,  // 虛線  
      },  
    });  

高度線  
    let lineHeight = this.viewer.entities.add({  
      name: "lineHeight",  
      polyline: {  
        positions: Cesium.Cartesian3.fromDegreesArrayHeights([121.523333, 25.15, 3000, 120.3508, 23, 12000]),  
        width: 5,  // 線寬度  
        material: new Cesium.PolylineOutlineMaterialProperty({  
          color: Cesium.Color.ORANGE,  // 橘色  
          outlineWidth: 2,  // 線外框寬度  
          outlineColor: Cesium.Color.BLACK,  // 線外框顏色  
        }),  
      },  
    });  

面  
    let polygon = this.viewer.entities.add({  
      name: "polygon",  
      polygon: {  
        hierarchy: Cesium.Cartesian3.fromDegreesArray([  
          120.6, 22.8,  
          120.7, 22.6,  
          120.5, 22.5,  
        ]),  
        material: Cesium.Color.RED,  
      },  
    });  

3D  
    let polygon3D = this.viewer.entities.add({  
      name: "polygon3D",  
      polygon: {  
        hierarchy: Cesium.Cartesian3.fromDegreesArray([  
          121, 23.5,  
          121.5, 23.5,  
          121.2, 23,  
        ]),  
        extrudedHeight: 5000,  // 拉伸高度(m)  
        material: Cesium.Color.GREEN,  // 綠色  
        closeTop: false,  // 頂部是否密合  
        closeBottom: false,  // 底部是否密合  
      },  
    });  






