let str = "akash";
let rev = "";
function performOpp() {
    for(let i of str){
        rev = i + rev;
    }
    console.log(rev);
}
performOpp();