//dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString);
console.log(myDate.toJSON);
console.log(myDate.toLocaleString);

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDay()+1);

newDate.toLocaleString('default', {
    weekday: "long",
    month: "numeric",
    })

    console.log(newDate);