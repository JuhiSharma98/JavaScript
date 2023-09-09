let score = "33"
let score1 = "33abc"
let score2 = null
let score3 = undefined
let score4 = false

let score5 ="Juhi" //it can't be converted to number

//console.log(typeof score);
//console.log(typeof(score));

//to convert in number

let valueInNumber = Number(score)
console.log("Output for string '33' to number: ");
console.log(typeof(valueInNumber));

let valueInNumber1 = Number(score1)
console.log("Output for mixec string '33abc' to number: ");
console.log(typeof(valueInNumber1)); //but "33abc" should not b converted in number
console.log(valueInNumber1); // output is "Nan" - means not a number

let valueInNumber2 = Number(score2)
console.log("Output for null: ");
console.log(typeof(valueInNumber2)); 
console.log(valueInNumber2); //output is 0

let valueInNumber3 = Number(score3)
console.log("Output for undefined: ");
console.log(typeof(valueInNumber3)); 
console.log(valueInNumber3); //output is undefined

let valueInNumber4 = Number(score4)
console.log("Output for boolean: ");
console.log(typeof(valueInNumber4)); 
console.log(valueInNumber4); //output is boolean


let valueInNumber5 = Number(score5)
console.log("Output for 'juhi': ");
console.log(typeof(valueInNumber5)); 
console.log(valueInNumber5); //output is NAN- not a number

// "33" =>> 33
// "33abc" =>> NaN
// TRUE =>> 1 ; FALSE =>> 0


// to convert 0 or 1 in boolean true or false
let isLoggedIn = 1
let isLoggedIn1 = ""
let isLoggedIn2="Juhi";

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log("For 1 or 0: ");
console.log(typeof booleanIsLoggedIn);

let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log("For empty string: ");
console.log(typeof booleanIsLoggedIn1);

let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log("For random string: ");
console.log(typeof booleanIsLoggedIn2);

// 1 =>> true
// 0 =>> false
// "" =>> false
// "juhi" =>> true

//to convert in string
let someNumber = 33

let stringNumber = String(someNumber)
console.log("For string conversion: ");
console.log(typeof stringNumber);

// **************************OPERATIONS****************************//

let value = 3
let negValue = -value
console.log("Neagtive of the value is: ");
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2**7); //power
console.log(2*2);
console.log(2/2);
console.log(2%2);

let str1 = "hello"
let str2 = " juhi"
let str3 = str1 + str2
console.log(str3);

console.log("1"+2); //out put will be 12
console.log(1+3);//output wil be 3
console.log(1 +6+"9"); // 79
console.log("1" +6+9); //169
console.log("1" +6+"9");//169



let gameCounter = 89
gameCounter++;
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);