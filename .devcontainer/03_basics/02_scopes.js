//when {} are used in if-else of functions then var declaration is not good as it doesnot work as expected
//now in this case the scope of a,b, c are limited in if loop thus should give error while logging outside the loop
//but var doesnot resitricts to loop and gets printed.

//outside is global scope
let a =300
//inside if is block scope
if(true)
{
 let a = 10
 const b = 20
 //var c = 30
 console.log("block scope of a:", a)
}
console.log("global scope of a: ", a)
//console.log(a);
//console.log(b);
//console.log(c);


//nested scope
function one(){
    const userName= "juhi"

    function two(){
        const website ="youtube"
        //to check if username is accessible
        console.log(userName);
        console.log(website) //this will be accessible as two is inside one
    }
  //  console.log(website); //this can't 

    two()
}
one()
///////////*******///// */

if(true)
{
    const user = "juhi"

    if(user === "juhi")
    {
        const web =" youtube"
        console.log(user + web);
    }
    //console.log(web); //error
}

//console.log(userName); //error

//****************************interesting***********
//1.
addone(5) //will work
function addone(num){
  return num+1   
}
// addone(5) //will work

//2.
addtwo(5) //will not work: we are holding funtion in a variable declared in line 62
const addtwo = function(num)
{
    return num+2
}
// addtwo(5) //will work
