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


/*********************************************************************************************/

