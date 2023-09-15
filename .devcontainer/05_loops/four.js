const coding = ["js", "ruby", "java", "python"]
//higher order function

coding.forEach( function (val) {
    console.log(val);
})

//using arrouw fun
coding.forEach((item) => {
    console.log(item);
})

//another way

function printme(item)
{
    console.log(item);

}
coding.forEach(printme);

//another way:
coding.forEach((item , index, array)=> {
console.log(item , index, array);
})
//retrieving a value from an array of objects
const mycoding = [
    {
        language: "javascript",
        languageFileName: "java"
    },
    {
        language: "pythonss",
        languageFileName: "python"
    },
    {
        language: "cpp",
        languageFileName: "C++"
    }
]

mycoding.forEach( (item) => {
    console.log(item.languageFileName);
})