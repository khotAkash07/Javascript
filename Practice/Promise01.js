//     const AgeCheck = new Promise((resolve, reject)=>{
// 	let age = 12;
// 	if(age > 18){
// 		resolve("You are eligible to voting");
// 	}else{
// 		reject("You are not aligible for voting");
// 	}
// });
//
// AgeCheck
// .then((msg)=>console.log(msg))
// .catch((err)=>console.log(err));

const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
    .then(values => {
        console.log("Sum:", values.reduce((a, b) => a + b));
    })
    .catch(err => console.log(err));
