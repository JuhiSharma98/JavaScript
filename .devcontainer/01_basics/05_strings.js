const name ="Juhi"
const repoCount = "5"

// console.log(name + repoCount + "Value"); //bad way

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('juhists')

console.log(gameName[0]);

//to access prototype from inspect console
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase()); //uses stack thus original value is not chaged but a copy is created
console.log(gameName.charAt(2)); //pass position
console.log(gameName.indexOf('h')); //to know char position

const newString = gameName.substring(0, 2) //takes only +ve value
console.log(newString);

const anotherString = gameName.slice(-8, 3) //takes -ve values also
console.log(anotherString);

const newStringOne = "  juhi  " //with spaces
console.log(newStringOne);
console.log(newStringOne.trim()); //removes the spaces


const url ="https://juhi.com/juhi%3"

console.log(url.replace('%3', '-')); //to replace the value in the url

