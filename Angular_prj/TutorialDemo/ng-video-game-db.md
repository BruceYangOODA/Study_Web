
[Youtube Angular 11 Tutorial - Code a Project from Scratch](https://www.youtube.com/watch?v=LiOzTQAz13Q&ab_channel=freeCodeCamp.org)  
[Github NgVideoGameDb](https://github.com/bobangajicsm/ng-video-games-db)  

$ ng new ng-video-game-db  
$ ng add @angular/material  

import { FormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';  
import { MatTabsModule } from '@angular/material/tabs';  
import { MatIconModule } from '@angular/material/icon';  
import { MatFormFieldModule } from '@angular/material/form-field';  
import { MatSelectModule } from '@angular/material/select';  

@ styles.scss  

body {  
    font-family: Roboto, "Helvetica Neue, sans-serif";  
    background-color: #151515;  
    padding-top: 60px;  
    height: 100%;  
}  
  
body * {  
    font-family: Roboto, "Helvetica Neue, sans-serif";  
    margin: 0;  
    padding:0;  
    box-sizing: border-box;  
}  

@ home.component.scss  

::ng-deep {  
        .mat-form-field-infix { background-color: #3f51b5; }    
        .mat-select-value,  
        .mat-select-arror,  
        .mat-form-field-hide-placeholder  
        .mat-select-placeholder,  
        .mat-form-field-appearance-legacy  
        .mat-form-field-label {  
            color: #fff !important;  
            opacity:1;  
        }    
        .mat-form-field-infix {  
            color: #fff !important;  
            border-top: none;  
            padding-left: 5px !important;  
        }    
        .mat-form-field-appearance-legacy  
        .mat-form-field-label {  
            padding-left: 5px;  
        }    
        .mat-form-field-appearance-legacy  
        .mat-form-field-underline {  
            background-color: #fff !important;  
        }          
    }  

import { environment as env } from 'src/environments/environment';  

@ http-errors.interceptor.ts  
[影片](https://youtu.be/LiOzTQAz13Q?t=1465)  
