let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

let myNewdate = new Date("01-24-2025")
console.log(Math.floor(myNewdate.getTime()/1000));

let newDate = new Date(2001,7,23,10,20,30)

console.log(newDate.getTime());

console.log(Date.now());


