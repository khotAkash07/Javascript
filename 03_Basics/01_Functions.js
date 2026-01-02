//This is File to perform function related operations

function firstFunction(){
    console.log(`This is first Function program`);
}

// firstFunction()

function getDataFunction(num1, num2){
    console.log(num1+num2);
}
// getDataFunction(12,2)

function returnFunction(name){
    return `Hello ${name}, Welcome to the class...`
}

// console.log(returnFunction("Akash Khot"))

//---------- Function with a Object ----------

const myData={
    myName : "Akash",
    age : 23
}

function printMyData(obj){
    return `Hello ${obj.myName}, Your age is ${obj.age}`
}
// console.log(printMyData(myData))

//---------- Function with a Array ----------

const myMarks = [90,50,60,70,80]
function printArrayData(arr){
    return `your maths marks = ${arr[2]}`
}
// console.log(printArrayData(myMarks))

//---------- REST Operation ----------

function restFunction(...marks){ //It is used to perform Rest operations(...marks)
    return `This is my Rest Operation Function and the 2nd value given = ${marks[2]}`
}

console.log(restFunction(10,20,30,40,50))

