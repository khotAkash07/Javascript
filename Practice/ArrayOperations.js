let myArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let charArr = ['a','b','c','d','e','f','g','h','i','j'];

console.log("Original Arrays :");
console.log(myArr);
console.log(charArr);

//Add element at the end
console.log("After push One element");
myArr.push(21);
console.log(myArr);
//Remove element
console.log("After remove from last element");
myArr.pop();
console.log(myArr);

console.log("Numbers who divisible by 2");
console.log(myArr.filter(x=>x%2===0));

//Remove element
console.log("After remove first element");
myArr.shift();
console.log(myArr);

//Keys of array
myArr.keys().forEach(x => console.log(x));