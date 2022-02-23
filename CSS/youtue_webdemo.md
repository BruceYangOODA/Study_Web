

[Can I Create This Complex Animated Multistep Form?](https://www.youtube.com/watch?v=VdqtdKXxKhM&ab_channel=WebDevSimplified)  20220223    
[Can I Create Accessible CSS Toggle Buttons?](https://www.youtube.com/watch?v=N8BZvfRD_eU&ab_channel=WebDevSimplified) 20220223  





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


### Can I Create Accessible CSS Toggle Buttons 
自製 TOGGLE BUTTONS   
[YOUTUBE](https://youtu.be/N8BZvfRD_eU?t=550)  








