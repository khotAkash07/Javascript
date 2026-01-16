let frequencyCalculator =(arr)=>{
    let freq = {};
    arr.forEach(x =>
        freq[x] = freq[x] ? freq[x] + 1 : 1
    );
    console.log(freq);
}

frequencyCalculator([1,2,3,1,2,5,4,5,1,3,4,5,6]);

