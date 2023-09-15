const myObj = {
    js: 'javascript',
    cpp: 'C++',
    RB: "RUBY",
    swift: "swift by apple"

}
for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`)
}

const programming = ["js", "rb", "py", "java"]
for (const key in programming) {
    console.log(key); //gives the index / key
    console.log(programming[key]);
}

const map = new Map() 
map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('FR', "FRANCE")
map.set('IN', "INDIA")

for (const keys in map) {
    console.log(keys); //will give nothing to print
    
}
