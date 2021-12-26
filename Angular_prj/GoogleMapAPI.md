

[Angular 7 Google Maps Tutorial with IPAPI (Plotting a User's Location)](https://www.youtube.com/watch?v=-IwTQgKIjCQ&ab_channel=DesignCourse)  

$ npm install @agm/core  
$ npm install @angular/google-maps  
$ npm install @types/google-maps  
$ npm install @types/googlemaps 
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


















