const maincontainer= document.getElementById('main-container');

const section=document.createElement('section');
const h1=document.createElement('h1');
h1.innerText="Food List";
section.appendChild(h1);





const dress=document.createElement('section');
dress.innerText=`
<h1>Dress Section</h1>
<ul>
<li>Shirt</li>
</ul>
`
maincontainer.appendChild(dress);


maincontainer.appendChild(section);