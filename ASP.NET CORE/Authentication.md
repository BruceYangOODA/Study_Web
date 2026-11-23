

[Udemy-ASP.NET Core-身份验证和授权](https://www.bilibili.com/video/BV1Pk4y1W7FC/?vd_source=688a8e9add56d9ae61219650e0c33c65)  

[.NET 8 Authentication with Identity in a Web API with Bearer Tokens & Cookies](https://www.youtube.com/watch?v=8J3nuUegtL4)  

[Create Custom Role Based Authentication In Asp.net Core MVC Application - Complete Tutorial](https://www.youtube.com/watch?v=p6X-dDx6nQY&list=PLTOaik4iw-qUzTx82QuAso1NktusoyJ9J&index=15)  


套件安裝
Microsoft.AspNetCore.Identity.EntityFramewokCore
Microsoft.EntityFrameworkCore.Design  
Microsoft.EntityFrameworkCore.SqlServer  
Microsoft.EntityFrameworkCore.Tools  

Users.cs  
using Microsoft.AspNetCore.Identity;  
namespace 名稱.Models  
{  
&ensp; public class Users : IdentityUser  
&ensp; {  
&ensp; public string FullName { get; set; }  
&ensp; }  
}  


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
&ensp; builder.Services.AddDbContext<【名稱Context】>(options =>   
&ensp;&ensp; options.UseMySQL(builder.Configuration.GetConnectionString("【ConnectionStrings標記字串】")));  
}  
builder.Services.AddIdentity<Users, IdentityRole>(options =>  
{  
&ensp; options.Password.RequireDigit = true;  
&ensp; options.Password.RequireLowercase = true;  
&ensp; options.Password.RequiredLength = 6;  
&ensp; options.User.RequireUniqueEmail = true;  
&ensp; options.SignIn.RequireConfirmedAccount = false;  
&ensp; options.SignIn.RequireConfirmedEmail = false;  
&ensp; options.SignIn.RequireConfirmedPhoneNumber = false;  
})  
&ensp; .AddEntityFrameworkStores<StockInfoContext>()  
&ensp; .AddDefaultTokenProviders();  

app.UseAuthentication();  
app.UseAuthorization();  


