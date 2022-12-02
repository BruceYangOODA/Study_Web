

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
class [Viewer](https://cesium.com/learn/cesiumjs/ref-doc/Camera.html)  
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
  
class [Viewer](https://cesium.com/learn/cesiumjs/ref-doc/Camera.html)  
Cesium.Viewer.Member  
| name | type | default | Description | DOC | 
| :---- | :---- | :----: | :--- | :--- |   
| animation  | Animation | new Cesium.Animation(container, viewModel) | The Animation widget provides buttons for play, pause, and reverse, along with the current time and date, surrounded by a "shuttle ring" for controlling the speed of animation. | [Animation](https://cesium.com/learn/cesiumjs/ref-doc/Animation.html)  |  
| baseLayerPicker | BaseLayerPicker | new Cesium.BaseLayerPicker(container, options)widgets/Sour | The BaseLayerPicker is a single button widget that displays a panel of available imagery and terrain providers. | [baseLayerPicker](https://cesium.com/learn/cesiumjs/ref-doc/BaseLayerPicker.html)  |  
| bottomContainer | Element |  | Gets the DOM element for the area at the bottom of the window containing the CreditDisplay and potentially other things. |   |  
| camera | Camera | new Cesium.Camera(scene) | The camera is defined by a position, orientation, and view frustum. | [Camera](https://cesium.com/learn/cesiumjs/ref-doc/Camera.html)  |  
| canvas  | HTMLCanvasElement |  |  |   |  
| cesiumWidget | CesiumWidget |  | A widget containing a Cesium scene | [CesiumWidget](https://cesium.com/learn/cesiumjs/ref-doc/CesiumWidget.html)  |  
| clock | Clock |  | A simple clock for keeping track of simulated time. | [Clock](https://cesium.com/learn/cesiumjs/ref-doc/Clock.html)  |  
| clockTrackedDataSource | DataSource |  | Defines the interface for data sources, which turn arbitrary data into a EntityCollection for generic consumption. | [DataSource](https://cesium.com/learn/cesiumjs/ref-doc/DataSource.html)  |  
| clockViewModel | ClockViewModel |  |  | [ClockViewModel](https://cesium.com/learn/cesiumjs/ref-doc/ClockViewModel.html)  |  
| container | Element |  | Gets the parent container. |   |  
| dataSourceDisplay | DataSourceDisplay |  | Visualizes a collection of DataSource instances. | [DataSourceDisplay](https://cesium.com/learn/cesiumjs/ref-doc/DataSourceDisplay.html)  |  
| dataSources | DataSourceCollection |  | A collection of DataSource instances | [DataSourceCollection](https://cesium.com/learn/cesiumjs/ref-doc/DataSourceCollection.html)  |  
| entities | EntityCollection |  | An observable collection of Entity instances where each entity has a unique id. | [EntityCollection](https://cesium.com/learn/cesiumjs/ref-doc/EntityCollection.html)  |  
| geocoder | Geocoder |  | A widget for finding addresses and landmarks, and flying the camera to them. Geocoding is performed using Cesium ion. | [Geocoder](https://cesium.com/learn/cesiumjs/ref-doc/Geocoder.html)  |  
| imageryLayers | ImageryLayerCollection |  | An ordered collection of imagery layers. | [ImageryLayerCollection](https://cesium.com/learn/cesiumjs/ref-doc/ImageryLayerCollection.html)  |  
| infoBox | InfoBox |  | A widget for displaying information or a description. | [InfoBox](https://cesium.com/learn/cesiumjs/ref-doc/InfoBox.html) |  
| resolutionScale | Number | 1.0 |  | Gets or sets a scaling factor for rendering resolution. Values less than 1.0 can improve performance on less powerful devices while values greater than 1.0 will render at a higher resolution and then scale down, resulting in improved visual fidelity. For example, if the widget is laid out at a size of 640x480, setting this value to 0.5 will cause the scene to be rendered at 320x240 and then scaled up while setting it to 2.0 will cause the scene to be rendered at 1280x960 and then scaled down.  |  
| scene | Scene |  | The container for all 3D graphical objects and state in a Cesium virtual scene. Generally, a scene is not created directly; instead, it is implicitly created by CesiumWidget. | [Scene](https://cesium.com/learn/cesiumjs/ref-doc/Scene.html)  |  
| sceneModePicker | SceneModePicker |  | The SceneModePicker is a single button widget for switching between scene modes; shown to the left in its expanded state. | [SceneModePicker](https://cesium.com/learn/cesiumjs/ref-doc/SceneModePicker.html) |  
| screenSpaceEventHandler | ScreenSpaceEventHandlerwidgets/Source |  | Handles user input events. Custom functions can be added to be executed on when the user enters input. | [ScreenSpaceEventHandlerwidgets/Source](https://cesium.com/learn/cesiumjs/ref-doc/ScreenSpaceEventHandler.html)  |  
| selectedEntity | Entity or undefined |  | Gets or sets the object instance for which to display a selection indicator. If a user interactively picks a Cesium3DTilesFeature instance, then this property will contain a transient Entity instance with a property named "feature" that is the instance that was picked. | [Entity](https://cesium.com/learn/cesiumjs/ref-doc/Entity.html)  |  
| selectedEntityChanged | Event |  | A generic utility class for managing subscribers for a particular event. | [Event](https://cesium.com/learn/cesiumjs/ref-doc/Event.html)  |  
| selectionIndicator | SelectionIndicator |  | A widget for displaying an indicator on a selected object. | [SelectionIndicator](https://cesium.com/learn/cesiumjs/ref-doc/SelectionIndicator.html)  |  
| shadows |  |  | Determines if shadows are cast by light sources. |   |  
| targetFrameRate |  |  | Gets or sets the target frame rate of the widget when useDefaultRenderLoop is true. |   |  
| terrainProvider | TerrainProvider |  | The terrain provider providing surface geometry for the globe. | [TerrainProvider](https://cesium.com/learn/cesiumjs/ref-doc/TerrainProvider.html)  |  
| timeline |  |  | The Timeline is a widget for displaying and controlling the current scene time. | [Timeline](https://cesium.com/learn/cesiumjs/ref-doc/Timeline.html)  |  
| trackedEntity | Entity or undefined |  | Gets or sets the Entity instance currently being tracked by the camera |  [Entity](https://cesium.com/learn/cesiumjs/ref-doc/Entity.html) |  
| trackedEntityChanged |  |  | Gets the event that is raised when the tracked entity changes. | [Event](https://cesium.com/learn/cesiumjs/ref-doc/Event.html)   |  
| useBrowserRecommendedResolution | Boolean | true |  |   |  
| useDefaultRenderLoop  | Boolean |  | Gets or sets whether or not this widget should control the render loop. If true the widget will use requestAnimationFrame to perform rendering and resizing of the widget, as well as drive the simulation clock. If set to false, you must manually call the resize, render methods as part of a custom render loop. If an error occurs during rendering, Scene's renderError event will be raised and this property will be set to false. It must be set back to true to continue rendering after the error. |   |  
|  |  |  |  |   |  
|  |  |  |  |   |  
|  |  |  |  |   |  
    
class [Camera](https://cesium.com/learn/cesiumjs/ref-doc/Camera.html)  
Cesium.Camera.flyTo  
| name | type | default | Description | DOC | 
| :---- | :---- | :----: | :--- | :--- |   
| destination | Cartesian3 or Rectangle |  | 	The final position of the camera in WGS84 (world) coordinates or a rectangle that would be visible from a top-down view. |   |  
| orientation | Object |  | An object that contains either direction and up properties or heading, pitch and roll properties. By default, the direction will point towards the center of the frame in 3D and in the negative z direction in Columbus view. |   |  
| duration | Number |  | The duration of the flight in seconds. |   |  
| complete | Camera.FlightCompleteCallback |  | The function to execute when the flight is complete |   |  
| cancel | Camera.FlightCancelledCallback |  | The function to execute if the flight is cancelled. |   |  
| endTransform | Matrix4 |  | Transform matrix representing the reference frame the camera will be in when the flight is completed. |  [Matrix4](https://cesium.com/learn/cesiumjs/ref-doc/Matrix4.html) |  
| maximumHeight | Number |  |  | The maximum height at the peak of the flight.  |  
| pitchAdjustHeight | Number |  | If camera flyes higher than that value, adjust pitch duiring the flight to look down, and keep Earth in viewport. |   |  
| flyOverLongitude | Number |  | There are always two ways between 2 points on globe. This option force camera to choose fight direction to fly over that longitude. |   |  
| flyOverLongitudeWeight | Number |  | Fly over the lon specifyed via flyOverLongitude only if that way is not longer than short way times flyOverLongitudeWeight. |   |  
| convert | Boolean | true |  |   |  
| easingFunction | EasingFunction.Callback |  | Controls how the time is interpolated over the duration of the flight | [EasingFunction.Callback](https://cesium.com/learn/cesiumjs/ref-doc/EasingFunction.html#.Callback)  |  

  
