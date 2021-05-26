[Youtube 爱前端从入门到深入Node js开发实战](https://www.youtube.com/watch?v=sq3FAlPQEyM&list=PLE4XbebCbtzFwGFTalZIRkRgGTXoKfW-1&ab_channel=Program)  
[Youtuve Node.js 从零开发个人博客项目](https://www.youtube.com/watch?v=ABz5f1aVeO4&list=PL9nxfq1tlKKlhV1UzUmElRkxmjkoO3mtH&ab_channel=JomyKing)  
[Youtube Node.js教學](https://www.youtube.com/watch?v=J9PfvdtkFLg&list=PLzKtnppOmiXCPlnd8dDmI8tVxjAUClcmV&ab_channel=AngusChang) 
[Youtube 千锋Web前端教程 NodeJS](https://www.youtube.com/watch?v=jxMvFxOqd24&list=PLwDQt7s1o9J6v1bYUF_mgOXd_C5saqh22&ab_channel=%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2)  

## [Node Doc 官方API文件](https://nodejs.org/api/)  
## [NPM 模塊清單](https://www.npmjs.com/)  
### [API 文件說明](https://npm.taobao.org/package/formidable)  
### [Bootstrap 中文官網](https://getbootstrap.net/)  
[MIME 参考手册](https://www.w3school.com.cn/media/media_mimeref.asp)  
[underscore-min.js](https://underscorejs.org/underscore-min.js)  
[jquery grid](https://www.jqwidgets.com/jquery-widgets-demo/demos/jqxgrid/index.htm)  
[jquery grid demo](http://www.trirand.com/blog/?page_id=5)  
[前端分頁神器 jquery grid](https://www.itread01.com/content/1541832486.html)  
[jqGrid 中文](http://blog.mn886.net/jqGrid/)  

## [index]  
CLI命令  
CMD命令  
file system  
http  
url, path, queryString  
cookie-parser  
express-session  
GET, POST  
finalhandler, serve-static  
formidable  
express  
MongoDB  
Mongoose  
node-xlsx    
crypto  md5加密  
路由引擎  
作用域暴露 exports  


<hr>

1. Node 適合處理大量IO任務的網路服務  
2. Node 沒有跟目錄的概念,沒有URL和物理文件一一對應的關係,必須自己設計路由引擎    
3. 異步函數不能通過 return 返回,不能通過 = 接收數據,必須通過 回調函數 傳輸數據   
4. 如果 require引用 沒有加相對路徑 './', 會自動去 node_modules 文件夾去尋找  
5. C:\Users\電腦名\AppData\Roaming\npm\node_modules  是系統環境路徑 會自動尋找內部 js檔案  
   install package -g 會安裝在全局,即此位址  
7. 當省略文件名時,會自動引入 index.js  
8. 依賴: package.json 文件中 'denpendencies' 屬性表示依賴外部 模塊  

<hr>  

Node.js 缺點:  
1. 路由不方便  
2. 靜態資源服務不方便  
3. 頁面呈遞不方便  
SOLUTION : Express.js   


## CLI命令      
1. 安裝 Node.js [Node 官網](https://nodejs.org/en/download/)   
   $ node -v 確認安裝版本  
   安裝資料夾 Program Files/nodejs  

## CMD命令  
### file system    
var fs = require('fs');  
fs.reaname('./路徑'), 新檔名, function(err){});  
fs.readFile('./路徑'),function(err,data){ console.log(data); })   
fs.writeFile('./路徑', data, function(err, data){  
  if (err){ res.end('CODE 404');} else { res.end(''); } });  
fs.appendFile("./路徑", JSON.stringify(fields), function(err){});  
fs.readdir("./路徑", function(err,filenameArray){});  讀取資料夾內檔名  
fs.unlink("./"+ files.FILE物件.path, functions(err){});  刪除文件  

### http  
var http = require('http');  
var server = http.createServer(function(req,res){ res.end(''); });  
server.listen(3333);  
req對象封裝了 HTTP上行請求的所有信息  
res對象是服務器給出的下行響應  
req.connection.remoteAddress  #USER IP 位址  

### url, path, queryString  
var url = require('url');  
var path = require('path');  
var querystring = require('querystring');  

var pathname = url.pase(req.url).pathname;  
// 得到檔名  
var extname = path.extname(pathname);  

// 2nd參數 true 會把 query 自動變為物件  
var urljson = url.parse( req.url, true ); console.log(urljson);  
得到查詢字符串  
var qs = urljson.query;  
var qsjson = querystring.parse(qs);  

### cookie-parser  
$ npm install cookie-parser --save  
var cookieParser = require("cookie-parser");  
// cookieParser() 是一個中間件  
app.use(cookieParser());  
讀取  
var cook = req.cookies.名稱  
if(!cook) { cook=[]; }  
改變  
cook.push(值);  
設定  
res.cookie("cook",cook);  

### express-session  
$ npm install express-session --save  
var session = require("express-session");  
app.set("trust proxy", 1); //trust first proxy  
app.use(session({ secret:"AAA", resave:false, saveUnitialized:true, cookie:{ maxAge:60000}}));  
設置 session  
if(!req.session.a){ req.session.a= parseInt(Math.random()*10000);}  

### GET, POST  
//拿到GET 請求參數    
var queryJSON = url.parse(req.url, true).query;  
//拿到POST  
req.on("data", function(chunk){ content += chunk; });  
req.on("end", function(){ content = querystring.parse(content); res.end(""); })  
## content傳回 any ,可以輸出文字,但是 無法辨識內部屬性  

### finalhandler, serve-static  
$ npm install serve-static --save  
$ npm install finalhandler --save  
var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');  
// 配置靜態資源服務器 與 首頁位址  
var serve = serveStatic('資料夾', {'index':['index.html', 'index.htm']});  
serve(req, res, finnalhandler(req, res));  

### formidable  
用來處理 POST 請求  
$ npm install formidable --save 
var formidable = require("formidable");  
// 使用 formidable  uploadDir 上傳文件存放資料夾  
var form = new formidable.IncomingForm();  
form.uploadDir = "./mydata/uploads";  
//處理表單, fields 表示普通控件, files 表示文件控件  
form.parse(req, function(err,fields,files){  console.log(files.表單名稱);  
var extname = path.extname(files.表單名稱.name);  
fs.rename(files.表單名稱.path, files.表單名稱.path + extname, function(){ res.end('upload success');});  
});  

### express  
[API](https://npm.taobao.org/package/ejs)  
[express 中文網站](https://www.expressjs.com.cn/)   
$ npm install express --save  
var express = require("express");  
var app = express();  
//設置默認的模板引擎  
app.set("view engine","ejs");  
新增資料夾 views  新增檔案 index.ejs 使用HTML編碼  
第一參數 路由, 第二參數模板檔名 .ejs  
app.get("/ejs", function(req,res){ res.render("whatever",{"thing":"八手機","spend":100*3})});  
app.get("/index", function(req,res){ res.render("index")});  

app.get("/", function(req,res){  
__dirname 表示當時這個js文件的絕對路徑  
必須使用絕對路徑當作參數  
res.sendFile(__dirname + "/mydata/index.html");  
});  
app.get("/music",function(req,res){ res.send("音樂頻道")}); 
app.get("/news/:id", function(req,res){ res.send("第"+ req.params.id+"新聞")});  
app.post("/music",function(req,res){ res.render("模板.ejs")});  
// 使用 Controller  
var 控制器 = require("./路徑/控制器.js");  
app.post("/music", 控制器.exports方法);  

//使用靜態路由  
app.use(express.static("./"));  
app.use("/mydata", express.static("mydata"));  第一參數路由 , 第二參數 local 資料夾位址  
app.listen(3333);  


### MongoDB 2.2/4.0  
NoSQL  Not Only SQL 非關係型數據庫  
[MongoDB 官網下載頁](https://www.mongodb.com/try/download/community)  
[MongoDB API說明](http://mongodb.github.io/node-mongodb-native/2.2/)  
[MongoDB CRUD增刪改查說明](http://mongodb.github.io/node-mongodb-native/2.2/reference/ecmascript6/crud/)  
設置環境變量 C:/Program Files/MongoDB/Server/版本/bin  
$ mongod --dbpath c:\Data\db  設置資料存儲資料夾  
$ mongod  
$ mongo  
進入REPL環境  Read Eval Print Loop  
> use student  創建 student數據庫, 沒有此數據庫會自動創建    
> db.school.insert({"姓名":"小明","age":12,});
> db.school.find({})  空查詢,找所有數據  
> show dbs  
> show collections  

$ npm install mongodb --save  
var MongoClient = require("mongodb").MongoClient;  
var dburl = "mongodb://localhost:27017"; 
var dbName = "student";  
MongoClient.connect(dburl, function(err,client){ if(err){}  
var col = client.db(dbName).collection("school");  
r 所有數據庫變動訊息  
col.insertOne({"姓名":"小李","age":13}, function(err,r){});   
col.find({}).toArray(function(err,items){ console.log(items);});  
});  
col.deleteOne({"姓名":"小李","age":13}, function(err,r){});   
col.updateOne({尋找數據},{$set:修改數據},function(err,r){});  
col.drop();  刪除集合   
db.dropDatabase();  刪除數據庫    

### Mongoose  
[Mongoose 官網](https://mongoosejs.com/)  
$ npm install mongoose --save  
var mongoose = require("mongoose");  
mongoose.connect("mongodb://localhost/Cats");  
var Cat = mongoose.model("Cat",{ name:String,sex:String,age:Number});  
var kity = new Cat({name:"小名",sex:"男",age:12});  
kity.save();  

1. Schema 模型架構  
var peopleSchema = new mongoose.Schema({
    name:String,
    sex:String,
    age:Number,
    hobby:[String],
    scores:[{subject:String,score:Number}]
});  

2. 靜態方法
CRUD  自定義靜態方法,在 mongoose.model 方法後, 就成自定義的 CRUD  
靜態方法中 this 表示整個數據表  
peopleSchema.statics.findByName = function(name, callback){  
this.find({"name":name}, function(err,results){ callback(results); });};  

var People = mongoose.model("People",peopleSchema);  
var kity = new People({......});   
kity.save();  
kity.remove();  

3. 動態方法   
動用動態方法時,外層一訂有一個靜態方法, 因為需要返回的實例  
peopleSchema.methods.sayHello = function(){ console.log(this); }  
使用實際例子:  
PeoPle.findByName("AAA",function(results){ results[0].sayHello();});   

4. 多個類的關係  
多對多的關係, 採用儲存對方的id  
Student = { "courses":[number]};   
Course = {"students":[number]};  

###  node-xlsx  
$ npm install node-xlsx --save  
var xlsx = require("node-xlsx");  
var workSheetFromFile = xlsx.parse(__dirname + "a.xlsx");  
console.log(workSheetFromFile.length);  //6 六個表   
console.log(workSheetFromFile[0]);  //顯示第一個表 屬性 name, data   

寫入  
var data1 = [[表頭],[第一行數據],[第二行數據]];  
var data2 = [[表頭],[第一行數據],[第二行數據]];  
var buffer = xlsx.build([  
{name:"表名稱", data:data1},  
{name:"表名稱", data:data2}]);  
fs.writeFile("路徑"+"檔案名"+".xlsx", buffer, function(err){});  

### crypto md5加密  
$ npm install crypto --save  
var crypto = require("crypto");  
var str = crypto.createHash("md5").update("密碼").digest("hex");  
var str1 = crypto.createHash("md5").update(str).digest("hex");  


### 路由引擎  
var server = http.createServer((req,res)=>{  
    var pathname = url.parse(req.url).pathname;  
    // 得到url 的檔名  
    var extname = path.extname(pathname);  
    //  url沒有檔名 , 自動添加 index.html  
    if (!extname){  
        if(pathname.substr(-1) != '/'){  
            res.writeHead( 302 , { 'Location' : pathname+'/'})  
        }
         pathname += '/index.html';  
    }  
    fs.readFile('./路徑' + pathname, function(err,data){  
    if (err){ res.end('404 Not Found'); return; }  
        if (mime.hasOwnProperty(extname)){  
            res.setHeader('content-type',mime[extname]);  
        }  
        res.end(data);  });  
    });  
 2. var mime = {  
    '.jpg':'image/jpeg',  
    '.jpeg':'image/jpeg',  
    '.gif':'image/gif',  
    '.png':'image/png',  
    '.html':'text/html;charset=UTF-8',  
    '.css':'text/css',  
    '.js':'application/x-javascript',  
    '.mp3':'audio/mpeg',  
    };  

### 作用域暴露 exports  
test.js { var a =100; exports.a = a; }  
01.js { var s = require('./test.js');  console.log( s.a );}  //印出 100  

暴露方法  
function sum(){ return Math.max.apply(null, arguments);}  
exports.sum = sum;  // arguments 
02.js { var fuc = require('./test.js');   
fuc.sum([3,4,5,6]) }  // [3,4,5,6] = arguments  

暴露模塊  
module.exports = sum;  
var sum = require('./test.js');  
var result = new sum([3,4,5,6]);  

### 事件驅動  
