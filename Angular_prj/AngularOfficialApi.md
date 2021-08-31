
## index

i18n 國際化方案  

InjectionToken  



### i18n 國際化方案  

[介紹](https://segmentfault.com/a/1190000015311981)  
[Angular i18n 教學](https://jimmyswebnote.com/angular-i18n/)  



### InjectionToken  
[官方API](https://angular.io/api/core/InjectionToken)  

import { InjectionToken } from '@angular/core';  
export let ROUTES_CONFIG = new InjectionToken('這個檔案的名稱');  
const 物件名稱: 類型 = {}  

引用:  
import { RoutesConfig } from './configs/routes.config';  
ROUTES_CONFIG.物件名稱  





