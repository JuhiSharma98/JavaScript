const user = {
    username:"juhi",
    price: 999,
    welcomemessage: function()
    {
        console.log(`${this.username}, welcome to the website`) //this used refer contexting current 
        console.log(this); //tells about where is the current context
    }
}
user.welcomemessage()
user.username = "sam"
user.welcomemessage() //here it will print sam because the current context has een changes from line 6 to line 10 because of "this"
console.log(this); 

//"this" gives other values in function
function chai()
{
    let username = "hitesh"
    console.log(this);// will give other values
    console.log(this.username); // will give undefined as it does'nt works
}
chai()


// this gives empty paranthesisi in arrow function
/*const chai = () => {
let username ="hitesh"
console.log(this);
} 
chai()*/

//*****declaring using arrow*****/

//1. basic arrow function [when using paranthesisis return keyword has to be defined]
const addTwo = (num1, num2) => {
    return num1 + num2
} 
console.log(addTwo(8,9))

//2. implicit return arraow func.
const addotwo = (num1, num2) =>  num1 + num2
console.log(addTwo(8,9))
  //2a. const addotwo = (num1, num2) =>  (num1 + num2)
console.log(addTwo(8,9))

//3. return object
const add= (num1, num2) => ({username: "juhish"})
console.log(add());
















