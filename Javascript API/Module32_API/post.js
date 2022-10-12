function loadPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>displayLoadPosts(data))
}

function displayLoadPosts(data){
    const ul=document.getElementById("post-container");
    for(user of data){
        console.log(user.name);
        const li=document.createElement("div");
        li.classList.add('dil')
        li.innerHTML=`
        <h3>Name:${user.name}</h3>
        <h3>ID: ${user.id}</h2>
        <h3>Title: ${user.title}</h2>
        `;
        ul.appendChild(li);
    }
}