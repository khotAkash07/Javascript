
let arr = [12, 45, 2, 67, 33, 89, 21];

let max = 0;
for(let i of arr){
    if(max < i) {
        max = i;
    }
}

console.log(max);

//Find Minimum
let min = max;
for(let i of arr){
    if(min > i){
        min = i;
    }
}
console.log(min);

//Sum Of all Element

let sum = 0;
for(let i of arr){
    sum = sum + i;
}
console.log(sum);

//Find Average of all element

console.log(sum/arr.length);

//5. Search for an Element (Linear Search)

let target = 33;
let flag = false;
for(let i in arr){
    if(arr[i] === target){
        console.log(target+" Present at "+i+"th Index.");
        flag = true;
    }
}
if(!flag){
    console.log(target+" Not Found");
}

//6. Count Frequency of Each Element

arr = [4, 5, 6, 4, 5, 7, 4];

arr.sort();
for(let i = 0; i < arr.length; i++){
    let count = 0;
    for(let j = i+1; j < arr.length; j++){
        if(arr[i] === arr[j]) {count++;}
        else{ break;}
    }
    console.log(arr[i]+"Present in array for "+(count+1)+" Times.");
    i = i+count;
}

//7. Reverse an Array

arr = [10, 20, 30, 40, 50]

let start = 0;
let end = arr.length - 1;

while(start < end){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
}
console.log(arr);

//Copy Array

let source = [5, 10, 15, 20, 25];
let dest = [...source];

console.log(dest)