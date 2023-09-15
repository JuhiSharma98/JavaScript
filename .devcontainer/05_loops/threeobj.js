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
    console.log(key);
}