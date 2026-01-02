// This is used to refer current class object
// When this used in global scope in browser is wil return window object
// And when we define in node it will return undefine statement

//------------------------********************----------------------------------------------

// const myData = function myFuncton(name){
//     console.log(`${name} welcome to the course`);
    
// }

let myData = (name) =>{
    console.log(`${name} welcome to the course`);
}
myData(`Akash`)

const chai = {
    myName : "Akash",
    myAge : 23,

    myFunc :function () {
        console.log(`wlcome ${this.myName}, your age is ${this.myAge}`);
        
    }
}
console.log(chai.myFunc());

//---------------- Single line Function ----------------

const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(223,234))
