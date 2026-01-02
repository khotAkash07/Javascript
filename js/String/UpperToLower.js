let str = "akash";

function performOpp() {
    for(let i of str){
        let num = i.charCodeAt(0);
        let char = num - 32;
        console.log(String.fromCharCode(char));
    }
}

performOpp();