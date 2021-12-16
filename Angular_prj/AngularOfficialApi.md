
## index

AGM (Angular Google Map)  
i18n 國際化方案  
ngx-translate  
Flex-Layout  
InjectionToken  




### AGM (Angular Google Map)  
[官方 API](https://angular-maps.com/)  
[Angular4 - 不再踢鐵板的 Google Map 操作（AGM）](https://dotblogs.com.tw/explooosion/2017/07/17/212602)  

$ npm install @agm/core --save  

======  
module.ts  

import { AgmCoreModule } from '@agm/core';  
<code>
@NgModule({  
  imports: [   
    AgmCoreModule.forRoot({  
      apiKey: 'YOUR_KEY',  
      language: 'zh-TW'  
    })  
  ],  
})</code>  

======  
component.ts  

title: string = 'Angular4 AGM Demo';  
lat: number = 24.1504536;  
lng: number = 120.68325279999999;  
zoomValue: number = 15;   

// agm-info-window  
isOpen:boolean = false;  

// agm-marker  
markerClick(e) { this.isOpen = true; e.open(); }  

// agm-circle  
radius: number = 500;  
fillColor: string = 'rgba(194,60,172,1)';  

======  
HTML  
<agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoomValue">  
<agm-data-layer [geoJson]="geoJson"></agm-data-layer>  
<agm-circle [latitude]="lat" [longitude]="lng" [radius]="radius" [fillColor]="fillColor"></agm-circle>  
<agm-marker [latitude]="lat" [longitude]="lng" [iconUrl]="iconUrl" (markerClick)="markerClick(theWindow)"></agm-marker>  紅色旗標  
<agm-info-window #theWindow [latitude]="lat+0.0005" [longitude]="lng" [isOpen]="isOpen">  
    <h5>國立臺中科技大學</h5>
    <p>National Taichung University of Science and Technology.</p>
  </agm-info-window>  點選旗標後出現的訊息  
</agm-map>  

======  
CSS  
agm-map { height: 80vh; }  

======  ======  =======  
agm-data-layer   

$ npm install -g mapshaper
$ mapshaper county.shp -o encoding=big5 format=geojson  county.json

如果我們想要介接圖資，可利用 agm-data-layer，讀取圖資。  
為了測試使用，我們可以利用 OpenData 中的 直轄市、縣市界線(TWD97經緯度)，  
由於提供的檔案是 Shp（shapefile），我們要轉成 JSON 格式才可讀取  

------  
module.ts  

import { HttpModule, JsonpModule } from '@angular/http';  
  imports: [  
    HttpModule,  
    JsonpModule,  ], }  


------  
HTML  
<agm-data-layer *ngIf="geoJsonReady" [geoJson]="geoJson" [style]="style"></agm-data-layer>  

------  
component.ts  

getJson:any;  
geoJsonReady:boolean=true;  


ngOnInit() {  
this.service.getGeoJsonLayer()  
.subscribe( res =>  
this.geoJson = res;  
this.getJsonReady=true;  
)}    

style() { return {  
fillColor:'green',  
strokeColor:'green',  
}}  

======  動態產生方式，較為彈性  ======  
<agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoomValue" (mapReady)="onReady($event)">  

map: any = null;  

onReady(map) { this.map = map;  }    

ngOnInit() {  
    console.log('Start: ' + new Date());  
    this.layerService.getGeoJsonLayer()  
      .subscribe(  
      result => {  
        this.geoJson = result;  
        this.map.data.addGeoJson(this.geoJson);  
        this.map.data.setStyle(feature => this.style());  
      });  
  }  

======  ======  ======  



### i18n 國際化方案  

[官方 API](https://angular.io/guide/i18n)  
[介紹](https://segmentfault.com/a/1190000015311981)  
[Angular i18n 教學](https://jimmyswebnote.com/angular-i18n/)  

-- $ ng extract-i18n --output-path src/locale  
-- $ ng xi18n
-- $ ng add @angular/localize  


### ngx-translate  

[Youtube Angular Internationalization i18n - Using ngx-translate](https://www.youtube.com/watch?v=jCvsy4XSOEQ&ab_channel=Genka)  
[Multilingual angular 8 apps with ngx-translate](https://www.youtube.com/watch?v=KCC5-PKBg4M&t=577s&ab_channel=BlackBoxTech)  
[TranslateModule.forRoot should not be put in SharedModule](https://github.com/ngx-translate/core/issues/209)   


$ npm install @ngx-translate/core  
$ npm install @ngx-translate/http-loader  


@ shared.module.ts  
import { HttpClientModule, HttpClient } from '@angular/common/http';  
import { TranslateModule } from '@ngx-translate/core';  
import { TranslateHttpLoader } from '@ngx-translate/http-loader';  

export function HttpLoaderFactory(http: HttpClient) {  
  return new TranslateHttpLoader(http, '../../assets/i18n/', '.json')  
}  

imports: [  
    TranslateModule.forRoot({  
      defaultLanguage: 'cn',  
      loader: {  
        provide: TranslateLoader,  
        useFactory: HttpLoaderFactory,  
        deps: [HttpClient]  
      }  
    })  
  ]  

@ component.ts  
import { TranslateService } from '@ngx-translate/core';  
constructor(private translateService: TranslateService) { }  

public selectLanguage(event: any) {  
    this.translateService.use(event.target.value)  
  }  

@ component.html  
< select (change)="selectLanguage($event)">  
< option value="cn"> 中文 < /option>  
< option value="en"> English < /option>  
< /select>  
  
@ assest/i18/cn.json  
{  
    "choose_language": "選擇語言",  
    "language.english": "英文",  
    "language.chinese": "中文",  
    "title": "國際化",  
    "welcome": "歡迎"  
}  


### Flex-Layout  

[介紹](https://blog.poychang.net/use-angular-flex-layout-package/)  

$ npm install @angular/flex-layout  

import {FlexLayoutModule} from '@angular/flex-layout';  
 @NgModule({  
   imports: [FlexLayoutModule],  
   ...  
 })  



### InjectionToken  
[官方API](https://angular.io/api/core/InjectionToken)  

import { InjectionToken } from '@angular/core';  
export let ROUTES_CONFIG = new InjectionToken('這個檔案的名稱');  
const 物件名稱: 類型 = {}  

引用:  
import { RoutesConfig } from './configs/routes.config';  
ROUTES_CONFIG.物件名稱  


