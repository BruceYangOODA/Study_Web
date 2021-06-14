
### [Youtube ](https://www.youtube.com/playlist?list=PL7XcC35Z6WFB3L2xLVV3S4bG_Z37MqcRe)  







[Youtube How To Code A Video Stream using MongoDB](https://www.youtube.com/watch?v=y6Z-SZt-Xvw&list=PL7XcC35Z6WFB3L2xLVV3S4bG_Z37MqcRe&index=2&ab_channel=AbdisalanCodesAbdisalanCodes)  

const mongodb = require('mongodb');
const url = 'mongodb://user:password@db:27017';  

影片檔案注入資料庫  
mongodb.MongoClient.connect(url, function(err,client){  
&nbsp; if(err){ res.json(error); return; }  
&nbsp; const db = client.db('videos');  
&nbsp; const bucket = new mongodb.GridFSBucket(db);  
&nbsp; const videoUploadStream = bucket.openUploadStream('mmd');  
&nbsp; const videoReadStream = fs.createReadStream('./mmd.mp4');  
&nbsp; videoReadStream.pipe(videoUploadStream);  
&nbsp; res.status(200).send("Done...");  
});

$ mongo  
/> use videos  
/> db.fs.files.count()  查閱db資料   
/> db.fs.chunks.count()  查閱db資料  

讀取資料庫檔案  
mongodb.MongoClient.connect(url, function(err,client){  
&nbsp; if(err){res.status(500).json(err); return; }  
&nbsp; const range = req.headers.range;  
&nbsp; if(!range){ res.status(400).send('Require Range header'); }  
&nbsp; const db = client.db('videos');  
&nbsp; db.collection('fs.files').findOne({}, (err,video)=>{  
&nbsp; &nbsp; if(!video) { res.status(404).send('No video uploaded!'); return; }  
&nbsp; &nbsp; const videoSize = video.length;  
&nbsp; &nbsp; const start = Number(range.replace(/\D/g,''));  
&nbsp; &nbsp; const end = videoSize -1;  
&nbsp; &nbsp; const contentLength = end - start +1;  
&nbsp; &nbsp; const headers = {  
&nbsp; &nbsp; &nbsp; "Content-Range": /`bytes ${start}-${end}/${videoSize}/`,  
&nbsp; &nbsp; &nbsp; "Accept-Ranges": "bytes",  
&nbsp; &nbsp; &nbsp; "Content-Length": contentLength,  
&nbsp; &nbsp; &nbsp; "Content-Type": "video/mp4",  
&nbsp; &nbsp; &nbsp; };  
&nbsp; &nbsp; res.writeHead(206,headers);  
&nbsp; &nbsp; const bucket = new mongodb.GridFSBucket(db);  
&nbsp; &nbsp; const downloadStream = bucket.openDownloadStreamByName('mmd',{  
&nbsp; &nbsp; &nbsp; start  
&nbsp; &nbsp; &nbsp; });  
&nbsp; &nbsp; downloadStream.pipe(res);  
&nbsp; });  
});  








