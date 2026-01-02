let abc = new Promise((resolve, reject)=>{
    let result = false  ;

   setTimeout(()=>{
       if(result){
           resolve("Resolve successfully");
       }else{
           reject("Reject successfully");
       }
   },4000)
});

abc.then(result=>{
    console.log(result);
})
.catch(err=>{
    console.log(err);
})