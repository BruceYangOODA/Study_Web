

[Learn Regular Expressions In 20 Minutes](https://www.youtube.com/watch?v=rhzKDrUiJVk&t=809s&ab_channel=WebDevSimplified)  2022-02-21



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

