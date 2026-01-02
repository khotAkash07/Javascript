//This is Javascript Objects
const mySymbol = Symbol("key1")
let myObject = {
    myName : "Akash khot",
    age : 23,
    adress : "Akash@gmail.com",
    "my Name2": "Abhi khot",
    [mySymbol] : "This1"
}

console.log(myObject.myName)
console.log(myObject["age"])
console.log(myObject["my Name2"])

//Object.freeze(myObject)

myObject.Greeting = function(){
    console.log(`hey... Good Morning ${this.myName}`)
}

console.log( myObject.Greeting())