

[cesium-angular-example](https://github.com/Developer-Plexscape/cesium-angular-example)  
[Cesium and Angular](https://cesium.com/blog/2018/03/12/cesium-and-angular/)  
[Angular-Cesium API](https://articodeltd.github.io/angular-cesium/)  
[** cesiumjs API](https://cesium.com/learn/cesiumjs/ref-doc/)  
[Cesium.js tutorial: My tips how to start learn cesium](https://www.youtube.com/watch?v=TQxTBNFrDvQ&list=PLzxF7WV4IZssEyDEhK5KtA1Pn7X-pmUuf&index=1)  
[[3D地圖－CesiumJS系列]](https://ithelp.ithome.com.tw/users/20130604/ironman/3749)    
[* CesiumJS Quickstart](https://cesium.com/learn/cesiumjs-learn/cesiumjs-quickstart/)  
[*** CesiumJS中文基础教程](https://github.com/hujiulin/CesiumJS-tutorial)  
[* Cesium中文网社区](http://cesiumcn.org/)  

===============================
*** DOC  
[class Viewer](https://cesium.com/learn/cesiumjs/ref-doc/Viewer.html)  


===============================

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
 Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1ZDdmZWViMS0xZDVjLTRhYTUtYWI4Yy0yOGFkZmI4YjNmZGIiLCJpZCI6NTI3ODIsImlhdCI6MTYyMjU1NTY4M30.2Qry6HDCock7YrMi8GQaStykhvfbCfuJ-TDs7IRglmY';  
   this.viewer = new Viewer(this.el.nativeElement,{  
   terrainProvider: Cesium.createWorldTerrain(),  //使用預設地貌資料  
   });  
 };  
 const buildingTileset = this.viewer.scene.primitives.add(Cesium.createOsmBuildings());  // 使用 OSM 建築物資料  
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
  dataPoint= { longitude: 121, latitude:23.5 }     
    this.viewer.entities.add({  
    description: `這個點位於 (${dataPoint.longitude}, ${dataPoint.latitude})`,  
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

=====================================================   '
class Viewer  
Cesium.Viewer.ConstructorOptions  
| name | type | default | Description | DOC | 
| :---- | :---- | :----: | :--- | :--- |   
| animation | Boolean | true | 	If set to false, the Animation widget will not be created. |   |  
| baseLayerPicker | Boolean | true | If set to false, the BaseLayerPicker widget will not be created. |   |  
| fullscreenButton | Boolean | true | If set to false, the FullscreenButton widget will not be created. |   |  
| vrButton | Boolean | false | If set to true, the VRButton widget will be created. |   |  
| geocoder | Boolean | Array.<GeocoderService> | true | If set to false, the Geocoder widget will not be created. |   |  
| homeButton | Boolean | true | If set to false, the HomeButton widget will not be created. |   |  
| infoBox | Boolean | true | If set to false, the InfoBox widget will not be created. |   |  
| sceneModePicker | Boolean | true | If set to false, the SceneModePicker widget will not be created. |   |  
| selectionIndicator | Boolean | true | If set to false, the SelectionIndicator widget will not be created. |   |  
| timeline | Boolean | true | If set to false, the Timeline widget will not be created. |   |  
| navigationHelpButton | Boolean | true | If set to false, the navigation help button will not be created. |   |  
| scene3DOnly | Boolean | false | When true, each geometry instance will only be rendered in 3D to save GPU memory. |   |  
| shouldAnimate | Boolean | false | true if the clock should attempt to advance simulation time by default, false otherwise. |   |  
| clockViewModel | ClockViewModel | new ClockViewModel(clock) | The clock view model to use to control current time | [ClockViewModel](https://cesium.com/learn/cesiumjs/ref-doc/ClockViewModel.html)  |  
| selectedImageryProviderViewModel | ProviderViewModel |  | The view model for the current base imagery layer, if not supplied the first available base layer is used. | [ProviderViewModel](https://cesium.com/learn/cesiumjs/ref-doc/ProviderViewModel.html)  |  
| selectedTerrainProviderViewModel | ProviderViewModel |  | The view model for the current base terrain layer |   |  
| imageryProvider | ImageryProvider | createWorldImagery() | 	The imagery provider to use. | [imageryProvider](https://cesium.com/learn/cesiumjs/ref-doc/ImageryProvider.html)  |  
| terrainProvider | TerrainProvider | new EllipsoidTerrainProvider() | The terrain provider to use |  [TerrainProvider](https://cesium.com/learn/cesiumjs/ref-doc/TerrainProvider.html) |  
| skyBox | SkyBox or false |  | The skybox used to render the stars. If set to false, no skyBox, Sun, or Moon will be added. | [SkyBox](https://cesium.com/learn/cesiumjs/ref-doc/SkyBox.html) |  
| skyAtmosphere | SkyAtmosphere or false |  | Blue sky, and the glow around the Earth's limb. Set to false to turn it off. |  [SkyAtmosphere](https://cesium.com/learn/cesiumjs/ref-doc/SkyAtmosphere.html) |  
| useDefaultRenderLoop | Boolean | true | True if this widget should control the render loop, false otherwise. |   |  
| targetFrameRate | Number |  | The target frame rate when using the default render loop. |   |  
| showRenderLoopErrors | Boolean | true | If true, this widget will automatically display an HTML panel to the user containing the error, if a render loop error occurs. |   |  
| automaticallyTrackDataSourceClocks | Boolean | true | If true, this widget will automatically track the clock settings of newly added DataSources, updating if the DataSource's clock changes. Set this to false if you want to configure the clock independently. |   |  
| sceneMode | SceneMode | SceneMode.SCENE3D | 2D 2.5D 3D | [SceneMode](https://cesium.com/learn/cesiumjs/ref-doc/global.html#SceneMode) |  
| mapProjection | MapProjection | new GeographicProjection() | The map projection to use in 2D and Columbus View modes. | [MapProjection](https://cesium.com/learn/cesiumjs/ref-doc/MapProjection.html) |  
| globe | Globe or false | new Globe(mapProjection.ellipsoid) | The globe to use in the scene. If set to false, no globe will be added | [Globe](https://cesium.com/learn/cesiumjs/ref-doc/Globe.html) |  
|  |  |  |  |   |  
|  |  |  |  |   |  
|  |  |  |  |   |  
|  |  |  |  |   |  
|  |  |  |  |   |  
|  |  |  |  |   |  
|  |  |  |  |   |  
|  |  |  |  |   |  
|  |  |  |  |   |  
|  |  |  |  |   |  

