
## index

i18n 國際化方案  
Flex-Layout  
InjectionToken  



### i18n 國際化方案  

[官方 API](https://angular.io/guide/i18n)  
[Youtube Angular Internationalization i18n - Using ngx-translate](https://www.youtube.com/watch?v=jCvsy4XSOEQ&ab_channel=Genka)  
[Multilingual angular 8 apps with ngx-translate](https://www.youtube.com/watch?v=KCC5-PKBg4M&t=577s&ab_channel=BlackBoxTech)  
[介紹](https://segmentfault.com/a/1190000015311981)  
[Angular i18n 教學](https://jimmyswebnote.com/angular-i18n/)  


$ npm install @ngx-translate/core  
$ npm install @ngx-translate/http-loader  
-- $ ng extract-i18n --output-path src/locale  
-- $ ng xi18n
-- $ ng add @angular/localize  

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





