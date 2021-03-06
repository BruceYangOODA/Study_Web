

[Youtube Asp.Net MVC Tutorial For Beginners](https://www.youtube.com/watch?v=fN0PZMI5VhU&list=PLaFzfwmPR7_JuVN71I9pEpN8JadDTh0rg&index=1&ab_channel=WebGentle)  
[Youtube ASP.NET MVC Data Access in C#](https://www.youtube.com/watch?v=bIiEv__QNxw&ab_channel=IAmTimCorey)  
[Youtube Learn MVC Model view controller Step by Step](https://www.youtube.com/watch?v=_323VsR-Th0&list=PL33C9E91F8CDD2BF7&index=1&ab_channel=.NETInterviewPreparationvideos)  
[Youtube Step-by-step ASP.NET MVC Tutorial for Beginners](https://www.youtube.com/watch?v=E7Voso411Vs&ab_channel=ProgrammingwithMosh)  
[Youtube ASP.NET MVC Tutorial](https://www.youtube.com/watch?v=-pzwRwYlXMw&list=PL6n9fhu94yhVm6S8I2xd6nYz2ZORd7X2v&ab_channel=kudvenkat)  
[Youtube Learn ASP.NET Core 3.1 - Full Course for Beginners](https://www.youtube.com/watch?v=C5cnZ-gZy2I&ab_channel=freeCodeCamp.org)  


[Download .NET Core 3.1](https://dotnet.microsoft.com/download/dotnet/3.1)  


### Index  
建立新專案  
Extension Package  
CSS  
RouteConfig  
Sql Connection  
Sql Connection2  
Sql Connection3  
Sql Connection4  
Html Helper  


### 建立新專案  

啟動 VisualStudio  
Create a new project 建立新專案(N)  
ASP.NET Core Web Application  
(next)  


### Extension Package  

[影片](https://youtu.be/E7Voso411Vs?t=369)  

Productivity Power Tools  
Web Essentials  


### CSS  

[影片](https://youtu.be/E7Voso411Vs?t=1312)  
[bootswatch](https://bootswatch.com/)  

App_Start -> BundleConfig.cs  

### RouteConfig  

[影片](https://youtu.be/E7Voso411Vs?t=2292)  
App_Start -> RouteConfig.cs  
routes.MapMvcAttributeRoutes();  
routes.MapRoute();  

public class MoviesController : Controller {  
&nbsp; [Route("movies/released/{year}/{month:regex(\\d{4}):reng(1,12)}")]  

}  

### Sql Connection  

[影片](https://youtu.be/Lrr66APUwBk?list=PL6n9fhu94yhVm6S8I2xd6nYz2ZORd7X2v&t=114)  

安裝套件 EntityFramework  
在Models 新增資料模型class, 資料庫連接class  
Employee.cs  
EmployeeContext.cs  

using System.ComponentModel.DataAnnotations.Schema;  
[Table("tblEmployee")]  
public class Employee {}  

using System.Data.Entity;  
public class EmployeeContext : DbContext{  
&nbsp; &nbsp; public DbSet<Employee> Employees { get; set; }  
}  

Web.config  
< connectionStrings>  
< add name="EmployeeContext" connectionString="server=.; database=Sample; integrated security=SSPI" providerName="System.Data.SqlClient"/>
< /connectionStrings>  

Global.asax  

Database.SetInitialLizer<PACKAGE.Models.XXXContext>(null);  

### Sql Connection2  

[影片](https://youtu.be/3pEax-5wXG8?t=191)  

App_Data -> Add Item -> Sql Server -> add new table  

Models -> Add Item -> ADO.NET Entity Data Model -> EF Designer from database   


### Sql Connection3  

[影片](https://youtu.be/bIiEv__QNxw?t=210)  
Solution -> Add -> add project -> SQL Server Database project -> DB_NAME -> Create   

[影片](https://youtu.be/bIiEv__QNxw?t=2010)  
DB_NAME -> Add document -> DOCUMENT_NAME ->  Add Table -> TABLE_NAME -> SQL_SCHEMA   

[影片](https://youtu.be/bIiEv__QNxw?t=2321)  
ConnectionStrings -> 
< add name="DB_NAME" connectionString="Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=DB_NAME;Integrated Security=True;Connect Timeout=60;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False"/>  

[影片](https://youtu.be/bIiEv__QNxw?t=2724)  
Add Item -> class SqlDataAccess  

using System.Configuration;  
using System.Data;  
using System.Data.SqlClient;  

public static string GetConnectionString(string connectionName = DB_NAME) {  
&nbsp; return ConfigurationManager.ConnectionStrings[connectionName].ConnectionString;  }  

public static List<T> LoadData<T>(string sql) {  
&nbsp; using (IDbConnection cnn = new SqlConnection(GetConnectionString())) {  
&nbsp; &nbsp; return cnn.Query<T>(sql).ToList();
}  }  

public static int SaveData<T>(string sql, T data) {  
&nbsp; using (IDbConnection cnn = new SqlConnection(GetConnectionString())) {  
&nbsp; &nbsp; return cnn.Execute(sql, data);  
}  }  

Add Item -> class ModelClassDataPiper    

public static class ModelClassDataPiper {  
&nbsp; public static List<Employee> LoadEmployees() {  
&nbsp; &nbsp; string sql = "select Id, Name, Gender, City from dbo.tblEmployee;";  
&nbsp; &nbsp; return SqlDataAccess.LoadData<Employee>(sql);  
}  }  


### Sql Connection4   

[影片](https://www.youtube.com/watch?v=K4x6eoG7hwY&ab_channel=SeeSharpCode)  

### Html Helper  

[影片](https://youtu.be/QVLYMsYbtEw?list=PLaFzfwmPR7_JuVN71I9pEpN8JadDTh0rg&t=217)  
Html.ActionLink   
Html.TextBox  
Html.CheckBox  
Html.RadioButton  
Html.DropDownList  
Html.Hidden  
Html.BeginForm  
Html.EndForm  
