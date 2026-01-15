let arr = [10,20,33,40,50,70];

let sum = arr.reduce((a,b)=>a+b);
console.log(sum);

console.log(arr.filter((a)=> !(a % 2 === 0)))

let arr2 = [[1,2,3],[4,5,6],[7,8,9]];
console.log(arr2.flatMap(a => a));

let str = "Akash Khot"

let strArr = Array.from(str);
console.log(strArr);