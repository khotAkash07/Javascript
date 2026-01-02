let coding = ["java","JavaScript","React","cpp"]

coding.forEach((val,index) =>{
    //console.log(index,"=> ", val)
})

function myfun(val,index){
   // console.log(index,"=> ", val);
    
}

coding.forEach(myfun)

let num1 = [1,2,3,4,5,6,7,8,9,10]
let num2 = []
num1.forEach( (n) => {
    if(n > 5){
        num2.push(n)
        
    }
} )
console.log(num2);

