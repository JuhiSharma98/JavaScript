//if
const temperature = 89
if(temperature === 41){
    console.log("less than 50")
}
else {
    console.log("temp is greater than 50")
}


const balance =5000
if (balance > 5000){
    console.log("less than");
} else if (balance <750){
    console.log("less than 7500");
} else {
    console.log("less than 12000")
}



const  userLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true
if(userLoggedIn && debitCard )
{
    console.log("Allow to buy course");
}

if (loggedInfromGoogle || loggedInfromEmail){
    console.log("user logged in");
}

const month = 3

switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
        //if break not used than the all the code after matching criteria is executed except default
        default:
            break;
}
//falsy values:
// false, 0, -0, BigInt On, "", null, undefined, NaN
//truthy values: "0", 'FALSE', " "//STRING WITH SPACE, [],{},function(){}

//to check array
const userEmail = []
if(userEmail.length === 0){
    console.log("Array is empty")
}

//to check object

const emptyObj = {}

if(Object.keys(emptyObj).length ===0)  //.keys creates array of keys of the object
{
    console.log("Object is empty");
}

//**************** used during getting responses when there are two responses */

/*Nullish Coalescing Operator (??): null undefined*/
let val1
let val2
let val3
let val4
val1 = 5 ?? 10

val2 = null ?? 10

var3 = undefined ?? 15

var4 = null ?? 10 ?? 90
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

/*Terniary Operator
  condition ? true : false*/
const iceTeaPrice = 100
iceTeaPrice<= 80 ? console.log("less than 80"): console.log("more tahn 80")