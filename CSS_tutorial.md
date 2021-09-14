
[Youtube CSS Tutorial - Zero to Hero](https://www.youtube.com/watch?v=1Rs2ND1ryYc&ab_channel=freeCodeCamp.org)   
[Youtube Build Glass Website with HTML and CSS Tutorial](https://www.youtube.com/watch?v=O7WbVj5apxU&ab_channel=DevEd)        
[Youtube Learn HTML5 and CSS3 For Beginners - Crash Course](https://www.youtube.com/watch?v=vQWlgd7hV4A&ab_channel=DevEd)   
[Youtube CSS Crash Course For Absolute Beginners](https://www.youtube.com/watch?v=yfoY53QXEnI&ab_channel=TraversyMedia)   
[Youtube HTML Full Course - Build a Website Tutorial](https://www.youtube.com/watch?v=pQN-pnXPaVg&ab_channel=freeCodeCamp.org)   
[Youtube Learn HTML5 and CSS3 From Scratch - Full Course](https://www.youtube.com/watch?v=mU6anWqZJcc&ab_channel=freeCodeCamp.org)   


CSS => Cascading Style Sheet    

### Index   
a   
animation   
box-model   
flex-box    
grid    
property    
Pseudo-classes    
section   
selector    
side-bar    
transform   
transition    
video   

### a   

[影片](https://youtu.be/vQWlgd7hV4A?t=2736)   

< a target="_blank" 另開新頁       


### animation   

[影片](https://youtu.be/1Rs2ND1ryYc?t=19018)    
[影片2](https://youtu.be/1Rs2ND1ryYc?t=19797)   


### box-model           

border: 2px solid rgb(123, 123, 123);           
padding: 20px;          
padding: 100px 40px 5px 0;Top right bottom left;            
margin: 20px 40px;top-bottom right-left;                   

float: left; right;            
display: none;消失          
display: inline-block;排成橫排             




### flex-box            

display: flex;box內容會自動排成橫排    
flex-direction: row;預設 -reverse 內容物從尾開始放置          
flex-direction: column-reverse;           
flex-wrap: wrap;推疊的時候往下排 wrap-reverse;堆疊的時候往上排   

flex-grow: 1; 5;  當畫面變大時，比其他元素大 5倍;    
flex-shrink: 0; 當畫面變小時，不要改變這個元素的比例大小 3; 當畫面變小時，縮小3倍    
flex-basis: 200px; flex-box初始值    
flex: 1 3 200px;  1 -> flex-grow; 3 -> flex-shrink; 200px -> flex-basis;    

justify-content: center;置中 flex-end;靠右 space-between; space-around;       
align-items: center;上下左右置中 flex-start;靠上 flex-end;置底 stretch;元素拉長至底部        
order: 1; 2; 3; 4; 自訂元素排序           

align-self: flex-start; 只有這個元素靠上 flex-end;置底  center;置中   


### grid    

display: grid;box內容會自動排成表格     display: flex;box內容會自動排成橫排   
grid-template-colimns: 10px 50px 20px; C1寬10px C2寬50px C3寬20px    
grid-template-rows: 50px 250px; R1長50px R2長250px   
grid-template-colimns: auto auto auto;    
grid-template-rows: auto auto;    

justify-content: start;靠左 end;靠右 center;置中 space-evenly; space-around;      
align-content: start;置頂 end;置底 center;置中 space-between; space-evenly;     

grid-row-gap: 300px; row之間隔300px    
gird-gap: 300px 150px; row隔300px col隔150px    

grid-column: 1 / 3; col範圍起自2,結束於3(佔col兩格)      
grid-row: 2 / 4; row範圍起自2,結束於4(佔row兩格)    
grid-column: 1 / span 2; col範圍起自1,結束於3(佔col兩格)      
grid-row: 2 / span 2; row範圍起自2,結束於4(佔row兩格)    

grid-area: 2 / 1 / span 2 / span 2;   
row範圍起自2,結束於4(佔row兩格)    
col範圍起自1,結束於3(佔col兩格)      


### property   

color: blue;    
color: rgb(130,130,130);   
color: rgba(130,130,130, 0.4);   
color: #333333;    

background: blue;   
background: url('/assets/test.jpg');    
background: url('http://www.google.com/test.jpg');    
background-repeat: no-repeat;      
background-color: red;    
background-size: contain;圖片縮小或放大以符合框體   cover;圖片維持大小或放大以符合框體    

font-family: sans-serif;            
font-size: 1.25em; 20px;               
font-weight: bold; bolder;     

vw 100分之1 畫面寬度view-width            
vh 100分之1 畫面長度view-height            

text-decoration: underline;底線 line-through;畫線 overline;頂線 none;      
text-transform: uppercase;大寫 lowercase;小寫       
text-align: center; left; right; justify;         

### Pseudo-classes    

[影片](https://youtu.be/vQWlgd7hV4A?t=7362)    

:nth-child(num) 第幾個子元素   

.links li:nth-child(1) { color: blue; } 第一個li藍色字體   


### section   

[影片](https://youtu.be/vQWlgd7hV4A?t=5248)    

< section> 
< figure> < img> < figcaption> < /figcaption> < /img> < /figure> < /section>    

< article> < /article>


### selector    

\>   子元素   例如 ul > li   

h2[class=subtitle]    
img[src="..."]    
img[src^="..."]    startwith '...' 都會被選擇    
img[src*="..."]    includes '...' 都會被選擇


### side-bar    

[影片](https://youtu.be/1Rs2ND1ryYc?t=20854)    
display: grid;    
grid-template-columns: 70% 30%;主頁70% side-bar30%   
grid-gap: 50px;   



### transform   

[影片](https://youtu.be/1Rs2ND1ryYc?t=18015)    

.submit-button{   
transform: translate(50px ,30px);拉長x,y 50px,30px   
transform: scale(2.5);變大2.5倍    
transform: rotate(-45deg);向左選轉45度    
transform: skewY(-45deg);向左斜轉45度,以Y軸為基準       
}   


### transition    

[影片](https://youtu.be/1Rs2ND1ryYc?t=17345)    

.submit-button {    
transition: background 2s ease-in-out 1s;2秒後變色  離開:hover1秒後變色     
transition: background 3s ease;   
transition: all 500ms ease;   
}   

.submit-button:hover {    
background: rgb(147,187,255);   
}   


### video   

[影片](https://youtu.be/vQWlgd7hV4A?t=2416)    
[影片2](https://youtu.be/pQN-pnXPaVg?t=4616)   

< video controls 播放鍵,時間條      
poster="thumbs.jpg" 影片預設縮圖    
loop 影片重複      

< source src="./video.mp4"

< iframe 
