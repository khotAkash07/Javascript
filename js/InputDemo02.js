
let readline = require("readline");

let r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

r1.question("Enter number to checking eligibility for vote : ", function (number){
    console.log(number);
    r1.close()
});