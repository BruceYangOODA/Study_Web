
[Youtube Node.js Crash Course Tutorial](https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&ab_channel=TheNetNinja)  


## [Index]
基礎 method  
fs  















### 基礎 method  

window  
__dirname  
__filename  
setTimeout(callback,幾毫秒後)  
setInterval(callback,幾毫秒)  
clearInterval(function_name)  

[Youtube require](https://youtu.be/OIBIXYLJjsI?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&t=833)  

XXX.js 內容  
module.exports = Obj  

const XXX = require("./XXX")  
XXX 等於 Obj  

ex.
module.exports = { AAA, BBB}  
const {AAA,BBB} = require("./XXX")  

### fs  
[Youtube fs](https://youtu.be/OIBIXYLJjsI?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&t=1269)  

fs.readFile(url,(err,data)=>{})  
fs.writeFile(url, dataObj, callback)  
fs.unlink(url, (err)=>{})  刪除檔案  
fs.mkdir(url, (err)=>{})  
fs.rmdir(url, (err)=>{})  
fs.existsSync(url) : boolean  

const readStream = fs.createReadStream(url, { encoding:"utf8" });  
const writeStream = fs.createWriteStream(url);  
readStream.on("data",(chunk)=>{  
&nbsp; writeStream.write(chunk); });  

readStream.pipe(writeStream)  另一種便捷寫法  





