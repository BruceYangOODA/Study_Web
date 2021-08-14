
[Youtube Step-by-step ASP.NET MVC Tutorial for Beginners](https://www.youtube.com/watch?v=E7Voso411Vs&ab_channel=ProgrammingwithMosh)  

[Youtube ASP.NET MVC Tutorial](https://www.youtube.com/watch?v=-pzwRwYlXMw&list=PL6n9fhu94yhVm6S8I2xd6nYz2ZORd7X2v&ab_channel=kudvenkat)  

[Youtube Learn ASP.NET Core 3.1 - Full Course for Beginners](https://www.youtube.com/watch?v=C5cnZ-gZy2I&ab_channel=freeCodeCamp.org)  


[Download .NET Core 3.1](https://dotnet.microsoft.com/download/dotnet/3.1)  


### Index  
建立新專案  
Sql Connection  




### 建立新專案  

啟動 VisualStudio  
Create a new project 建立新專案(N)  
ASP.NET Core Web Application  
(next)  


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

