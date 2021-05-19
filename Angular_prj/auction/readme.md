[Youtube Angular 4.0从入门到实战 打造股票管理网站 ](https://www.youtube.com/watch?v=xb48nEqLAq8&list=PLnzrgyM1SBsaErGITq0_5QjLmExWU8KQJ&index=3&ab_channel=MrCottonlion)  
[Bootstrap 教程](https://www.runoob.com/bootstrap/bootstrap-tutorial.html)


### Angular-CLI 命令列  
$ ng new [項目名稱]  建立網站項目  
$ ng new [項目名稱] --routing  建立網站項目  附加路由模塊  
$ ng g component [組件名稱] 建立網頁組件  



### 使用外部API  
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


### 單向數據綁定  
父組件html的子組件選擇器增添  
[子組件 物件名稱] = "父組件物件" or "父組件物件.屬性"  


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
 
