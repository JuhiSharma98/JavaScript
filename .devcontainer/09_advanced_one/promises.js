const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve() //connected with .then
    }, 1000)
} )//created promise

//consume promise
promiseOne.then(function(){
    console.log("Promise consumed");
}) //resolve direct connection is with .then, receives a call back/ func which automatically receives an argument that is the value returned from above code of promise created
/*************************************************************/
//way 2 to create and consume promise

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved")
})

/*************************************************************/
//way 3 to create and consume promise

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"}) //passing data
    }, 1000)
})
promiseThree.then(function(user){ //can pass argument in fun: user that will receive passed data
    console.log(user);
})

/*************************************************************/
//way 4 to create and consume promise

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false  //true
        if(!error){
            resolve({usrname: 'juhi', password: "123"})
        } else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
//chaining
promiseFour
.then((user) => {
    console.log(user);
    return user.usrname
})
.then((userN) =>{
    console.log(userN);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))

/*************************************************************/
//way 5 to create and consume promise

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error =true
        if(!error){
            resolve({usename: 'javascript', password: '123'})
        } else {
            reject('Error: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
    console.log(response);

    }catch(error){
        console.log(error);
    }
}

consumePromiseFive()
/*************************************************/
/*console.log("*************sixth***************");
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        //console.log(response);
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error)
    }
    
}
getAllUsers()*/
/*************************************************/
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
return response.json()
})
.then((data) => {
    console.log(data);
})
.catch(() => console.log(error))
