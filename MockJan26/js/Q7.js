function mergeAndCount(...arrays) {
    let merged = [].concat(...arrays);
    console.log("Merged Array:", merged);
    console.log("Count of Elements:", merged.length);
}

mergeAndCount([1, 2], [3, 4], [5, 6]);