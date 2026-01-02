let arr = [1, 2, 3, 4, 5, 6]

for(const ar of arr){
   // console.log(ar)
}

const Greeting = "Hello World!"
for(const greet of Greeting){
   // console.log(greet);    
}

const d = new Map()

d.set("age" , 23)
d.set("Adress", "Shivpuri")
d.set("name" , "Akash")

//console.log(d);

for(const [key, value] of d){
   // console.log(`${key} => ${value}`);
    
}

const abc = new Map
abc.set("one" , "Akash")
abc.set("Two" , "Abhi")
abc.set("Three" , "Shubham")

//console.log(abc)

for(const [keys,val] of abc){
   //console.log(`${keys} => ${val}`)
}
for(const [keys,val] in abc){
   console.log(`${keys} => ${val}`)
}

// For of loop doesn't work with objects 

