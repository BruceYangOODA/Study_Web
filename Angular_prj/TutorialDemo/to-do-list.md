
[Youtube Angular Crash Course (2019)](https://www.youtube.com/watch?v=Fdf5aTYRW0E&ab_channel=TraversyMedia)  

[Github bradtraversy/angular-crash-todolist](https://github.com/bradtraversy/angular-crash-todolist)  

[Web 從本地JSON檔案撈資料](https://www.techiediaries.com/angular-local-json-files/)  

@ proxyconfig.json  
{  
    "/api":{  
        "target": "http://localhost:3000",  
        "secure": false,  
        "changeOrigin": true  
    }  
}  

@ service.ts  
getTodo(): Observable<Todo[]> {  
    return this.http.get<Todo[]>("/api");  
  }  

@ component.ts  
this.todoService.getTodo().subscribe(data => this.todos = data);  




