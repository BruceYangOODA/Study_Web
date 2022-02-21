
[Asynchronous JavaScript Crash Course 2022](https://www.youtube.com/watch?v=exBgWAIeIeg&t=1727s&ab_channel=Codevolution)  2022-02-21    
[Advanced JavaScript Crash Course 2022](https://www.youtube.com/watch?v=R9I85RhI7Cg&ab_channel=Codevolution)  2022-02-21

[Learn Resize Observer In 5 Minutes](https://youtu.be/M2c37drnnOA)  

[Learn socket.io in 30 Minutes](https://www.youtube.com/watch?v=z3MSWGozhuk)  

### Advanced JavaScript Crash Course 2022  
prototype  
call  





### Advanced JavaScript Crash Course 2022  

#### prototype  
屬性儲存於這個物件  
function Person(fN, lN) {  
this.firstName = fN;  
this.lasetName = lN;  
}  

Person.prototype.getFullName = function () { return this.firstName + ' ' + this.lastName; }  

#### call  

function sayName() { console.log('My name is ${this.name}');}  
person = new Person('aa','bb')  
sayName.call(person);  
-> My name is aa bb  
this == person  

####  
for(const word of 'hello word!') { console.log(word); }












