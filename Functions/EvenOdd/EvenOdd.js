window.onload = () => {
    document.querySelector("#num").focus();
};
const isEmpty = () => {
    if(document.querySelector("#num").value === ""){
        Swal.fire("Please enter a number");
        document.querySelector("#num").focus();
    }
}
let performOpp = () => {
    isEmpty();
    let val = parseFloat(document.querySelector("#num").value);

    let demo1 = document.querySelector("#demo1");
    let demo2 = document.querySelector("#demo2");

    if (val % 2 === 0) {
        //Swal.fire("This is even");
        demo1.classList.remove("bg-red-500");
        demo1.classList.add("bg-green-500");
        demo2.classList.remove("bg-green-500");
        demo2.classList.add("bg-red-500");
    } else {
        //Swal.fire("This is odd");
        demo1.classList.remove("bg-green-500");
        demo1.classList.add("bg-red-500");
        demo2.classList.remove("bg-red-500");
        demo2.classList.add("bg-green-500");
    }
};

const findSquare = () => {
    isEmpty();
    let num2 = parseFloat(document.querySelector("#num").value);
    let square = num2*num2;

    document.querySelector("#sqr").value = square;
}

const findPrime = () =>{
    isEmpty();

    let num1 = parseFloat(document.querySelector("#num").value);
    let flag = false;
    for(let i = 2; i <= num1/2; i++){
        if(num1 % i === 0){
            flag = true;
            break;
        }
    }
    if(flag){
        document.querySelector("#prime").value = "Not a prime Number";
    }else{
        document.querySelector("#prime").value = "prime Number";
    }
}
document.querySelector("#btn-check").addEventListener("click", performOpp);
document.querySelector("#btn-square").addEventListener("click", findSquare);
document.querySelector("#btn-prime").addEventListener("click", findPrime);
