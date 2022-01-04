[運用Google Map API(Distance Matrix Service)取得旅程時間及距離](https://icelandcheng.medium.com/%E9%81%8B%E7%94%A8google-map-api-distance-matrix-service-%E5%8F%96%E5%BE%97%E6%97%85%E7%A8%8B%E6%99%82%E9%96%93%E5%8F%8A%E8%B7%9D%E9%9B%A2-4e7c9b929e9e)  

[course google-maps-apis--ud864](https://www.udacity.com/course/google-maps-apis--ud864)

#### Components AgmMap  
#### Directives AgmMarker  
#### Directives AgmPolygon    
#### Directives AgmPolyline  
#### Directives AgmPolylineIcon  
#### Directives AgmPolylinePoint  
#### Directives AgmCircle  
#### Directives AgmRectangle  
### DirectionsService  
### DistanceMatrixService  
### geometry.poly.containsLocation  

[LazyMapsAPILoader](https://angular-maps.com/api-docs/agm-core/injectables/lazymapsapiloader#source)  





[Angular Google Maps with Places Search, Draggable Marker using Angular Google Maps (@agm/core)](https://www.freakyjolly.com/angular-google-maps-using-agm-core/#more-2316)  
$ ng new ProjectName --skip-tests  
$ npm install --legacy-peer-deps  
$ npm install @agm/core --save --legacy-peer-deps   
$ npm install @types/googlemaps --save-dev  

@tsconfig.app.json  
"compilerOptions": {  
    "types": ["googlemaps"]  
  }  

$ npm install @angular/google-maps@11.0.0 --save     

@package.json  
"dependencies": {
    "@agm/core": "^1.1.0", }  
$ npm i --save --legacy-peer-deps   

---  
module.ts  
import { AgmCoreModule } from '@agm/core';   
imports: [  
     AgmCoreModule.forRoot({  
      apiKey: 'YOUR-API-KEY-HERE',  
      libraries: ['places']  
    }),  
  ]  

---  
html  
<code>
<agm-map  
[latitude]="latitude" [longitude]="longitude" [zoom]="zoom">  
</agm-map>  
</code>

CSS  
agm-map { height: 300px; }  

---  
component.ts  

navigator.geolocation.getCurrentPosition((position) => {  
          this.latitude = position.coords.latitude;  
          this.longitude = position.coords.longitude;  
          this.zoom = 15;  
        });  

---  
---  
[JS FAIL]
[Adding Google Maps to an Angular PWA - Angular PWAs & Google Maps: Episode 1](https://www.youtube.com/watch?v=ZBLrwThHKyM)  

index.html  
  <script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>   


HTML  
<div class="app-page"><div #map id="mpa-canvas"></div></div>  






---  
---  


[Angular 7 Google Maps Tutorial with IPAPI (Plotting a User's Location)](https://www.youtube.com/watch?v=-IwTQgKIjCQ&ab_channel=DesignCourse)  

$ npm install @agm/core  --legacy-peer-deps  
$ npm install @angular/google-maps  --legacy-peer-deps  
$ npm install @types/google-maps --legacy-peer-deps  
$ npm install @types/googlemaps --save --legacy-peer-deps   
npm i @types/googlemaps@3.39.13 --save-dev --legacy-peer-deps   
npm i @agm/core@1.1.0 --legacy-peer-deps  

@googlemaps/index.d.ts  
declare module 'googlemaps';  

---  
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';   
import { AgmCoreModule } from '@agm/core';  
import { GoogleMapsModule } from '@angular/google-maps'  

 imports: [  
    BrowserModule,  
    HttpClientJsonpModule,   
    HttpClientModule,  
    AgmCoreModule.forRoot({  
      apiKey: 'YOUR_KEY'  
    }),  
    GoogleMapsModule,  
  ],  

---  

---  
component.ts  

 lat: any;  
 lng: any;  
ngOnInit() {  
navigator.geolocation.getCurrentPosition(data => {
      console.log('data',data)  
this.lat = data.coords.latitude;  
      this.lng = data.coords.longitude;  
    }) 
  }  

---  
HTML  
<agm-map [latitude]="lat" [longitude]="lng">  
<agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>  
</agm-map>  

---  
CSS  
agm-map {  height: 300px; }  



---  
[Adding Google Maps to an Angular PWA - Angular PWAs & Google Maps: Episode 1](https://youtu.be/ZBLrwThHKyM)  
[Displaying Route Polylines on a Google Map - Angular PWAs & Google Maps: Episode 2](https://www.youtube.com/watch?v=5UrKo-j2fzc&ab_channel=RomanJustCodes)  

---  
component.ts  

center: google.maps.LatLngLiteral;  
source: google.maps.LatLngLiteral;  
destination: google.maps.LatLngLiteral;  
options: google.maps.MapOptions = {  
mapTypeId: google.maps.MapTypeId.ROADMAP,  
scrollwheel: false,  
disableDefaultUI: true,  
disableDoubleClickZoom: true,  
zoom: 16  }  
directionsService: google.DirectionsService;  
directionsRenderer: google.DirectionsRenderer;    

ngOnInit() {  
this.directionsService = new google.maps.DirectionsService();  
this.directionsRenderer = new google.maps.DirectionsRenderer({  
map: null, suppressMarkers: true  });  

navigator.geolocation.getCurrentPosition(position => {  
this.source = { lat: 37.4220656, lng: -122.0840897 }  
this.d
})  

this.map = new google.maps.Map(document.get)
}  






---  
---  
#### Components AgmMap  
[Components AgmMap](https://angular-maps.com/api-docs/agm-core/components/agmmap#info)  

#### Inputs  
latitude = 0;  
longitude = 0;  
zoom = 8;  

backgroundColor: string;      
clickableIcons = true;  ICON可以點選  
controlSize: number;  
disableDefaultUI = false;  預設控制介面  
disableDoubleClickZoom = false;  預設雙擊重設zoom & center  
draggableCursor: string;  ex: [draggableCursor]="'url(http://www.example.com/icon.png), auto;'"  
draggingCursor: string;  ex: [draggableCursor]="'url(http://www.example.com/icon.png), auto;'"  
fitBounds: google.maps.LatLngBoundsLiteral | google.maps.LatLngBounds | boolean = false;  
fitBoundsPadding: number | google.maps.Padding;  
gestureHandling: google.maps.GestureHandlingOptions = 'auto';  
keyboardShortcuts = true;  
@Input('mapDraggable') draggable = true;  
mapTypeId: keyof typeof google.maps.MapTypeId = 'ROADMAP';  
maxZoom: number;  
restriction: google.maps.MapRestriction;  鎖定地圖範圍  
scrollwheel = true;  滾輪控制zoom  
showDefaultInfoWindow = true;  
styles: google.maps.MapTypeStyle[] = [];  附加CSS  
tilt = 0;  
usePanning = false;  

#### 需要設定的inputs  
latitude = 0;  
longitude = 0;  
zoom = 8;  
disableDefaultUI = true,  
disableDoubleClickZoom = true,  
maxZoom: 14;  
minZoom: 14;  
scrollwheel = false;  

#### Outputs  
boundsChange: EventEmitter<google.maps.LatLngBounds> = new EventEmitter<google.maps.LatLngBounds>();  
centerChange: EventEmitter<google.maps.LatLngLiteral> = new EventEmitter<google.maps.LatLngLiteral>();  
idle: EventEmitter<void> = new EventEmitter<void>();   This event is fired when the map becomes idle after panning or zooming.   
mapClick: EventEmitter<google.maps.MouseEvent | google.maps.IconMouseEvent> = new EventEmitter<google.maps.MouseEvent | google.maps.IconMouseEvent>();    
mapDblClick: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
mapReady: EventEmitter<any> = new EventEmitter<any>();    
mapRightClick: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
mapTypeIdChange: EventEmitter<google.maps.MapTypeId> = new EventEmitter<google.maps.MapTypeId>();  
tilesLoaded: EventEmitter<void> = new EventEmitter<void>();  This event is fired when the visible tiles have finished loading.  
zoomChange: EventEmitter<number> = new EventEmitter<number>();  

#### Method   
toString(): string { return 'AgmMarker-' + this._id.toString(); }    

---  
---  


---  
---  
### Directives AgmMarker  
[Directives AgmMarker](https://angular-maps.com/api-docs/agm-core/directives/agmmarker)  

#### Properties   
@ContentChildren(AgmInfoWindow) infoWindow: QueryList<AgmInfoWindow> = new QueryList<AgmInfoWindow>();  

#### Inputs  
latitude: number;  
longitude: number;  

animation: keyof typeof google.maps.Animation;  
iconUrl: string | google.maps.Icon | google.maps.Symbol;  
label: string | google.maps.MarkerLabel;  
@Input('markerClickable') clickable = true;  
@Input('markerDraggable') draggable = false;  
opacity = 1;  
openInfoWindow = true;  
title: string;  
visible = true;  
zIndex = 1;

#### 需要設定的inputs  
latitude: 0,  
longitude: 0,  
iconUrl:  
label: ''   
title: ''  

#### Outputs  
animationChange = new EventEmitter<keyof typeof google.maps.Animation>();  
drag: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
dragEnd: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
dragStart: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
markerClick: EventEmitter<AgmMarker> = new EventEmitter<AgmMarker>();  
markerDblClick: EventEmitter<AgmMarker> = new EventEmitter<AgmMarker>();
markerRightClick: EventEmitter<void> = new EventEmitter<void>();  
mouseOut: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
mouseOver: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  

#### Method  

---  
---  
#### Directives AgmPolygon  
[Directives AgmPolygon](https://angular-maps.com/api-docs/agm-core/directives/agmpolygon)  

#### Properties  
#### Inputs  
clickable = true;  
editable = false;  
fillColor: string;  
fillOpacity: number;
@Input() paths: google.maps.LatLng[] | google.maps.LatLng[][] |
      google.maps.MVCArray<google.maps.LatLng> | google.maps.MVCArray<google.maps.MVCArray<google.maps.LatLng>> |
      google.maps.LatLngLiteral[] | google.maps.LatLngLiteral[][] = [];  
@Input('polyDraggable') draggable = false;  
strokeColor: string;  
strokeOpacity: number;  
strokeWeight: number;  
visible: boolean;
zIndex: number;  

#### 需要設定的inputs  
fillColor: string;  
fillOpacity: number;  
paths: 'fn'
strokeColor: string;  
strokeWeight: number;   

#### Outputs  
polyClick: EventEmitter<google.maps.PolyMouseEvent> = new EventEmitter<google.maps.PolyMouseEvent>();  
polyDblClick: EventEmitter<google.maps.PolyMouseEvent> = new EventEmitter<google.maps.PolyMouseEvent>();  
polyPathsChange = new EventEmitter<MVCEvent<google.maps.LatLng[] | google.maps.LatLngLiteral[]>>();  
drag: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
dragEnd: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
dragStart: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
mouseDown: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
mouseMove: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
mouseOut: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
mouseOver: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
mouseUp: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();
rightClick: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();

#### Method  
getPath(): Promise<google.maps.LatLng[]> {
    return this._polygonManager.getPath(this);
  }  

  getPaths(): Promise<google.maps.LatLng[][]> {
    return this._polygonManager.getPaths(this);
  }  

---  
---  
#### Directives AgmPolyline  
[Directives AgmPolyline](https://angular-maps.com/api-docs/agm-core/directives/agmpolyline#info)  


#### Properties  
@ContentChildren(AgmPolylinePoint) points: QueryList<AgmPolylinePoint>;  
@ContentChildren(AgmPolylineIcon) iconSequences: QueryList<AgmPolylineIcon>;  

#### Inputs  
clickable = true;  
editable = false; 線條中間出現控制點    
geodesic = false;  
@Input('polylineDraggable') draggable = false;  
strokeColor: string;  
strokeOpacity: number;  
strokeWeight: number;  
visible = true;  
zIndex: number;  

#### 需要設定的inputs  
strokeColor: 'red',  
strokeOpacity: 1,  
strokeWeight: 3px, 

#### Outputs  
lineClick: EventEmitter<google.maps.PolyMouseEvent> = new EventEmitter<google.maps.PolyMouseEvent>();  
lineDblClick: EventEmitter<google.maps.PolyMouseEvent> = new EventEmitter<google.maps.PolyMouseEvent>();  
polyPathChange = new EventEmitter<MVCEvent<google.maps.LatLng>>();  
lineDrag: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
lineDragEnd: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
lineDragStart: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
lineMouseDown: EventEmitter<google.maps.PolyMouseEvent> = new EventEmitter<google.maps.PolyMouseEvent>();  
lineMouseMove: EventEmitter<google.maps.PolyMouseEvent> = new EventEmitter<google.maps.PolyMouseEvent>();  
lineMouseOut: EventEmitter<google.maps.PolyMouseEvent> = new EventEmitter<google.maps.PolyMouseEvent>();  
lineMouseOver: EventEmitter<google.maps.PolyMouseEvent> = new EventEmitter<google.maps.PolyMouseEvent>();  
lineMouseUp: EventEmitter<google.maps.PolyMouseEvent> = new EventEmitter<google.maps.PolyMouseEvent>();  
lineRightClick: EventEmitter<google.maps.PolyMouseEvent> = new EventEmitter<google.maps.PolyMouseEvent>();  


#### Method  
getPath(): Promise<google.maps.LatLng[]> {
    return this._polylineManager.getPath(this);
  }  

---  
---   
#### Directives AgmPolylineIcon  
[Directives AgmPolylineIcon](https://angular-maps.com/api-docs/agm-core/directives/agmpolylineicon)  

#### Properties  
#### Inputs  
anchorX: number;  
anchorY: number;  
fillColor: string;  
fillOpacity: number;  
fixedRotation: boolean;  
fixedRotation: boolean;  
offset: string;  
path: keyof typeof google.maps.SymbolPath | string;  
repeat: string;  
strokeColor: string;  
strokeOpacity: number;  
strokeWeight: number;  

#### 需要設定的inputs  
path: keyof typeof google.maps.SymbolPath | string;    

#### Outputs  
#### Method  

---  
---  
#### Directives AgmPolylinePoint
[Directives AgmPolylinePoint](https://angular-maps.com/api-docs/agm-core/directives/agmpolylinepoint)  

#### Inputs  
latitude: 0,  
longitude: 0,  

#### Outputs    
positionChanged: EventEmitter<google.maps.LatLngLiteral> = new EventEmitter<google.maps.LatLngLiteral>();  



---  
---  
#### Directives AgmCircle  
[Directives AgmCircle](https://angular-maps.com/api-docs/agm-core/directives/agmcircle)  

#### Properties  

#### Inputs  
latitude: number;  
longitude: number;  

@Input('circleDraggable') draggable = false;  
clickable = true;  
editable = false;  
fillColor: string;  
fillOpacity: number;  
radius = 0;  The radius in meters on the Earth's surface.  
strokeColor: string;  
strokeOpacity: number;
strokeWeight = 0;  
visible = true;  
zIndex: number;  

#### 需要設定的inputs  
fillColor: 'red',  
fillOpacity: ,  
radius = 0,  
strokeColor: 'black',   
strokeWeight = 3,   

#### Outputs  
circleClick: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
circleDblClick: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
centerChange: EventEmitter<google.maps.LatLngLiteral> = new EventEmitter<google.maps.LatLngLiteral>();  
drag: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
dragEnd: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
dragStart: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
mouseDown: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
mouseMove: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
mouseOut: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
mouseOver: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
mouseUp: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();
rightClick: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();
radiusChange: EventEmitter<number> = new EventEmitter<number>();    

#### Method  
getBounds(): Promise<google.maps.LatLngBounds> { return this._manager.getBounds(this); }  
getCenter(): Promise<google.maps.LatLng> { return this._manager.getCenter(this); }  

---  
---  
#### Directives AgmRectangle  
[Directives AgmRectangle](https://angular-maps.com/api-docs/agm-core/directives/agmrectangle)  

#### Properties  
#### Inputs  
north: number;  
east: number;  
south: number;  
west: number;  
 
clickable = true;    
editable = false;  
fillColor: string;  
fillOpacity: number;  
@Input('rectangleDraggable') draggable = false;  
strokeColor: string;  
strokeOpacity: number;  
strokeWeight = 0;  
visible = true;  
zIndex: number;  

#### 需要設定的inputs  
north: number;  
east: number;  
south: number;  
west: number;  

#### Outputs  
rectangleClick: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
rectangleDblClick: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
boundsChange: EventEmitter<google.maps.LatLngBoundsLiteral> = new EventEmitter<
    google.maps.LatLngBoundsLiteral
  >();  
drag: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
dragEnd: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
dragStart: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
mouseDown: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
mouseMove: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
mouseOut: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
mouseOver: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();    
mouseUp: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  
rightClick: EventEmitter<google.maps.MouseEvent> = new EventEmitter<google.maps.MouseEvent>();  


#### Method  


---  
### DirectionsService  

let directionsService = new google.maps.DirectionsService();
        let request = {
            origins: [{ lat: 25.038935, lng: 121.5018988 }],
            destinations: [{ lat: 25.04081, lng: 121.506566 }],
            origin: { lat: 25.038935, lng: 121.5018988 },
            destination: { lat: 25.04081, lng: 121.506566 },
            travelMode: google.maps.TravelMode.BICYCLING,
        };
        directionsService.route(request, function (response) {
            if (response["status"] == "OK") {
                console.log(response);
            }
        });

---  
### DistanceMatrixService  

let service = new google.maps.DistanceMatrixService();
        let display = new google.maps.DirectionsRenderer();
        //display.setMap(this.map)
        service.getDistanceMatrix(
            {
                origins: [{ lat: 25.038935, lng: 121.5018988 }],
                destinations: [{ lat: 25.04081, lng: 121.506566 }],
                travelMode: google.maps.TravelMode.DRIVING,
                unitSystem: google.maps.UnitSystem.METRIC,
            },
            function (response, status) {
                if (status !== google.maps.DistanceMatrixStatus.OK) {
                    window.alert("Error was" + status);
                } else {
                    console.log(response);
                }
            }
        );

---  
### geometry.poly.containsLocation  

mapClick(e) {
        console.log("mapCLick ", e);
        let newMarker = {};
        newMarker["lat"] = e.coords.lat;
        newMarker["lng"] = e.coords.lng;
        this.markers.push(newMarker);
        console.log("HERE");
        let startShape = new google.maps.Polygon({ paths: this.polyPath });
        let curPosition = new google.maps.LatLng(e.coords.lat, e.coords.lng);
        let locationContains = google.maps.geometry.poly.containsLocation(curPosition, startShape);
        console.log("locationContains ", locationContains);
    }
---  
---  
#### Properties  
#### Inputs  
#### 需要設定的inputs  
#### Outputs  
#### Method  
