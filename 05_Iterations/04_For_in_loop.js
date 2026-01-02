// For in loop is used to print objects as well as key value pairs

const myObj = {
    name1 : "Akash",
    age : 23,
    Adress : "Shivpuri"
}

for(const key in myObj){
   // console.log(`${key} => ${myObj[key]}`);
    
}

// ======================== For in loop with Array ========================

const myArr = [12,13,14,15,16]

for(const array in myArr){
   // console.log(`${array} => ${myArr[array]}`);    
}

const n  = 12 
console.log(n.toString(16)); 
