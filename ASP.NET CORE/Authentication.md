

[Udemy-ASP.NET Core-身份验证和授权](https://www.bilibili.com/video/BV1Pk4y1W7FC/?vd_source=688a8e9add56d9ae61219650e0c33c65)  

[ ASP.NET Core WebAPI Authentication And Authorization Made EASY](https://youtu.be/auGpCZRiEtA)  

套件安裝
Microsoft.AspNetCore.Identity.EntityFramewokCore
Microsoft.EntityFrameworkCore.Design  
Microsoft.EntityFrameworkCore.SqlServer  
Microsoft.EntityFrameworkCore.Tools  


appsettings.json  
"JWTConfig": { "Issuer": "發行人",  
    "Audience": "EveryOne",  
    "IssuerSigningKey": "發行密鑰",  
    "AccessTokenExpiresMinutes": "60",  
    "AccessRefershTokenExpiresMinutes": "60" }  

JWTConfig.cs  
    public class JWTConfig
    {  
    //<summary> Token釋出者 </summary>  
    public string? Issuer { get; set; }  
        //<summary> Token接受者 </summary>  
        public string? Audience { get; set; }  
        //<summary> 密鑰 </summary>  
        public string? IssuerSigningKey { get; set; }  
        //<summary> 過期時間 </summary>  
        public int AccessTokenExpiresMinutes { get; set; }  
        //<summary> token 過期後，可重刷時效 </summary>   
        public int AccessRefershTokenExpiresMinutes { get; set; }   
    }  


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

var app = builder.Build();  
await SeedService.SeedDatabase(app.Services);  
app.UseAuthentication();  
app.UseAuthorization();  


