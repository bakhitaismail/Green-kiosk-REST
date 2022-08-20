let fetch=require("node-fetch")

fetch('.package-lock.json')
.then(function(response){
    return response.json();
})
.then(function(data){
    method:'GET'
    headers:{
        "Content-Type"; "application/json"
    }
    for (var i-0; i<data.lenth; i++){
        document.getElementById("data").innerHTML
       console.log()
    }
})