

ng2-pdf-viewer
ng-lazyload-image  

### ng2-pdf-viewer

[影片](https://www.youtube.com/watch?v=iOJt77suIY0)  
[API](https://www.npmjs.com/package/ng2-pdf-viewer)  


$ npm install ng2-pdf-viewer --save  
$ npm install node-sass --save  


import { PdfViewerModule } from 'ng2-pdf-viewer';  
import { FormsModule } from '@angular/forms';  

  imports: [  
    PdfViewerModule,  
    FormsModule  
  ],  


<pdf-viewer [src]="pdfSrc" [render-text]="true" [page]="page"  
 [show-all]="true" style="display: block;"></pdf-viewer>  
 
 
   onFileSelected() {  
    let img: any = document.querySelector('#file');  
    if(typeof(FileList) !== 'undefined') {  
      let reader = new FileReader();  
      reader.onload = (e: any) => {  
        this.pdfSrc = e.target.result;  
      }  
      reader.readAsArrayBuffer(img.files[0])  
    }  
  }  
 
 
   "dependencies": {
    "pdfjs-dist": "~2.7.570",
    "tslib": "^2.0.0"
  },


### ng-lazyload-image  

[API](https://www.npmjs.com/package/ng-lazyload-image)  

$ npm install ng-lazyload-image  

@ module.ts  
import { LazyLoadImageModule } from 'ng-lazyload-image';  
imports: [ LazyLoadImageModule ]  

@ component.html  
< img [defaultImage]="defaultImage" [lazyLoad]="image" />    

