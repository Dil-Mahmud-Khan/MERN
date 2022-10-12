const player={};
player.name="dil";
player.bat=function(){
    console.log("Code Well");
}
player.age=45;
// console.log(player)
// player.bat()



//
const student={
    name:'dil',
    job:'kichuina',
    ball:function(){
        console.log("Also a baller")
    },
    salary:10000
}

//object constructor
const person=new Object();
// console.log(person);


//createing method
const kaka=Object.create(student);
// console.log(kaka.name);


class Person{
    name="Mahmud";
    age=22;
    constructor(address){
        this.address=address;
    }
}
const person1=new Person("Tangail");
// console.log(person1);


//with function


// function Car(model,price){
//     this.model=model;
//     this.price=price;
// }
// const tes=new Car("Bugatti",12)