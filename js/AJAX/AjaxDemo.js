let LoadData = () => {

    document.getElementById("one").innerHTML = "Enter into LoadData";

    setTimeout(()=>{
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = ()=>{
            if(xhr.readyState === 4 && xhr.status === 200){
                document.getElementById("one").innerHTML = xhr.responseText;
            }
            else{
                document.getElementById("one").innerHTML = "Not Found";
            }
        };

        xhr.open("get","https://jsonplaceholder.typicode.com/posts/1",true);
        xhr.send();
    },4000)

}