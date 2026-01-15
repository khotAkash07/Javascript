let arr = [10,20,33,40,50,70];

let sum = arr.reduce((a,b)=>a+b);
console.log(sum);

console.log(arr.filter((a)=> !(a % 2 === 0)))