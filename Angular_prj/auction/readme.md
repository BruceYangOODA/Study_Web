[Youtube Angular 4.0从入门到实战 打造股票管理网站 ](https://www.youtube.com/watch?v=xb48nEqLAq8&list=PLnzrgyM1SBsaErGITq0_5QjLmExWU8KQJ&index=3&ab_channel=MrCottonlion)  
[Youtube Angular视频教程](https://www.youtube.com/watch?v=HC3ZmIftriU&list=PLNON4AAjjLJEzuf1XnS4rlUvKbfb3NgXS&ab_channel=TL)  
[Youtube 千锋Web前端教程 angular](https://www.youtube.com/watch?v=EiDewOIGLfc&list=PLwDQt7s1o9J4b2zjOo3flmVFOqEV0H1Pz&ab_channel=%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2)  
[Bootstrap 教程](https://www.runoob.com/bootstrap/bootstrap-tutorial.html)


### Angular-CLI 命令列  
$ npm install -g @angular/cli  
$ ng new [項目名稱]  建立網站項目  
$ ng new [項目名稱] --routing  建立網站項目  附加路由模塊  
$ ng g component [組件名稱] 建立網頁組件  
$ ng g service [服務名稱] 建立服務  
$ ng serve --port 4200  開始網站服務      



### 使用外部API  
$ npm install --save rxjs-compat 
$ npm install jquery --save  自動安裝到 node_modules 資料夾內  
$ npm install bootstrap --save  
$ npm install bootstrap@3 新版
在 package.json 檔案內的 dependencies 屬性 可以看到安裝API的版本  

% 在 angular.json 檔案內的 stripts 屬性 註明 API的位址  
"./node_modules/jquery/dist/jquery.js"  
"./node_modules/bootstrap/dist/js/bootstrap.js"  
% 在 angular.json 檔案內的 styles 屬性 註明 API的位址  
"./node_modules/bootstrap/dist/css/bootstrap.css"  

讓 typescript 認識外部API方法  
$ npm install @types/jquery --save-dev  
$ npm install @types/bootstrap --save-dev  


### 服務  
$ ng g service [服務名稱] 建立服務  
在 app.module.ts 文件內 import 服務  
並 在providers 宣告服務  
localStorage  物件 是 service 的NoSQL物件  

### 路由  
Routes  
RouterOutlet  佔位符指令  
Router  由 navigate() navigateByUrl() 導航  
RouterLink  Html中使用
ActivatedRouted  

在 app-routing.module.ts 檔案中 routers配置路徑  
  {path: "[路徑]", component:[組件名稱]}
  
在 html 放置 路由佔位符  
<#router-outlet><#/router-outlet>  
以 routerLink 屬性 導航至 routers的組件  
<#a [routerLink]="['/路徑']">連結名稱</#a>  

使用 控制器控制路由  
在組件內部宣告  
constructor(private router:Router) {}  
撰寫導航方法  
toDetail() { this.router.navigate(['/路徑'])};  

### 在路由傳遞數據  
在連結內放置 查詢參數 queryParams  
<#a [routerLink]="['/路徑'] [queryParams]="{名稱:1}">連結名稱</#a>  
在組件內部宣告  
constructor(private routeInfo: ActivatedRoute) {}  
ngOnInit() {this.數組 = this.routeInfo.snapshot.queryParams["名稱"];}  
ngOnInit() {this.數組 = this.routeInfo.snapshot.params["名稱"];}  從URL模式分析取出  

### 訂閱路由當中的數據  
ngOnInit() {  
this.routeInfo.params.subscribe((params: Params) => this.數組 = params["名稱"]);}  

重定向路由  redirectTo  
{path: "", redirectTo: "/home", pathMatch:"full"},  

### 路由守衛  
創建一個class implements CanActivate  
介面方法  canActivate()  
在 routers 標註 使用路由守衛  
{path: "home", component: HomeComponent, canActivate [一個class]},  
 
### 依賴注入  
依賴注入  Dependency Injection  
@NgModule({providers: [依賴注入的類]})  

export class Component { constructor(名稱: 依賴注入的類) { this.物件 = 依賴注入的類.實例方法;}}  

在組件中聲明 專為組件使用  
@Component({  
  providers:[{ provide:依賴注入的類, useClass:依賴注入的類或子類}]  
})  


## 數據綁定  
### 綁定屬性  
[標籤屬性] = "屬性的值"  
[innerHTML] = "插入的html code"  

### 單向數據綁定  
父 to 子  
父組件html的子組件選擇器增添  
[子組件 物件名稱] = "父組件物件" or "父組件物件.屬性"  

子 to 父  
父組件html的子組件選擇器增添  
(子組件 物件名稱) = "父組件方法" 
子組件物件是 EventEmitter  

### 雙向數據綁定  
[(ngModel)]="物件名稱"  

[(子組件物件名稱)]="子組物件名稱"  
子組物件名稱 是子組件Input()加Change 才能使用

### 輸入輸出屬性  



### 事件綁定  
<#標籤 (事件名稱)="執行的方法($event)">  $event瀏覽器事件對象=標籤    

### HTML屬性綁定  
[class] = "樣式名稱"  
[class.屬性] = "樣式屬性"  
[ngClass] = "{樣式名稱:是否顯示布林值,樣式名稱:是否顯示布林值}"  
[style.值] = "樣式布林值 ? '值A':'值B'"  
[ngStyle] = "{樣式值:樣式布林值 ? '值A':'值B'}"  

### 觀察者模式  

### 表單處理  
ngSubmit  
<form #myForm="ngForm" (ngSubmit)="onSubmit(myForm.value)">  使用ngSubmit接管傳統表單的 submit  

ngModel
表單標籤命名  <#input ngModel name="命名名稱" type="text">  
標記標籤  <#input #phone="ngModel" type="text">  
    使用 phone.value 可以得到該標籤的值  

ngModelGroup  表單群組  
<#div ngModelGroup="命名">表單內容</#div>  
div 標籤下面的表單成為  命名的屬性  

### 響應式表單  

