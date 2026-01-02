const arr = [1,2,3,4,5]

// arr.push(2)
// arr.shift()
// arr.unshift(3)
// arr.pop()

console.log(arr);
console.log(arr.includes(8));
console.log(arr.indexOf(3));


const arr2 = new Array("Akash","Abhi","Shubham","Digvijay")
console.log(arr2);

console.log(arr2[2]);

//-----------------------Slice-----------------------

console.log(arr2.slice(0,3)); // Only return element between given range

arr2.splice(0,2) // Splice delete given range from array
console.log(arr2);

