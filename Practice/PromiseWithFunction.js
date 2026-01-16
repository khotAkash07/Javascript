let divide=(a,b)=>{
	return new Promise((resolve, reject)=>{
		if(b === 0){
			reject("Can not divide by zero");
		}else{
			resolve(a/b);
		}
	});
}

divide(10,2)
.then((ans)=>console.log("Answers is = ",ans))
.catch((err)=>console.log(err));
