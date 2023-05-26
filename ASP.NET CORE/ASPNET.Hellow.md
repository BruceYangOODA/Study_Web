
BILI [ASP.NET Core Web API和EF Core-增删改查](https://www.bilibili.com/video/BV1wk4y1x7bR/?vd_source=688a8e9add56d9ae61219650e0c33c65)  
  
  
  
Studio -> Create a new project -> ASP.NET Core Web API  
projectName: _PACKAGENAME_.API(附加 API 表示這是純API, 附加 WEB 表示放頁面)  

新增資料夾 Models  
新增資料夾 Domain  
新增類別 _NAME_ ...   

====處理資料庫=======
Dependencies -> Manage NuGet Packages -> Microsoft.EntityFrameworkCore.SqlServer  
Dependencies -> Manage NuGet Packages -> Microsoft.EntityFrameworkCore.Tools  
  
DbContext Class(Controller 跟 Database之間的中介器)  

新增資料夾 Data  
新增類別 _NAME_DbContext ...   
using Microsoft.EntityFrameworkCore;
extend: DbContext  
using _PACKAGENAME_.API.Models.Domain;  

ctor + Tab (快捷建立 constructor)  
參數 (DbContextOptions dbContextOptions) : base(dbContextOptions)  

public Dbset<_NAME_> 欄位 { get; set; }

=====資料庫連線=========  
appsettings.json -> ConnectionStrings  

Server=(LocalDb)\\MSSQLLocalDB;  
Database=NZWalksDb;  
Trusted_Connection=True;  
TrustServerCertificate=True;  CORE7  

Program.cs -> builder.Services.AddDbContext<_NAME_DbContext>(options =>  
    options.UseSqlServer(builder.Configuration.GetConnectionString("NZWalksConnectionString")));     
=====資料庫MIGRATION=======  
Tools -> NuGet Package Manager -> Package Manager Console  
$ Add-Migration "Name Of Migration"  ex. "Initial Migraion"  
  
_PACKAGENAME_.API 自動新增資料夾 Migraions  
  
$ Update-Database  
  
MSSQLLocalDB 自動建立資料庫 

==============  



https://www.bilibili.com/video/BV1wk4y1x7bR?t=3007.3



