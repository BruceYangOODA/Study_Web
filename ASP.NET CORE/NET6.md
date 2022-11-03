
[1/22-Z6fXN165q Building Applications With React 17 And ASP.NET Core 6](https://www.youtube.com/watch?v=oZ1AJRMctCU&ab_channel=StarFreelancer%28dot%29Eu)  
https://www.youtube.com/watch?v=f2IdQqpjR0c  
https://www.youtube.com/watch?v=7d2UMAIgOLQ  
[https://www.youtube.com/watch?v=BfEjDD8mWYg&ab_channel=freeCodeCamp.org](https://youtu.be/BfEjDD8mWYg)  
[Learn Angular 10, .NET Core Web API & SQL Server by Creating a Web Application from Scratch](https://www.youtube.com/watch?v=Dpv6lUKNL9o&ab_channel=ArtofEngineer)  
[.NET 5 REST API Tutorial](https://www.youtube.com/watch?v=Jvu60R-AWQc&ab_channel=kudvenkat)  
[Asp.Net Core Web API and Angular 7 CRUD](https://www.youtube.com/watch?v=fom80TujpYQ&ab_channel=CodAffection)  
[CRUD with a .NET 6 Web API & Entity Framework Core 🚀 Full Course](https://www.youtube.com/watch?v=Fbf_ua2t6v4)  
[Learn ASP.NET Core MVC (.NET 6) - Full Course](https://www.youtube.com/watch?v=hZ1DASYd9rk&ab_channel=freeCodeCamp.org)  
[How to Use VS Code to Run SQL on a Database](https://www.youtube.com/watch?v=C0y35FpiLRA&ab_channel=DatabaseStar)    
[ASP.NET Core Web API 入門教學](https://www.youtube.com/watch?v=dXUfZuf1Wp4&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&ab_channel=%E5%87%B1%E5%93%A5%E5%AF%AB%E7%A8%8B%E5%BC%8F)    
[ASP.NET CORE 入门](https://www.youtube.com/watch?v=ToUut_LBZbs&list=PL_ejO7vn7l2358FsVgNZI944kEIn4NNJ8&ab_channel=TongmingLiang)  
[深入 ASP․NET Core 6.0 專案範本的各種技術細節](https://www.youtube.com/watch?v=EWhFj-w4YVc&ab_channel=Will%E4%BF%9D%E5%93%A5)   
[ASP.NET 6 Core CRUD operations using SQL stored procedure and Dapper in Hindi](https://www.youtube.com/watch?v=wSUprBNgsCo&ab_channel=QuizzToday)  

VSCODE EXTENSIONS:
SQLTools 

SQLTools MySQL/MariaDB
SQLTools PostgreSQL/Redshift Driver
SQLTools Microsoft SQL Server/Azure

Visiual Studion SDK 6(支援 CORE 6.0)

cmd$ winget install Microsoft.DotNet.SDK.6

https://dotnet.microsoft.com/en-us/download/dotnet
https://dotnet.microsoft.com/en-us/download/dotnet/6.0



API 基本架構
namespace XXX.Controllers 
{  
&emsp;&emsp;[Route("api/[controller]")]  
&emsp;&emsp;[ApiController]  
&emsp;&emsp;public class XXXControler : ControllerBase  {}
}  

資料庫連線設定 套件安裝  
Microsoft.EntityFrameworkCore.SqlServer   
Microsoft.EntityFrameworkCore.Tools  
Microsoft.EntityFrameworkCore.Design   
&emsp;&emsp;
&emsp;&emsp;
&emsp;&emsp;
&emsp;&emsp;
&emsp;&emsp;
&emsp;&emsp;

Scaffold-DbContext "Server=伺服器位置;Database=資料庫;Trusted_Connection=True;User ID=帳號;Password=密碼" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models -Force

void ConfigureServices(IServiceCollection services)
{
    services.AddControllers();
    services.AddDbContext<TodoContext>(options =>
options.UseSqlServer(Configuration.GetConnectionString("TodoDatabase")));
}

// CORS  
builder.Services.AddCors(c => {  
    c.AddPolicy("AllowOrigin", options =>  
        options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());  
    });  
0//  JSON Serializer  不一定需要, 已內置
套件 Microsoft.AspNetCore.Mvc.NewtonsoftJson    
builder.Services.AddControllersWithViews()
       .AddNewtonsoftJson(options => 
       options.SerializerSettings.ReferenceLoopHandling=Newtonsoft.Json.ReferenceLoopHandling.Ignore)
       .AddNewtonsoftJson(options => options.SerializerSettings.ContractResolver=new DefaultContractResolver());

// 安裝資料庫工具
dotnet tool install --global dotnet-ef  
  
using Microsoft.EntityFrameworkCore;  
namespace XXX.資料夾  
{  
&emsp;&emsp;public class DataContext : DbContext {  
&emsp;&emsp;&emsp;public DataContext(DbContextOptions<DataContext> options) : base(options) { }  
&emsp;&emsp;&emsp;public DbSet<Employee> employees { get; set; }  
&emsp;}  
}  

@ appsettings.json  
"ConnectionStrings": {  
    "TodoDatabase": "Server=localhost\\MSSQLLocalDB;Database=PTT;Trusted_Connection=True"  }  

global using 專案.資料夾;  
builder.Services.AddDbContext<DataContext>(options => {  
&emsp;&emsp;options.UseSqlServer(builder.Configuration.GetConnectionString("TodoDatabase"));  
});  
  
&emsp;&emsp;public DataContext(DbContextOptions<DataContext> options) : base(options) { }  
  
  
$ dotnet ef migrations add CreateInitial   
$ dotnet ef database update  
  
  
  
Scaffold-DbContext "Server=(localdb)\MSSQLLocalDB;Database=PTT;Trusted_Connection=True;User=test;Password=test1234" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models -Force  
  

     
