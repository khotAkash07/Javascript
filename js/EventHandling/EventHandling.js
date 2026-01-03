
let firstVal = document.querySelector("#second")
let secVal = document.querySelector("#third")
let thirdVal = document.querySelector("#third")
let fourthVal = document.querySelector("#forth")
let container = document.querySelector("#container")

document.querySelector("#submit").addEventListener("click", (e) => {
    console.log(firstVal.innerText)
    firstVal.innerText = "Akash Khot";
})

document.querySelector("#submit").addEventListener("click", (e) => {
    console.log(secVal)
    secVal.style.backgroundColor = "red"
})

document.querySelector("#submit").addEventListener("click", (e) => {
    const newElemt = document.createElement("h1");

    newElemt.innerText = "This is new Element";

    container.appendChild(newElemt);

})