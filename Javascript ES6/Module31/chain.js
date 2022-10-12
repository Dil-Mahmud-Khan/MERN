const user=[{id:1,name:"dil",job:"engineer"}]
console.log(user[0].name);      //

const data={
    count:333,
    data:[
        {id:1, name:"mahmd",job:"bekar"},
        {id:12, name:"fd",job:"bekar2"},
    ]
}
const firstjob=data.data[0].job;
console.log(firstjob);



const user1={
    id:4444,
    name:"Nicola Tesla",
    address:{
        street:{
            first:'Tangail',
            second:"First Floor",
            third:"left flat"
        },
        postOffice:"Jamurki",
        city:"tangail"
    }
}

const userFloor=user1.address.street.second;
console.log(userFloor)