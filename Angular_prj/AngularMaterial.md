
## [Youtube Learn Angular Material - Full Tutorial](https://www.youtube.com/watch?v=jUfEn032IL8&ab_channel=freeCodeCamp.org)  
## [Youtube Angular Material Tutorial](https://www.youtube.com/watch?v=bV8emCBmFHk&list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&ab_channel=Codevolution)  
## [Angular Material Doc](https://material.angular.io/)  






[index]
install
MaterailModule  





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






