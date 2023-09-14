// functions
/*const JsUser
JsUser.greeting = function()
{
    console.log("Hello");
}

console.log */

//*******************************OBJECTS*********************************************************** */

const tinderUser = new Object() //singletonOBJECT
const tinderUser1 = {} //non singleton object


tinderUser.id ="123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedin = false
console.log(tinderUser);

//nesting objects
const regularUser = {
    emmail: "sam@gmail.com",
    fullName: {
        userFullname: {
            firstName: "Jmaes",
            lastName: "jones"

        }
    }
}

console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = Object.assign({}, obj1, obj2) //empty paranthesis is given i.e empty array to make {}target and other obj as source
console.log(obj3);

//spread operator
const obj4 = {...obj1, ...obj2}
console.log(obj4);

//objects in array
const users = [
    {
        email: "user@goole.com",
        id: 6
    },
    {
        email: "user@goole.com",
        id: 6
    },
    {
        email: "user@goole.com",
        id: 6
    }
]

console.log(users[1].email);

console.log(Object.keys(tinderUser)); //the datatype wil be array in which we can loop
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//gives keys and values

console.log(tinderUser.hasOwnProperty('isLoggedin'));


/****************************************************more of objects*****************************************/
//declaring symbol  in object and add in the key
const mySym = Symbol("Key1")

const Juser = {
    name: "juhi",
    age: 24,
    [mySym]: "KEY2", //syntax to declare symbol in obj
    location: "Jaipur",
    email: "juhi@google.com",
    isLoggedIn: false,
    lastloggedin: ["Monday", "Sunday"]
}

console.log(`Email of user is ${(Juser.email)}`) 
//console.log(Juser["email"])//this will work as here key is given as string which is actuall input typew of the key in objects
//console.log(Juser[mySym]) //logging symbol

//change obj value
Juser.email = "hitesh@chatpt"
//Object.freeze(Juser) //freezing the values
//console.log(Juser)

//adding fun in obj

Juser.greeting = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(Juser.greeting());