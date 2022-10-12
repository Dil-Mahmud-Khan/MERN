function LoadData2(){
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res=>res.json())
    .then(data=>console.log(data))
}


function LoadUsers(){
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res=>res.json())
    .then(data=>DisplayUsers(data))
}

function DisplayUsers(data){
    console.log(data)
}