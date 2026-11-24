[Asp.Net Core Web API with JWT Authentication & Refresh Tokens using SQL Server + Identity Server](https://www.youtube.com/watch?v=ZBKJZyccwcE)  


套件安裝  
Microsoft.AspNetCore.Identity.EntityFramewokCore  
Microsoft.AspNetCore.Authentication.JwtBearer  
System.IdentityModel.Tokens.Jwt  
Microsoft.EntityFrameworkCore.SqlServer  
Microsoft.EntityFrameworkCore.Tools  
Microsoft.EntityFrameworkCore.Design  

appsettings.json  
"JWTConfig": { "Issuer": "發行人",  
    "Audience": "EveryOne",  
    "IssuerSigningKey": "發行密鑰",  
    "AccessTokenExpiresMinutes": 60,  
    "AccessRefershTokenExpiresMinutes": 60 }  


Program.cs  

#region jwt配置
var jwtConfig = new JWTConfig();
builder.Configuration.GetSection("JWTConfig").Bind(jwtConfig);
builder.Services.AddSingleton(jwtConfig);

builder.Services.AddTransient<ITokenHelper, TokenHelper>();

//啟用JWT            
builder.Services.AddAuthentication(Options =>
{
    Options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    Options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    //當驗證失敗時，回應標頭會包含 WWW-Authenticate 標頭，這裡會顯示失敗的詳細錯誤原因
    options.IncludeErrorDetails = true;
    //是否需要Https
    options.RequireHttpsMetadata = false;

    //保存Token
    options.SaveToken = false;

    options.TokenValidationParameters = new TokenValidationParameters
    {
        //驗證Issuer (發行者) 是否有效
        ValidateIssuer = true,
        //設置有效的 Issuer，即預期的 Issuer
        ValidIssuer = builder.Configuration["JWTConfig:Issuer"],

        //驗證 Audience (受眾) 是否有效
        ValidateAudience = true,
        //設置有效的 Audience，即預期的 Audience
        ValidAudience = builder.Configuration["JWTConfig:Audience"],

        //驗證 Token 是否在有效期內
        ValidateLifetime = true,
        //設置時間偏移，可以讓 Token 在一定時間範圍內依然被視為有效，即使過期
        ClockSkew = TimeSpan.Zero,

        //驗證 Token 中包含的 Key，這通常用於檢查 Token 中的簽名金鑰
        ValidateIssuerSigningKey = true,
        //設置用於驗證簽名的金鑰
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWTConfig:IssuerSigningKey"]))
    };

    //驗證事件捕捉
    options.Events = new JwtBearerEvents()
    {
        OnTokenValidated = context =>
        {
            //驗證成功後，後續再看要做甚麼事情...
            return Task.CompletedTask;
        },
        OnAuthenticationFailed = context =>
        {
            //驗證失敗後，後續再看要做甚麼事情...
            return Task.CompletedTask;
        }
    };
});
builder.Services.AddAuthorization();
#endregion


var app = builder.Build();
app.UseAuthentication();
app.UseAuthorization();

