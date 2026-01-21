let a = 10
let b = 20
const c = 30

if(true){
    let a = 100
    let b = 200
    const c = 300

    console.log(a)
    console.log(b)
    console.log(c)
}
console.log("This is out side of the Scope");
console.log(a)
console.log(b)
console.log(c)

//--------- Nested Functions -------

function parent(){
    const parentName = "i am parent "

    function child()
    {
        const childName = ` i am child`
        console.log(parentName + childName)
    }

     console.log(parentName + childName) // occure Error while using childName variable outside its scope
    child()
}

//parent()

// -------- Types of declaring functions --------

function parent2(){
    console.log("This is regular Function");
    
}
parent2()

const myFunction = function(){
    return `This is function with variable`
}
console.log(myFunction());

