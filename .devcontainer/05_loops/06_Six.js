const coding = ["js", "ruby", "java", "python"]
const values = coding.forEach( (item) => {
    //console.log(item);
    return item
})
console.log(values)
//filter
/*1.*/
const myNum = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNum.filter( (num) => num > 5)
console.log(newNums);

/*2.*/
//in scope
const newNums2 = myNum.filter( (num) => {
    return num > 4
})
console.log(newNums2);


/*3.*/

const newums = []

myNum.forEach((num) =>{
    if(num>4){
        newums.push(num)
    }
})
console.log(`new`)
console.log(newums);