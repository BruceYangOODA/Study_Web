

[Learn Regular Expressions In 20 Minutes](https://www.youtube.com/watch?v=rhzKDrUiJVk&t=809s&ab_channel=WebDevSimplified)  2022-02-21

https://youtu.be/rhzKDrUiJVk?t=816

### Learn Regular Expressions In 20 Minutes  




### Learn Regular Expressions In 20 Minutes  

/cat/g  找所有的 cat  

/e+/g  找所有的 e and ee  

/ea?/g  找所有的 e and ea  

/ea*/g  找所有的 e and ea and e[aa]

/.ea/g  找所有的 *ea NO ea  

/\./g  找所有的 .  


/\w/g  找所有的 英文字(大小寫)  
/\w{4,5}/g  找所有的 連續5個英文字(大小寫) and 4個  
/[fc]at/g  找所有的 fat and cat  
/[a-z]at/g  找所有的 aat ... zat  
/[0-9]at/g  找所有的 0at ... 9at  

/(t|T)he/g  找所有的 the and The  
/t|The/g  找所有的 t and The  
/(c|a|t){2,3}/g  找所有的 cc ca ct aa ....

/^The/g  以The 開頭  
/\.$/g  以 . 結尾  (只有最後一個. )
/\.$/gm  以 . 結尾  (複數行, 以 . 結尾)  

look behind  
/(?<=[tT]he)/g 找 The and the 後面第一個字符(The_ _ = 目標)  
/(?<![tT]he)/g 找 The and the 後面第一個字符(The_ _ = 目標) 以外的所有字符    
/.(?=at)/g  找 bat cat dat ...  目標 = b c d  
/.(?!at)/g  找 bat cat dat ...  除了 b c d 以外所有字符  


手機號碼 regex  
/(\d{4})[ -]?(\d{3})[ -]?(\d{3})/gm  
0944123456  
0944 123 456  
0944-123-456  

/\(?(\d{4})\)?[ -]?(\d{3})[ -]?(\d{3})/gm  
(0944)123456   

/\(?(\d{4})\)?[ -]?(\d{3})[ -]?(\d{3})/gm  
(0944)123456   




