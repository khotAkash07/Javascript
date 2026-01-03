let StringOps = new Promise((resolve,reject)=>{

    let str = "Akash Khot"
    let str2 = "Akas Khot"

    if(str === str2){
        resolve("Strings are same");
    }
    else{
        reject("Strings are not same");
    }
});
StringOps.then((res)=>{console.log(res)});
StringOps.catch((err)=>{console.log(err)});