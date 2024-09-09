[MarkDown語法大全](https://hackmd.io/@eMP9zQQ0Qt6I8Uqp2Vqy6w/SyiOheL5N/%2FBVqowKshRH246Q7UDyodFA?type=book)

[VMware Compatibility Guide](https://www.vmware.com/resources/compatibility/search.php)

<https://www.vmware.com/>

[Youtube How to install VMware ESXi on your PC](https://www.youtube.com/watch?v=MVBGDx0AvcE)

> 1. Install VMware.PowerCLI.

<https://www.python.org/downloads/>

安裝Python 3.7.0 以上版本
環境變數 Path 新增 

C:\Users\user\AppData\Local\Programs\Python\Python38

C:\Users\user\AppData\Local\Programs\Python\Python38\Scripts

搜尋 Manage app execution aliases

關閉 App Installer (python.exe python3.exe) 

$> pip install six psutil lxml pyopenssl pyOpenSSL


[在 Windows 上安裝 PowerShell](https://learn.microsoft.com/zh-tw/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.2)

$> dotnet tool install --global PowerShell --version 7.2.19

更新PowerShell版本

搜尋 PowerShell
執行 Windows PowerShell ISE

確認版本

PS $> $PSVersionTable.PSVersion

搜尋版本

PS $> winget search Microsoft.PowerShell

更新版本

PS $> winget install --id Microsoft.Powershell --source winget

5.1版本與7.X版本可以共存
Windows PowerShell ISE 仍是 5.1版
執行 C:\Program Files\PowerShell\7\pwsh.exe
或是把 C:\Users\user\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Windows PowerShell\Windows PowerShell 捷徑 目標改為 C:\Program Files\PowerShell\7\pwsh.exe

PS $> Install-Module -Name VMware.PowerCLI

Y enter
PS $> Set-ExecutionPolicy Unrestricted

> 2. Download ESXi-Customizer-PS.ps1
<https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbHpzdmR2OFg0NTRrY212ZHd2cW1YQmhNaWFKZ3xBQ3Jtc0ttbkhKbjFTQ2UzbGoxQ0E5Y0hXYTNTeUtZekJYam9qRnhrVkV0MGFtN3ZwaU9mX3JKOUdJclJqREtEbVlpUFFHY3RtMzZKN3VKWXhwUzVNekFhR0RFMWdHQ0xtVUhtMll1UGJRRThoaVdDZzN4RGFMZw&q=https%3A%2F%2Fgithub.com%2FVFrontDe%2FESXi-Customizer-PS&v=MVBGDx0AvcE>

Code -> Download ZIP -> 解壓縮檔案 -> 複製解壓縮資料夾路徑

PS $> Set-PowerCLIConfiguration -PythonPath C:\Users\user\AppData\Local\Programs\Python\Python38\python.exe -Scope User

PS $> cd 解壓縮資料夾路徑(C:\Users\user\Downloads\ESXi-Customizer-PS-master\ESXi-Customizer-PS-master)

PS $> .\ESXi-Customizer-PS.ps1 -help
R enter
PS $> .\ESXi-Customizer-PS.ps1 -v60 -vft -load sata-xahci,net55-r8168 -nsc
R enter




