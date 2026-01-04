let arr = [1, 2, 3, 4];
let reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}

console.log(reversed); // [4, 3, 2, 1]
