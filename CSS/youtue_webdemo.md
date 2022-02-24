

[Can I Create This Complex Animated Multistep Form?](https://www.youtube.com/watch?v=VdqtdKXxKhM&ab_channel=WebDevSimplified)  20220223    
[Can I Create Accessible CSS Toggle Buttons?](https://www.youtube.com/watch?v=N8BZvfRD_eU&ab_channel=WebDevSimplified) 20220223  
[How To Make Pricing Table Using HTML And CSS | Price Plan on Website In HTML & CSS](https://www.youtube.com/watch?v=LohRL_sw9N0)  20220224  
[This Simple Trick Makes Your Website 83% Better Looking](https://www.youtube.com/watch?v=mxHoPYFsTuk) 20220224  
[How To Make A House Rental Website Part 3 | Make Compete Website Design Using HTML & CSS](https://www.youtube.com/watch?v=IOoWWr0si3s&ab_channel=EasyTutorials) 20220225  






### Can I Create This Complex Animated Multistep Form 表單樣式    
### Can I Create Accessible CSS Toggle Buttons 自製 TOGGLE BUTTONS   
### How To Make Pricing Table Using HTML And CSS BUTTON HOVER 動態效果  
### This Simple Trick Makes Your Website 83% Better Looking 3D背景卷軸滾動  
### HTML & CSS Tutorial Learn HTML & CSS | Full Stack Training | Edureka Rewind 柵欄表格  


### Can I Create This Complex Animated Multistep Form  

< form multi-step-from >
< div class="card" data-step="1">  
&nbsp;< h3>這是首頁< /h3>  
&nbsp;< div class="form-group">  
&nbsp;&nbsp;< label for="email">Email< /label>  
&nbsp;&nbsp;< input type="email" name="email" id="email">  
< /div>  
< form>  

.multy-step-form {  
overflow: hidden;  
position: relative;  
height: 300px;  
}  
.card {  
  background-color: white;  
  border: 1px solid #333;  
  border-radius: .5rem;  
  padding: .5rem;  
  display: none;  or opacity: 0;   
position: absolute;  
/* top: 0;  
left: 0;  
width: 100%;  */  
動畫效果  
transform: translateX(200%);  
transition: 500ms ease-in-out;  
}  
.card.active {  
display: block;    
動畫效果  
animation: slide 500ms ease-in-out forwards;  
trasform: translateX(0);  
opacity: 1;  
transition-delay: 500ms;  
}  
@keyframes slide {  
0% {  
transform: translateX(200%);  
opacity: 0;  
}  
100% {  
transform: translateX(0);  
opacity: 1;  
}  
}  

.form-group {  
  display: flex;  
  flex-direction: column;  
  margin-bottom: .5rem;  
  gap: .25em;  
}  

.form-group:last-child {  
margin: 0;  
}  

.form-group > label {  
font-weight: bold;  
font-size: .8em;  
color: #333;  
}  

.form-group > input {  
border: 1px solid #333;  
border-radius: .25em;  
font-size: 1rem;  
padding: .23em;  
}  


### Can I Create Accessible CSS Toggle Buttons 自製 TOGGLE BUTTONS     
[YOUTUBE](https://youtu.be/N8BZvfRD_eU?t=550)  



### This Simple Trick Makes Your Website 83% Better Looking 3D背景卷軸滾動  

補

### How To Make A House Rental Website Part  
[GOOGLE MAP IFRAME](https://youtu.be/IOoWWr0si3s?t=1293)
[五星評價ICON](https://youtu.be/IOoWWr0si3s?t=390)  
[display: grid; grid-template-areas 不同欄寬列高的grid](https://youtu.be/IOoWWr0si3s?t=512)  
[表單樣式](https://youtu.be/IOoWWr0si3s?t=787)  




  
