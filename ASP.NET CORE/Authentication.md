

[Udemy-ASP.NET Core-身份验证和授权](https://www.bilibili.com/video/BV1Pk4y1W7FC/?vd_source=688a8e9add56d9ae61219650e0c33c65)  

[.NET 8 Authentication with Identity in a Web API with Bearer Tokens & Cookies](https://www.youtube.com/watch?v=8J3nuUegtL4)


套件安裝
Microsoft.AspNetCore.Identity.EntityFramewokCore
Microsoft.EntityFrameworkCore.Design  
Microsoft.EntityFrameworkCore.SqlServer  
Microsoft.EntityFrameworkCore.Tools  

DbContext.cs  
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;  
namespace XXX  
{  
&ensp;public class 名稱Conext : IdentityDbContext  
&ensp;{  
&ensp;&ensp;public 名稱Context(DbContextOptions<名稱Context> options) : base(options)      
&ensp;&ensp;{    
    
&ensp;&ensp;}  
&ensp;}  
}  

Program.cs  
//配置DB連線 My_SQL
if (builder.Configuration.GetConnectionString("SqlType").Equals("MySQL"))  
{  
&ensp; builder.Services.AddDbContext<【名稱Context】>(options =>   options.UseMySQL(builder.Configuration.GetConnectionString("【ConnectionStrings標記字串】")));  
}  
&ensp; builder.Services.AddAuthorization();    
&ensp; builder.Services.AddIdentityApiEndpoints<IdentityUser>();  
&ensp;&ensp; .AddEntityFrameworkStores<名稱Context>();  

&ensp;
var app = builder.Build();  
app.MapIdentityApi<IdentityUser>();  



