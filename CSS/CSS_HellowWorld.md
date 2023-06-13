
OREILLY  
CSS 大全  


--文字屬性--  

縮排文字  
text-indent  
數值  <length> | <percentage>  
ex. text-indent: 3em  
ex. text-indent: 10%  

文字對齊  
text-align  
數值  start | end | left | right | cneter | justify | match-parent | startend  
初始值 start  

行高  
line-height  
數值 <number> | <length> | <percentage> | normal  
初始值 normal  
normal 1.2倍 font-size  

垂直對齊文字  
vertical-align  
數值  baseline | sub | super | top | text-top | middle | bottom | textbottom | <length> | <percentage>  
初始值 baseline    
適用於行內元素與表格欄   
備註 表格內只能使用 baseline, top, middle, bottom  

單字間隔  
word-spacing  
數值 <length> | normal  
備註 word  word  

字元間隔  
letter-spacing  
數值 <length> | normal  
備註 w o r d  

文字修飾  
text-decoration  
數值  none | [ underline, overline, line-through, blink ]  
初始值 none  

文字陰影  
text-shadow  
數值  none | [ <length>, <length> <length> <length>? ]  
備註 第一個length 水平位移, 第二個length 垂直位移, 第三個length 模糊半徑  
ex. text-shadow: 0 0 4px black;  

處理空白  
white-space  
數值  normal | nowrap | pre | pre-wrap | pre-line  
初始值 normal  
備註 
normal  忽略多餘的空白  
pre  保留多餘的空白  
nowrap  避免折行,遇到斷行元素再折行 <br/>  
pre-wrap  保留多餘的空白,維持一般折行行為 
pre-line  忽略多餘的空白,維持一般折行行為  

折行  
word-break  
數值  normal | break-all | keep-all  
初始值  normal  
備註  

文字溢出  
word-wrap  
數值  normal | break-word  
初始值  normal  
備註  break-word 超出範圍就斷文字,剩餘的到下一行  

書寫方向  
writting-mode  
數值  horizontal-tb | vertical-rl | vertical-lr  
初始值  horizontal-tb  

文字方向  
text-orientation  
數值  mixed | upright | sideways  
初始值  mixed  
備註  
upright  從上到下  
sideways  向右旋轉 90度  

設定Tab大小  
tab-size  
數值  <length> | <integer>  
初始值  8  
  
==============基本視覺格式==========================   
元素顯示方式  
display  
數值  <display-outside> | <display-inside> | <display-listitem> | <display-internal> | <display-box> | <display-legacy>  
初始值  inline  

區塊方框  
box-sizing  
數值  content-box | padding-box | border-box  
初始值 content-box  
備註  
content-box 不包含 padding margin  
border-box 包含 padding margin  

全域邊框  
border  
數值  [ <border-width> | <border-style> | <border-color> ]  
ex. border: thick solid silver;   


