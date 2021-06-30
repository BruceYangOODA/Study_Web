
## [Youtube Learn Angular Material - Full Tutorial](https://www.youtube.com/watch?v=jUfEn032IL8&ab_channel=freeCodeCamp.org)  
## [Youtube Angular Material Tutorial](https://www.youtube.com/watch?v=bV8emCBmFHk&list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&ab_channel=Codevolution)  
## [Angular Material Doc](https://material.angular.io/)  






[index]
install
MaterailModule  
mat-typography  字型大小  
mat-button   
mat-button-toggle    
mat-icon    
mat-badge  




### install  

[影片](https://youtu.be/WzVeomoAFUU?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&t=154)  

$ ng add @angular/material  


### MaterailModule  

[Material Module](https://youtu.be/4ZugNBFA2mA?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&t=49)  

$ ng g m material  

@material.module.ts  

import { MatButtonModule } from '@angular/material/button';  

const MaterailComponents = [  
&nbsp; MatButtonModule,  
];  

@NgModule({  
&nbsp; imports:[ MaterailComponents ],  
&nbsp; exports:[ MaterailComponents ]  
})  

@app.module.ts  

import { MaterialModule } from './material/material.module';  
imports: [ MaterialModule, ]  


### mat-typography 字型大小  

[影片 Typography](https://youtu.be/E_ztRpqs_Vs?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&t=121)  

< div class="mat-display-4"> XXX < /div>  
< div class="mat-display-3"> XXX < /div>  
< div class="mat-display-2"> XXX < /div>  
< div class="mat-display-1"> XXX < /div>  

< div class="mat-headline">等同 h1< /div>  
< div class="mat-title">等同 h2< /div>  
< div class="mat-subheading-2">等同 h3< /div>  
< div class="mat-subheading-1">等同 h4< /div>  

< div class="mat-body-1"> XXX < /div>  
< div class="mat-body-2">粗體字< /div>  
< div class="mat-caption">副標說明< /div>  


### mat-button  

[影片 Button](https://youtu.be/N_KxVoq2HyM?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&t=83)  
[官方 API](https://material.angular.io/components/button/overview)  

< button mat-button> XXX < /button>  
< button mat-raised-button> XXX < /button>  陰影按鈕  
< button mat-flat-button> XXX < /button>  無外框按鈕  
< button mat-stroke-button> XXX < /button>  外框按鈕  

< button mat-icon-button> XXX < /button>  無外框圓形按鈕  
< button mat-fab> XXX < /button>  外框圓形按鈕  
< button mat-mini-fav> XXX < /button>  字切邊圓形按鈕  

< button color="primary" mat-button> XXX < /button>  帶顏色按鈕  藍  
< button color="accent" mat-button> XXX < /button>  帶顏色按鈕  紅  
< button color="warn" mat-button> XXX < /button>  帶顏色按鈕  橘黃    

< button color="primary" mat-button disableRipple> XXX < /button>  移除按鈕特效    


### mat-button-toggle  

[影片 Button Toggle](https://youtu.be/cRvqC9hPbLI?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&t=71)
[官方 API](https://material.angular.io/components/button-toggle/api)  

import { MatButtonToggleModule } from '@angular/material/button-toggle';  
const MaterailComponents = [ MatButtonToggleModule, ];  

< mat-button-toggle #toggleBtn> XXX < /mat-button-toggle>  
< mat-button-toggle #toggleBtn2 checked> XXX < /mat-button-toggle>  
{{ toggleBtn.checked }} -> false   
{{ toggleBtn.checked }} -> true  

< mat-button-toggle-group #toggleGroup="matButtonToggleGroup">  
&nbsp; < mat-button-toggle value="AAA"> AAA < /mat-button-toggle>  
&nbsp; < mat-button-toggle value="BBB"> BBB < /mat-button-toggle>  
&nbsp; < mat-button-toggle value="CCC"> CCC < /mat-button-toggle>  
< /mat-button-toggle-group>  
{{ toggleGroup.value }} -> AAA or BBB or CCC  單選  

< mat-button-toggle-group #toggleGroup="matButtonToggleGroup" multiple>  
&nbsp; < mat-button-toggle value="AAA"> AAA < /mat-button-toggle>  
&nbsp; < mat-button-toggle value="BBB"> BBB < /mat-button-toggle>  
&nbsp; < mat-button-toggle value="CCC"> CCC < /mat-button-toggle>  
< /mat-button-toggle-group>  
{{ toggleGroup.value }} -> AAA  BBB  CCC  複選  



### mat-icon  

[影片 Icons](https://youtu.be/wI6kQAORiVg?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&t=31)  
[官方 API](https://material.angular.io/components/icon/overview)  
[ICON 列表](https://fonts.google.com/icons)  

@index.html  
< head>  
< link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">  
< /head>  

import { MatIconModule } from '@angular/material/icon' 
const MaterailComponents = [ MatIconModule, ]  

< mat-icon color="primary">icon代號Tag< /mat-icon>  


### mat-badge  

[影片 Badges](https://youtu.be/SiIPlZAOnQ4?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU)  
[官方 API](https://material.angular.io/components/badge/overview)  










