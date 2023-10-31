//const coding = ["js", "ruby", "java", "python", "cpp"]
/*for each does'nt return values*/
//const values = coding.forEach( (item) => {
   //// console.log(item);
  //  return item
//})

//console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* filter returns values, it have call back func where each value is accessed followed with the condition which will then return values*/
const newNums = myNums.filter( (num) => {
        return num > 4
     } )
     console.log(newNums);

    
