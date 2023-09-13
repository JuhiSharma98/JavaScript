//Immediately Invoked function expression(IIFE)

//1. immediately invoking of normal function
(function chai(){
    console.log(`DB CONNECTED`)
})();

//. Using arrow function 
( () => {
    console.log(`DB CONNECTED TWO `)
})(); 

//3. Using arrow function passing argument
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('hitesh'); //semicolan is necessary to end one iffi so that otehr can be executed.