// functions

JsUser.greeting = function()
{
    console.log("Hello");
}

console.log 

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