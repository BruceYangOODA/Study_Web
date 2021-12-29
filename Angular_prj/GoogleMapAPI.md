
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

$ npm install @agm/core  
$ npm install @angular/google-maps  
$ npm install @types/google-maps  
$ npm install @types/googlemaps --save  
npm i @types/googlemaps@3.39.13 --save-dev  
 
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









