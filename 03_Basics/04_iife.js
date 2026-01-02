// immidiatly invoked function environment is used to avoid global polution.
//  means when we create global variables that variable can not impact on this function

((name1) => {
    console.log(`Hello ${name1}, This is my iife function 1`); 
})("Akash");

((name2) => {
    console.log(`Hello ${name2}, This is my iife function 2`); 
})("Akash");

((num1, num2) => {
    console.log( num1 + num2)
})(12,12)