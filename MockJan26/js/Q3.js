let arr = [10, 2, 5, 2, 6, 3, 7, 9];

console.log("Before pop :");
console.log(arr);
arr.pop();

console.log("After pop :");
console.log(arr);

console.log("Before Sort :");
console.log(arr);
arr.sort((a, b) => a - b);
console.log("After sort :");
console.log(arr);

let flag = false;
for(let n of arr){
    if(n === 5) flag = true;
}
console.log(flag?"5 found":"5 Not Found");
