

-webkit- Chrome等瀏覽器   
-moz- Firefox   
-ms- Microsoft Internet Explorer    


### Index   
box   
font    
img   
table   
transform   




### box   

border: 2px solid red;    
border: solid 實線, dashed 虛線, dotted 點線, double 雙線, groove inset outset ridge none   
border-color: red;    
border-color: green, yellow, red, blue;上綠右黃下紅左藍   
border-radius: 20px;    
border-radius: 0 30px 10px 5px;   
box-shadow: 4px 6px 8px red; 平行位移, 垂直位移, 模糊度, 顏色    
display: inline 行內, block 區塊, inline-block 行內區塊, none     

浮動元素    
float: left, right, none    
clear: both 強迫向下換行
clear: left 將左側浮動元素向下拉,並包覆右側浮動元素    
clear: right 將右側浮動元素向下拉,並包覆左側浮動元素   
clear: none   

寬高    
width:    
height:   
max-width:    
max-height:   
min-width:    
min-height:    

溢出處理    
overflow    
overflow: scroll, auto, hidden      


### font    

[GOOGLE FONTS](https://www.google.com/fonts)    

font-family 字型:      
font-szie 字體大小: 14px;      
letter-spacing 字間距: -1rem, 1rem;    
line-height 行高: 100%;     
text-align: left 靠左, right 靠右, justify 自動對齊, center 置中;      
text-indent: 25px; 首行縮排   
text-decoration: underline 底線, overline 頂線, line-through 畫線    
text-shadow: -4px 4px 3px red; 平行位移, 垂直位移, 模糊度, 陰影色彩     
text-transform: uppercase, lowercase; 大寫,小寫 

p::first-letter {} 首字    
p::first-line {} 首行   


### img   

background-blend-mode: screen;混合複數背景圖   
background-image: url('images/bg.png');   
background-image: linear-gradient();漸層背景    
background-repeat: repeat 重複; no-repeat; repeat-x; repeat-y;      
background-repeat: round; 重複加延展 space; 重複加間距    
background-position: left center;   
background-position: 6px 8px;   
background-attachment: scroll; fixed;拉動滾軸背景圖不動    
background-origin: 圖像呈現起始點 border-box; 邊線左上角 padding-box;從padding區開始    
background-origin: content-box;內容區    
background-size: contain;填滿元素背景區域,並維持圖像比例   

border-radius: 50%;以圓形呈現    

< figue> < img src="">       
< figcaption>圖片說明< /figcaption>   
< /figue>

figure {  
display: inline-block;    
vertical-align: top;    
}   


### table   

border-spacing: 0;邊界    
border-collapse: separate;預設,有雙重邊線        
border-collapse: collapse;沒有雙重邊線,消除間隙  
empty-cells: hide;隱藏無資料空格  
text-align: left; center; right; justified;    
vertical-align: top; middle; bottom; baseline;    


### transform    

transform: rotate(角度);旋轉    
transform: scale(倍率);縮放   
transform: translate(x, y);位移   
transform: skew(角度, 角度);傾斜    
transform-origin: 0 0; left top; 0% 0%; 水平位置 垂直位置   

transition-duration: .5s;過場時間   
transition-timing-function: linear; ease; ease-in; ease-put; ease-in-out;   
transition-delay: .5s;    

