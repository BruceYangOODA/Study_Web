
## [Youtube Angular Material Tutorial](https://www.youtube.com/watch?v=bV8emCBmFHk&list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&ab_channel=Codevolution) 
## [Youtube Learn Angular Material - Full Tutorial](https://www.youtube.com/watch?v=jUfEn032IL8&ab_channel=freeCodeCamp.org)   
## [Angular Material Doc](https://material.angular.io/)  


[index]
install
MaterailModule  
mat-typography  字型大小  
mat-button   
mat-button-toggle    
mat-icon    
matBadge  
mat-progress-spinner  
mat-toolbar  
mat-sidenav  
mat-menu  
mat-list  
mat-grid-list  
mat-expansion-panel  
mat-card  
mat-tab  
mat-step  
matInput  
mat-select  
mat-autocomplete   
mat-checkbox mat-radio-button  
mat-datepicker-toggle  
matTooltip  
MatSnackBar  
dialog  
mat-table  
cdk-virtual-scroll  
mat-paginator  


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


### matBadge  

[影片 Badges](https://youtu.be/SiIPlZAOnQ4?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU)  
[官方 API](https://material.angular.io/components/badge/overview)  

import { MatBadgeModule } from '@angular/material/badge'  
const MaterailComponents = [ MatBadgeModule, ]   

< span matBadge="5"> XXX < /sapn>  
< span matBadge="5" matBadgePosition="below before"> XXX < /sapn>  
< span matBadge="5" matBadgePosition="below after"> XXX < /sapn>  
< span matBadge="5" matBadgePosition="above before"> XXX < /sapn>  

< span matBadge="5" matBadgeSize="small"> XXX < /sapn>  
< span matBadge="5" matBadgeSize="medium"> XXX < /sapn>  
< span matBadge="5" matBadgeSize="large"> XXX < /sapn>  

< span matBadge="5" color="primary"> XXX < /sapn>  
< span matBadge="5" color="accent"> XXX < /sapn>  
< span matBadge="5" color="warn"> XXX < /sapn>  

< span matBadge="5" matBadgeOverlap="false"> XXX < /sapn>  badge不會蓋到字  

< span [matBadge]="ZZZ"> XXX < /sapn>  資料綁定  
< span [matBadge]="ZZZ" [matBadgeHidden]="ZZZ === 0"> XXX < /sapn>  隱藏badge  


### mat-progress-spinner  

[影片 Progress Spinner](https://youtu.be/cj42D7waOoU?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&t=36)  
[官方 API](https://material.angular.io/components/progress-spinner/overview)   

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';   
const MaterailComponents = [ MatProgressSpinnerModule, ]   

< mat-progress-spinner value="ZZZ">< /mat-progress-spinner>  
< mat-spinner *ngIf="isShowSpinner" color="primary">< /mat-spinner>  

ZZZ = 0-100;  


### mat-toolbar  

[影片 Navbar](https://youtu.be/3gtczOujFV0?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&t=31)  
[官方 API](https://material.angular.io/components/toolbar/overview)  

import { MatToolbarModule } from '@angular/material/toolbar';  
const MaterailComponents = [ MatToolbarModule, ]   

< mat-toolbar color="primary" class="navbar">  
&nbsp; < div> XXX < /div>  
&nbsp; < div>  
&nbsp; &nbsp; < span> AAA < /span>  
&nbsp; &nbsp; < span> BBB < /span>  
&nbsp; &nbsp; < span> CCC < /span>  
&nbsp; < /div>  
< /mat-toolbar>    

css_style
.navbar { justify-content: space-between; }   
span { padding-right: 1rem; }  


### mat-sidenav  

[影片 Sidenav](https://youtu.be/v8NpQYH2O5M?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&t=43)  
[官方 API](https://material.angular.io/components/sidenav/api)  

import { MatSidenavModule } from '@angular/material/sidenav';  
const MaterailComponents = [ MatSidenavModule, ]   

< mat-sidenab-container>  
&nbsp; < mat-sidenav mode="over" [(opened)]="isOpen"> XXX < /mat-sidenav>  
&nbsp; < mat-sidenav-content> AAA < /mat-sidenav-conten>   
< /mat-sidenab-container>  
< button (click)="isOpen=!isOpen"> TOGGLE < /button>  

css_style  
mat-sidenab-container { height: 100%; }  
mat-sidenav, mat-sidenav-content { padding:16px; }  
mat-sidenav { width: 200px; background-color: aqua; }  

mode="over" 蓋過背景  
mode="push" 往右推  
mode="side" 往右擠  

開啟關閉 的方法  
< mat-sidenav #ZZZ mode="side" [(opened)]="isOpen" > XXX < /mat-sidenav>  

< button (click)="ZZZ.open()"> OPEN < /button>  
< button (click)="ZZZ.close()"> CLOSE < /button>  

< button (click)="ZZZ.toggle()"> TOGGLE < /button>  

綁定開啟關閉事件  
< mat-sidenav #ZZZ mode="side" [(opened)]="isOpen"   
&nbsp; &nbsp; (opened)="log('AAA')" (closed)="log('BBB')"> XXX 
< /mat-sidenav>  

.ts  
log(msg) { console.log(msg);  }  


### mat-menu  

[影片 Menu](https://youtu.be/08svzu9JGNM?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&t=25)
[官方 API](https://material.angular.io/components/menu/overview)  

import { MatMenuModule } from '@angular/material/menu';  
const MaterailComponents = [ MatMenuModule, ]   

< mat-menu #ZZZ="matMenu" xPosition="after" yPosition="above">  
&nbsp; < button mat-menu-item [matMenuTriggerFor]="YYY"> AAA < button>  
&nbsp; < button mat-menu-item> BBB < button>  
< /mat-menu>  

< button [matMenuTriggerFor]="ZZZ"> XXX < /button>  

< mat-menu #YYY="matMenu">  次選單的寫法  matMenuTriggerFor  
&nbsp; < button mat-menu-item> CCC < button>  
&nbsp; < button mat-menu-item> DDD < button>  
&nbsp; < button mat-menu-item> EEE < button>  
< /mat-menu>  

--帶資料的選單--  
< mat-menu #WWW="matMenu">  
&nbsp; < ng-template matMenuContent let-name="name">  
&nbsp; &nbsp; < button mat-menu-item> FFF < button>  
&nbsp; &nbsp; < button mat-menu-item> GGG{{ name }} < button>  
&nbsp; < /ng-template>  
< /mat-menu>  

< button [matMenuTriggerData]="{name: 'XXX'}" [matMenuTriggerFor]="WWW"> XXX < /button>  
< button [matMenuTriggerData]="{name: 'VVV'}" [matMenuTriggerFor]="WWW"> VVV < /button>  


### mat-list

[影片 List](https://youtu.be/u9cAb_4o8OM?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&t=24)  
[官方 API](https://material.angular.io/components/list/api)  


import { MatListModule } from '@angular/material/list';  
const MaterailComponents = [ MatListModule, ]   

< mat-list>  
&nbsp;  < mat-list-item> AAA < /mat-list-item>  
&nbsp;  < mat-list-item> BBB < /mat-list-item>  
&nbsp;  < mat-list-item> CCC < /mat-list-item>  
< /mat-list>  

< mat-nav-list>  
&nbsp;  < a mat-list-item href="#"> AAA < /a>  
&nbsp;  < a mat-list-item href="#"> BBB < /a>  
&nbsp;  < a mat-list-item href="#"> CCC < /a>  
< /mat-nav-list>  


組合式  
< mat-list>  
&nbsp;  < mat-list-item>  
&nbsp;  &nbsp;  < mat-icon matListIcon> iconTag < /mat-icon>  
&nbsp;  &nbsp;  < h3 matLine> AA < /3>   兩行並列  
&nbsp;  &nbsp;  < p matLine> AAA < /p>   兩行並列  
&nbsp;  < /mat-list-item>  
< /mat-list>  


### mat-grid-list  

[影片 Grid List](https://youtu.be/zzKfWrLkE0w?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&t=24)  
[官方 API](https://material.angular.io/components/grid-list/api)  

import { MatGridListModule } from '@angular/material/grid-list';  
import { MatDividerModule } from '@angular/material/divider';  
const MaterailComponents = [ MatListModule, MatDividerModule ]   

< mat-grid-list cols="2" rowHeight="2:1">  分兩格  
&nbsp;  < mat-grid-tile colspan="2"> AAA < /mat-grid-tile>  這一個tile佔領兩格    
&nbsp;  < mat-grid-tile> BBB < /mat-grid-tile>  
&nbsp;  < mat-grid-tile rowspan="2"> CCC < /mat-grid-tile>  這一個tile 佔領兩格(直線)  
&nbsp;  < mat-grid-tile> DDD < /mat-grid-tile>  
< /mat-grid-list>  


< mat-grid-list cols="2" rowHeight="2:1">    
< mat-grid-list cols="2" rowHeight="fit" style="height: 200px" gutterSize="10px">   

gutterSize tile中間分隔線  

.css  
mat-grid-tile { background-color: aqua }  


### mat-expansion-panel  

[影片 Panel](https://youtu.be/PZbyzooEQC0?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&t=33)  
[官方 API](https://material.angular.io/components/expansion/api)  

import { MatExpansionModule } from '@angular/material/expansion';  
const MaterailComponents = [ MatListModule, MatDividerModule ]   

mat-accordion 自動塌縮其他 Panel  
multi屬性,不自動塌縮其他Panel  
hideToggle 隱藏 ^ TAG  

< mat-accordion multi="true" hideToggle>   
< mat-expansion-panel>  
  
&nbsp;  < mat-expansion-panel-header>            
&nbsp; &nbsp; < mat-panel-title> AAA < /mat-panel-title>                                           
&nbsp; &nbsp; < mat-panel-description> BBB < /mat-panel-description>                   
&nbsp;  < /mat-expansion-panel-header>   
&nbsp;  PANEL BODY內容區  
&nbsp;  PANEL BODY內容區  
&nbsp; < mat-action-row> < button> YYY < /button> < /mat-action-row>  相當於 FOOTER  
< /mat-expansion-panel>  

< mat-expansion-panel>  ......  
< /mat-expansion-panel> 
< mat-accordion>  


### mat-card  

[影片 Cards](https://youtu.be/8C1NuYxAA0k?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&t=76)  
[官方 API](https://material.angular.io/components/card/api)  

import { MatCardModule } from '@angular/material/card';  
const MaterailComponents = [ MatCardModule ]  

< mat-card>  
&nbsp; < mat-card-title>  AAA  
&nbsp; < /mat-card-title>  
&nbsp; < mat-card-content>  BBB  
&nbsp; < /mat-card-content>  
&nbsp; < mat-card-actions align="end"> < button> CCC < /button>  置右按鈕  
&nbsp; < /mat-card-actions>  
< /mat-card>  


### mat-tab  

[影片 Tabs](https://youtu.be/74Ds_YB24pw?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&t=38)  
[官方 API](https://material.angular.io/components/tabs/api)  

import { MatTabsModule } from '@angular/material/tabs';  
const MaterailComponents = [ MatTabsModule ]   

< mat-tab-group #ZZZ (selectedTabChange)="logChange(ZZZ.selectedIndex)">  
&nbsp; < mat-tab label="AAA"> AAA內容區  
&nbsp; < /mat-tab>  
&nbsp; < mat-tab label="BBB"> BBB內容區  
&nbsp; < /mat-tab>  
&nbsp; < mat-tab label="CCC"> CCC內容區  
&nbsp; < /mat-tab>  
< /mat-tab-group>  

{{ ZZZ.selectedIndex }}  顯示 0-2 代表 AAA-CCC  

logChange(index) { console.log(index); }  


### mat-step  

[影片 Stepper](https://youtu.be/uo5VhgloOpI?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&t=83)  
[官方 API](https://material.angular.io/components/stepper/api)  

import { MatStepperModule } from '@angular/material/stepper';  
const MaterailComponents = [ MatStepperModule ]   

< mat-horizontal-stepper linear>  linear屬性,限制階段不能跳階  
&nbsp; < mat-step label="階段一" completed="isNext">  < p> 階段一內容 < /p>  
&nbsp; < /mat-step>  
&nbsp; < mat-step label="階段二" completed="isNext2">  < p> 階段二內容 < /p>  
&nbsp; &nbsp; &nbsp; < button matStepperPrevious> BACK < /button>  上一階段  
&nbsp; &nbsp; &nbsp; < button matStepperNext> NEXT < /button>  下一階段  
&nbsp; < /mat-step>  
&nbsp; < mat-step label="階段三" completed="isNext3" optional>  < p> 階段三內容 < /p>  
&nbsp; < /mat-step>  
< /mat-horizontal-stepper>  

optional屬性,不受linear屬性限制  
< mat-vertical-stepper>  直線式stepper  
< /mat-vertical-stepper>  


### matInput  

[影片 Input](https://youtu.be/RFbPLKUhpqE?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&t=70)  
[官方 API Input](https://material.angular.io/components/input/api)  
[官方 API form-field](https://material.angular.io/components/form-field/api)  

import { MatInputModule } from '@angular/material/input';    
import { MatFormFieldModule } from '@angular/material/form-field';  
const MaterailComponents = [ MatInputModule, MatFormFieldModule ]    

floatLabel 預設mat-label會浮動,改成消失  
mat-lable 效果為 placeholder  

< mat-form-field floatLabel="never" hideRequiredMarker apperance="standard">  
&nbsp; < mat-label> NAME < /mat-label>  
&nbsp; < input matInput required />  
&nbsp; < mat-hint align="end"> required條件 < /mat-hint>  
< /mat-form-field>  

apperance  
-- standard  
-- legacy  
-- fill  有背景色  
-- outline  有外框  


### mat-select  

[影片 Select](https://youtu.be/xD3ilT11U3E?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&t=52)  
[官方 API](https://material.angular.io/components/select/api)  

import { MatSelectModule } from '@angular/material/select';  
import { MatFormFieldModule } from '@angular/material/form-field';  
const MaterailComponents = [ MatSelectModule, MatFormFieldModule ]    

< mat-form-field>  < mat-select [(value)]="VVV">  
&nbsp; < mat-label floatLabel="never"> ZZZ < /mat-lable>  
&nbsp; < mat-option> NONE < /mat-option>  
&nbsp; < mat-option value="AAA"> AAA < /mat-option>  
&nbsp; < mat-option value="BBB"> BBB < /mat-option>  
&nbsp; < mat-option value="CCC"> CCC < /mat-option>  
< /mat-select> < /mat-form-field>  

.ts  
VVV: string;  

multiple 屬性 可複選  
< mat-form-field>  < mat-select [(value)]="VVV" multiple>  
< mat-optgroup label="ZZZ">  
&nbsp; < mat-option value="AAA"> AAA < /mat-option>  
&nbsp; < mat-option value="BBB"> BBB < /mat-option>  
< /mat-optgroup>  
< mat-optgroup label="WWW">  
&nbsp; < mat-option value="CCC"> CCC < /mat-option>  
&nbsp; < mat-option value="DDD"> DDD < /mat-option>  
< /mat-optgroup>  
< /mat-select> < /mat-form-field>  


### mat-autocomplete  

[影片 Autocomplete](https://youtu.be/zxaSPGDXAqo?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&t=93)  
[官方 API](https://material.angular.io/components/autocomplete/overview)  

import { MatAutocompleteModule } from '@angular/material/autocomplete';  
import { MatFormFieldModule } from '@angular/material/form-field';  
const MaterailComponents = [ MatAutocompleteModule, MatFormFieldModule ]    

.app.module.ts  
import { ReactiveFormsModule } from '@angular/forms';  
imports: [ ReactiveFormsModule, ]   

< form>  
< mat-form-field>  
&nbsp; < input type="text" matInput [matAutocomplet]="ZZZ" [formControl]="myControl" />  
&nbsp; < mat-autocomplete #ZZZ="matAutoconplete">  
&nbsp; < mat-option *ngFor="let item of filteredOptions | async" [value]="item">  
&nbsp; {{ itme }}  
&nbsp; < /mat-option>  
&nbsp; < /mat-autocomplete>  
< /mat-form-field>  
< /form>   

.ts  
import { FormControl } from '@angular/forms';  
import { Observable } from 'rxjs';   
import { map, startWith } from 'rxjs/operators';  

options: string[] = ['AAA','BBB','CCC'];  

myControl = new FormControl();  
filteredOptions: Observable<string[]>;  

ngOnInit() {  
this.filteredOptions = this.myControl.valueChanges.pipe(  
&nbsp; &nbsp; startWith(''), map(value => this._filter(value));  
);  
}  

private _filter(value: string): string[] {  
&nbsp; &nbsp; const filterValue = value.toLowerCase();   
&nbsp; &nbsp; return this.options.filter(option => {option.toLowerCase().includes(filterValue)});  
}  


### mat-checkbox mat-radio-button  

[影片 Checkbox and Radio Button](https://youtu.be/G73PWSFDlmw?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&t=73)  
[官方 API Checkbox](https://material.angular.io/components/checkbox/api)  
[官方 API Radio Button](https://material.angular.io/components/radio/api)  

import { MatCheckboxModule } from '@angular/material/checkbox';  
import { MatRadioModule } from '@angular/material/radio';  
const MaterailComponents = [ MatCheckboxModule, MatRadioModule ]    

< mat-checkbox labelPosition="before"> AAA < /mat-checkbox>  
< mat-checkbox color="primary"> AAA < /mat-checkbox>  

< mat-radio-group>  
< mat-radio-button value="AAA" color="warn"> AAA < /mat-radio-button>  
< mat-radio-button value="BBB" > BBB < /mat-radio-button>  
< mat-radio-button value="CCC" > CCC < /mat-radio-button>  
< /mat-radio-group>  


### mat-datepicker-toggle  

[影片 Date Picker](https://youtu.be/l7iDFzW0jl0?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&t=71)  
[官方 API](https://material.angular.io/components/datepicker/overview)  

import { MatDatepickerModule } from '@angular/material/datepicker';  
import { MatFormFieldModule } from '@angular/material/form-field';  
const MaterailComponents = [ MatDatepickerModule, MatFormFieldModule ]    

< mat-form-field>  
< input matInput [matDatePicker]="myDatePicker" [min]="minDate" [max]="maxDate">  
< input matInput [matDatePicker]="myDatePicker" [matDatePickerFilter]"dateFilter"=>  
< mat-datepicker-toggle [for]="myDatePicker" matSuffix>< /mat-datepicker-toggle>  
< mat-datepicker #myDatePicker>< /mat-datepicker>  
< /mat-form-field>  

.ts  
minDate = new Date();  
maxDate = new Date(2020,02,20);  

dateFilter = date => {  
const day = date.getDay();  
return day !== 0 && day !== 6;  排除禮拜六日    
}  


### matTooltip  

[影片 Tooltip](https://youtu.be/qjQ3uenJV6M?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&t=82)
[官方 API](https://material.angular.io/components/tooltip/api)  

import { MatTooltipModule } from '@angular/material/tooltip';  
const MaterailComponents = [ MatTooltipModule ]  

< button matTooltip="AAA"   
matTooltipPosition="before"  
matTooltipShowDelay="2000"  
matTooltipHideDelay="2000"  > BUTTON < /button>  




[影片 Snackbar](https://youtu.be/jR3foHtmOvY?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&t=97)  
[官方 API](https://material.angular.io/components/snack-bar/api)  

import { MatSnackBarModule } from '@angular/material/snack-bar';  
const MaterailComponents = [ MatTooltipModule ]  

< button (click)="btnFun('msg', 'Dismiss')">  BUTTON  
< /button>  

action  
-- Dismiss  
-- Undo  

.ts  
import { MatSnackBar } from '@angular/material/snack-bar';  
constructor(private snackBar: MatSnackBar) {}  

btnFun(msg, action) {  
let snackBarRef = this.snackBar.open(msg, action, { duration: 2000});  
let snackBarRef = this.snackBar.openFromComponent(SNACKBAR_COMPONENT, { duration: 2000});  
snackBarRef.afterDismissed().subscribe(() => { console.log('SNACKBAR DISMISS'); });  
snackBarRef.onAction().subscribe(() => { console.log('SNACKBAR TRIGGERED'); });  
}  


### dialog  

[影片 Dialog](https://youtu.be/lrVpUVydZwM?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&t=173)  
[官方 API](https://material.angular.io/components/dialog/api)  

import { MatDialogModule } from '@angular/material/dialog';  
const MaterailComponents = [ MatDialogModule ]  

.ts  
import { MatDialog } '@angular/material/dialog';  
constructor(public dialog: MatDialog)  {}  

openDialog() {  
let dialogRef = this.dialog.open(DIALOG_COMPONENT, { data: {name:'ZZZ'}});    
dialogRef.afterClosed().subscribe((result) => { console.log('XXX',result); });  WWW OR VVV  
}  

< h2 mat-dialog-tilte> AAA < /h2>  
< mat-dialog-content> BBB < /mat-dialog-content>  
< mat-dialog-actions>  
&nbsp; &nbsp; < button mat-dialog-close mat-dialog-close="WWW"> WWW < /button>  
&nbsp; &nbsp; < button mat-dialog-close mat-dialog-close="VVV"> VVV < /button>  
< /mat-dialog-actions>  

-- DIALOG_COMPONENT  

import { Inject } from '@angular/core';  
import { MAT_DIALOG_DATA } from'@angular/material/dialog';  

constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}  


### mat-table  

[影片 Data Table](https://youtu.be/7XjsP17rv4M?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&t=105)  
[影片 Data Table2](https://youtu.be/mogliLm_mII?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&t=162)  
[影片 Data Table Pages](https://youtu.be/sUpYvx-2zxI?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&t=52) 
[官方 API](https://material.angular.io/components/table/api)  

import { MatTableModule } from '@angular/material/table';  
const MaterailComponents = [ MatTableModule ]  


### cdk-virtual-scroll  

[影片 Virtual Scrolling](https://youtu.be/jo2Gvw8tC_s?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&t=94)  


### mat-paginator  

[STACK How to use MatPaginatorIntl](https://stackoverflow.com/questions/46869616/how-to-use-matpaginatorintl)  
[STACK Change MatPaginatorIntl itemsPerPageLabel dynamically](https://stackoverflow.com/questions/59354256/change-matpaginatorintl-itemsperpagelabel-dynamically)    




