//
// let readline = require("readline");
// let r1 = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// })
//
// r1.question("Enter any number",function(name){
//     console.log(name);
//     r1.close();
// });

let readline = require("readline");

let r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r.question("Enter number to find table : ", function (num){
         num = Number(num);
        console.log(typeof num);

        for(let i = 0; i < num; i++){
            console.log(num*i);
    }
        r.close();
});














