// Primitive
//symbol - makes the value unique
 const id = Symbol('123')
 const anotherId = Symbol('123')

 console.log(id === anotherId);

 //Reference
 //arrays
 const heros =["App", "natraj", "doga"]
 //obj
 let myobj= {
    name: "juhi",
    age: 25,
 }

 //function
 const myFunction = function()
 {
    console.log("Hello");
 }

 //**************memories*********************/
 //Stack(PRIMITIVE), Heap(REFERENCE)

 //STACK
 let myName = "JuHI"
 let anotherName = myName
anotherName = "Shilpi"
 console.log(myName);
 console.log(anotherName);

 let userOne ={
    email: "usr@gmail.com",
    upi: "user@sbi"
 }

 let userTwo = userOne
 userTwo.email = "user@google"

 console.log(userOne.email);
 
 console.log(userTwo.email);

 