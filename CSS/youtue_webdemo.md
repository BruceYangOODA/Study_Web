

[Can I Create This Complex Animated Multistep Form?](https://www.youtube.com/watch?v=VdqtdKXxKhM&ab_channel=WebDevSimplified)  20220223    






### Can I Create This Complex Animated Multistep Form  

<code>
  < div class="card" data-step="1">
  < /div>
</code>


.card {  
  background-color: white;  
  border: 1px solid #333;  
  border-radius: .5rem;  
  padding: .5rem;  
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












