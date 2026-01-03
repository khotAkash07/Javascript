let myArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let charArr = ['a','b','c','d','e','f','g','h','i','j'];

for(let i of myArr){
    //console.log(i);
}

for(let i in charArr){
    //console.log(charArr[i]);
}

let newArr = myArr.splice(1,8,1,1,1,1);
console.log(myArr);