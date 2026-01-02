//--------------------Object singletone--------------------

const myObj = new Object();

//--------------------Regural objects--------------------

const myObj2 = {};


myObj2.myName = "Akash Khot"
myObj2.myID = 123
myObj2.myEmail = "khotakash0101@gmail.com"

//console.log(myObj2);

const First = {1 :  'a',2 : 'b'}
const First2 = {5 :  'e',6 : 'f'}
const second = {3:'c',4:'d'}

//const third = Object.assign(First,second)
const third = {...second,...First,...First2}

//console.log(third);

//--------------------Array Objects --------------------

const myArrayObject = [
    {
        name : "Akash Khot",
        age : 23
    },
    {
        village : "Shivpuri",
        landMark : "Siddheshwar Temple"
    }
]
//console.log(myArrayObject[1].village);

//--------------------Nested Objects-------------------- 

const details = {
    fullName : {
        userFullName :{
            name : "Akash",
            age : 123
        },
        AdminFullName : {
            name : "Admin",
            pass : 12334
        }
    }
}
//console.log(details.fullName.userFullName.age);

//--------------------Find Keys And Values --------------------

//console.log(Object.keys(details.fullName.userFullName));
//console.log(Object.values(details));

//--------------------Check value is present or not--------------------

console.log(details.hasOwnProperty("12334"));

