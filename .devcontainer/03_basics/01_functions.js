function samyName()
{
    console.log("J");
    console.log("u");
    console.log("h");
}
samyName()
function addtwo(num1, num2) //parameters
{
    console.log(num1+num2);
}

addtwo(7, 8) //arguments

/*const result = addtwo(8, 6)
function addtwo(num1, num2) //parameters
{
    console.log(num1+num2);
}*/

function loginUserMessage(username="sam") //sam is just to provide default value
{
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())


function calculateCartPrice(...num1) //here "..." is acting as rest operator
//so rest operator binds the arguments in one parameter
{
    return num1
}
console.log(calculateCartPrice(200, 400, 500))

function calculatePrice(var1, var2,...num1) //here "..." is acting as rest operator
//so rest operator binds the arguments
{
    return num1
}
console.log(calculatePrice(200, 400, 500, 900, 700)) //in this var1=200, var2=400 and rest are assigned to num1


//passing objects in function
const user = {
        username: "juhi",
        price: 199
}

function handleObject(anyObj){
        console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`)
}
//way 1:

//handleObject(user)

//way 2

handleObject({
    username: "juhi",
    price: 399
})



const newArray = [200, 400, 800 ,100]

function returnSecondValue(getArray)
{
    return getArray[1]
}
//way 1
//console.log(returnSecondValue(newArray))
//way 2
console.log(returnSecondValue([200, 400, 600, 700]))