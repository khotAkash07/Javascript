const marvel_heros = ["ironMan","Thor","Wanda"]
const indian_Heros = ["Shaktiman","krish","Flyingjatt"]

//----------------------- push -----------------------

//marvel_heros.push(indian_Heros) // Take array as a input and consider as a last element
//console.log(marvel_heros);

//----------------------- concat -----------------------

// const all_heros = marvel_heros.concat(indian_Heros)
// console.log(all_heros);

//----------------------- Spred -----------------------

const allHeros2 = Array(...marvel_heros,...indian_Heros)
//console.log(allHeros2);

//----------------------- flat -----------------------

const twoDArray = [1,[2,3,4],[5,6,7],8,9]
const flatArray = twoDArray.flat(Infinity); //falt method is used to convert two ar three dimentional array into single dimensions 

console.log(flatArray); 


//----------------------- From -----------------------
console.log(Array.from(12345));
console.log(Array.from(`Akash khot shivpuri`));

//----------------------- of function -----------------------

let a=10
let b=20
let c=30

const mergeArray = Array.of(a,b,c) // A of function takes any values as a argument and merge them into array
console.log(mergeArray);

