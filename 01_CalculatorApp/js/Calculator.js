window.onload = () => {
    document.querySelector("#num1").focus();
};

let clear = () =>{
    document.querySelector("#num1").value = "";
    document.querySelector("#num2").value = "";
    document.querySelector("#result").value = "";
    document.querySelector("#operation").value = "value";
    document.querySelector("#num1").focus();
}

document.querySelector("#btn-clear").addEventListener("click", clear);


let doTask = () =>{

    if (document.querySelector("#num1").value === "") {
        alert("Please enter a First number");
        document.querySelector("#num1").focus();
    } else if (document.querySelector("#num2").value === "") {
        alert("Please enter a Second number");
        document.querySelector("#num2").focus();
    } else if (document.querySelector("#operation").value === "value") {
        alert("Please select any operator");
        document.querySelector("#operation").focus();
    }else{
        let a = parseFloat(document.querySelector("#num1").value);
        let b = parseFloat(document.querySelector("#num2").value);
        let operator = document.querySelector("#operation").value;
        function operation(){
             if(operator === "+"){
                return a+b;
             }else if(operator === "-"){
                 return a-b;
             }else if(operator === "*"){
                 return a*b;
             }else {
                 return a/b;
             }
        }
        document.querySelector("#result").value = operation();
    }
}
document.querySelector("#btn-doTask").addEventListener("click",doTask);
