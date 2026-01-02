window.onload = () =>{
    document.querySelector("#firstNum").focus();
}

const clr = () => {
    document.querySelector("#firstNum").value = "";
    document.querySelector("#secNum").value = "";
}
let add = () =>{
    let a = parseFloat(document.querySelector("#firstNum").value);
    let b = parseFloat(document.querySelector("#secNum").value);
    let c = a+b;
    Swal.fire("Addition is = ",c.toString());
    clr();
}

document.querySelector("#btn-add").addEventListener("click", add);
