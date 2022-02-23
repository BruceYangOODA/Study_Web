
[node 爬蟲 | puppeteer js | 來抓網頁的圖 | 實際案例 | 抓正妹的圖](https://www.youtube.com/watch?v=m25RkljTUfY&t=2s&ab_channel=BigBoyCanCode)  20220222  
[node 爬蟲 | puppeteer js | Pixnet 轉 Worpdress | 商業價值 | 抓Pixnet文章跟圖片](https://www.youtube.com/watch?v=HQLd9NYCC0U&ab_channel=BigBoyCanCode)  20220222  
[使用 Node.js 來爬蟲吧！[PTT 股票板]](https://b-l-u-e-b-e-r-r-y.github.io/post/PTTCrawler/)  20220222  
[Web Scraping with Puppeteer & Node.js: Chrome Automation](https://www.youtube.com/watch?v=lgyszZhAZOI&ab_channel=LearnWebCode)  

[A Guide to Web Scraping with Node.js](https://www.youtube.com/watch?v=dXjKh66BR2U&ab_channel=Fireship) 20220223  
[WEB SCRAPING made simple with JAVASCRIPT tutorial](https://www.youtube.com/watch?v=TzZ3YOUhCxo&ab_channel=AaronJack) 20220223  
[How to bypass reCAPTCHA with Puppeteer and Headless Chrome](https://www.youtube.com/watch?v=wsDRkAD6lPs&ab_channel=JarrodOverson)  20220223  
[Web automation with JavaScript for beginners | Puppeteer](https://www.youtube.com/watch?v=wqRKEd0_suw&ab_channel=HiteshChoudhary)  20220223    

### [Puppeteer API ](https://github.com/puppeteer/puppeteer)  
https://developers.google.com/web/tools/puppeteer/get-started  

### node 爬蟲 抓網頁的圖   

const puppeteer = require('puppeteer')  
var request = require('request')  
const fs = require('fs')  

var download = function(uri, filename, callback) {  
request.head(uri, function(err, res, body) {  
request(uri).pipe(fs.createWriteStream(__dirname + `/${filename}`))  
.on('close', function() { console.log('Finished Copy Images')})  
})
}  

function wait(ms) { return new Promise(  
resolve => setTimeout(() => resolve(), ms)  
)}  

(async () => {  
const browser = await puppeteer.launch({})  
const page = await browser.newPage()  
await page.goto('https://ck101.com/thread-5144405-1-1.html', { waitUntil: 'domcontentloaded'})  

// Get the height of the rendered page  
const bodyHandle = await page.$('body')  
const { height } = await bodyHandle.boundingBox()  
await bodyHandle.dispose()  

// Scroll one viewport at a time, pausing to let content load  
const viewportHeight = page.viewport().height  
let viewportIncr = 0  
while(viewportIncr + viewportHeight < height) {
await page.evaluate(_viewportHeight => {  window.scrollby(0, _viewportHeight)}, viewportHeight)}  
await wait(20)  
viewportIncr = viewportIncr + viewportHeight  }  

// Scroll back to top  
await page.evaluate(_ => { window.scrollTo(0,0)})  
// Some extra delay to le images load  
await wait(1000)

let imageLink = await page.evaluate(() => {  
const images = Array.from(document.querySelectorAll('img'))  
return images.map(img => img.src).filter(imgText => imgText.includes('w=750'))  

imageLink.forEach((img, index) => {  
download(img, index + '.jpg', function() { console.log('done')})  
})

await browser.close()  
})  
})  


### node 爬蟲 Pixnet 轉 Worpdress  

// 建立資料夾放圖片跟文案  
var createFoler = (title, description) => {  
fs.mkdirSync(__dirname + `/${title}`, { recursive: true })  
fs.rwriteFile(__dirname + `/${title}/${title}.txt`, description, function(err) {  
if(err) { console.log(err) }  
else { console.log('Write operation complete') }    
})  
}  

let headingText = await page.evaluate(() => {  
const headingElement = document.querySelectorAll('h2')[1]  
return headingElement.innerText  
})  

let descriptionText = await page.evaluate(() => {  
const descriptionText = document.querySelector('.article-content')  
return descriptionText.innerText  
})  

createFolder(headingText, descriptionText)  

### How to bypass reCAPTCHA with Puppeteer and Headless Chrome
[How to bypass reCAPTCHA with Puppeteer and Headless Chrome](https://www.youtube.com/watch?v=wsDRkAD6lPs&ab_channel=JarrodOverson)  















