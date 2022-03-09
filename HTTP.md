


[Building a NodeJS HTTP/2 Server and Secure it with Let’s Encrypt](https://www.youtube.com/watch?v=b35Dcz91ItE&ab_channel=HusseinNasser)  20220225  
[HTTP Crash Course & Exploration](https://www.youtube.com/watch?v=iYM2zFP3Zn0&ab_channel=TraversyMedia)  20220225   
[Angular HTTP Client Quick Start Tutorial](https://www.youtube.com/watch?v=_05v0mrNLh0&ab_channel=Fireship)  20220226  
[Angular 9 Tutorial For Beginners #64- HTTP Headers](https://www.youtube.com/watch?v=z83KBAoyNWw&ab_channel=ARCTutorials) 20220226  
[Upload and Download Files with Progress | Spring Boot and Angular](https://www.youtube.com/watch?v=n26StCRoeHA&ab_channel=GetArrays)   20220227  
[Angular HTTP API | FULL COURSE](https://www.youtube.com/watch?v=k8qDGBFPfXk&t=2926s&ab_channel=GetArrays)  20220228  
[深入淺出 HTTP/2 通訊協定](https://youtu.be/O62ufq-orfY)  20220310  

npm install file-saver --save







### Building a NodeJS HTTP/2 Server and Secure it with Let’s Encrypt  
### HTTP Crash Course & Exploration  
### Angular HTTP Client Quick Start Tutorial  
### Angular 9 Tutorial For Beginners #64- HTTP Headers  
### Upload and Download Files with Progress | Spring Boot and Angular  
### Angular HTTP API | FULL COURSE  









### Building a NodeJS HTTP/2 Server and Secure it with Let’s Encrypt  
[respond](https://youtu.be/b35Dcz91ItE?t=374)  
stream.respond({  
'content-type': 'application/json',  
'status': 200  
})  

stream.end(JSON.stringify({  
'user': 'Hellow',  
'id': 'World'  
}))  

### HTTP Crash Course & Exploration    
[HEADER](https://youtu.be/iYM2zFP3Zn0?t=1257)  
host  
user-agent  
req.rawHeaders  


### Angular HTTP Client Quick Start Tutorial  
[HTTP Client](https://www.youtube.com/watch?v=_05v0mrNLh0&ab_channel=Fireship)  
let params = new HttpParams().set('userId','hellow')  
let headers = new HttpHeaders().set('Authorization', 'auth-token')  
this.post = this.http.get('url', {params, headers})  

### Angular 9 Tutorial For Beginners #64- HTTP Headers  
[HEADERS](https://www.youtube.com/watch?v=z83KBAoyNWw&ab_channel=ARCTutorials)  
let headers = new HttpHeaders();  
headers.append('content-type','application/json');  
headers.append('authorization','set16');   

[GET](https://youtu.be/z83KBAoyNWw?t=537)  
const headers = new HttpHeaders({  
'content-type':'application/json',  
'Authorization' : 'abcdefg'  
})  


### Upload and Download Files with Progress | Spring Boot and Angular  
[upload](https://youtu.be/n26StCRoeHA?t=2366)  
[API file-saver](https://www.npmjs.com/package/file-saver)  

upload(formData: FormData): Observable<HttpEvent<string[]>> {  
return this.http.post<string[]>(`${this.server}/file/upload`, formData, { observe: 'events', reportProgress: true})  
}  

component.ts  

onUploadFiles(files: File[]): void {  
const formData = new FormData();  
for(const file of files) {  
&nbsp; &nbsp; formData.append('files',file, file.name)  
}  
this.fileService.upload(formData).subscribe(  
event => { console.log(event); }  
)  

}  

component.html  
< div class="progress">  
< div [style.width.%]="fileStatus.percent" class="progress-bar">< /div>  
< /div>  

< from enctype="multipart/form-data">  
< fieldset>  
< div class="form-group">  
< div>< input type="file" name="files" multiple class="form-control" (change)="onUploadFiles($event.target.files)">< /div>  
< /div>  
< /fieldset>  

[CONFIG](https://youtu.be/n26StCRoeHA?t=5825)  
"allowedCommonDependencies": ["file-saver"]  


### Angular HTTP API | FULL COURSE  
[headers](https://youtu.be/k8qDGBFPfXk?t=5545)  

getUsers(): {   // : Observable<HttpEvent<any>>  
let myHeaders = new HttpHeaders({'myheader':'headervalue'})  
myHeaders = myHeaders.set('id','1234')  // id = 1234  
myHeaders = myHeaders.append('id','0000')  // id=[1234,0000]  
myHeaders = myHeaders.set('id','1234')  // id = 1234  

let myParams = new HttpParams().set('page','5').set('sort','true')    
myParams = myParams.append('name','junior')  

readonly moreParams = ['test','test2']  
const objParams = {['testList']: this.moreParams}  
let theParams = new HttpParams({fromObject: objParams})  // ?testList=test&testList=test2  
let theParams = new HttpParams({fromString: 'name=Jhon&id=58'})  
return this.http.get('api/users',  
{  
header: myHeaders,  
params: myParams,  
// params: theParams,    
observe: 'events',  // 'events' 'body'    
reportProgress: true,  
})  
}  

===================

onUploadFile(files: File[]): void {  
const formData = new FormData()  
for(const file of files) {  
&nbsp; &nbsp; formData.append('files', file, file.name)}  

this.userService.uploadFiles(formData).subscribe(  
(event) => {  
&nbsp; switch(event) {  
&nbsp; case HttpEventType.UploadProgress || HttpEventType.DownloadProgress:  
&nbsp; &nbsp; console.log(event); 
&nbsp; &nbsp; this.fileStatus.percentage = event.loaded / event.type  
&nbsp; &nbsp; this.fileStatus.status = 'progress'  
&nbsp; &nbsp; break;  
&nbsp; case HttpEventType.Response:    
&nbsp; &nbsp; console.log(event);  
&nbsp; &nbsp; if(event.status === 200) {  
&nbsp; &nbsp; this.fileStatus.percentage = 0  
&nbsp; &nbsp; this.fileStatus.status = 'done'
}  
&nbsp; &nbsp; break;  
}}  
)  
}  

component.html  

< progress *ngIf="fileStatus.status === 'progress'" style="width: 500px; height: 25px;" [value]="fileStatus.percentage">< / progress>  

===================

getTextFile() : Observable<HttpResponse<Blob>> {  
return this.http.get('assets/text.txt', {  
responseType: 'blob',  
observe: 'response'  
})  
}  



https://youtu.be/k8qDGBFPfXk?t=7455




















