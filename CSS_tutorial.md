
[Youtube CSS Tutorial - Zero to Hero](https://www.youtube.com/watch?v=1Rs2ND1ryYc&ab_channel=freeCodeCamp.org)   
[Youtube Build Glass Website with HTML and CSS Tutorial](https://www.youtube.com/watch?v=O7WbVj5apxU&ab_channel=DevEd)        
[Youtube Learn HTML5 and CSS3 For Beginners - Crash Course](https://www.youtube.com/watch?v=vQWlgd7hV4A&ab_channel=DevEd)   
[Youtube CSS Crash Course For Absolute Beginners](https://www.youtube.com/watch?v=yfoY53QXEnI&ab_channel=TraversyMedia)   
CSS => Cascading Style Sheet    



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
justify-content: center;置中 flex-end;靠右 space-between; space-around;       
align-items: center;上下左右置中 flex-start;靠上 flex-end;置底 stretch;元素拉長至底部        
order: 1; 2; 3; 4; 自訂元素排序           




### pseudo-class 虛擬類別    

:link   
:visited    

### selector    

\>   子元素   例如 ul > li   

h2[class=subtitle]    
img[src="..."]    
img[src^="..."]    startwith '...' 都會被選擇    
img[src*="..."]    includes '...' 都會被選擇
