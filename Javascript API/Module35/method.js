const student={
    name:"Abbas ali",
    money:2300,
    study:"math",
    subjects:['physics','chemistry','biology'],
    exam:function(){
        return this.name+' is attending exam';
    },
    improve:function(subjects){
        return `${this.name} is attending exam on ${this.subjects[2]}`
    },
    treat:function(amount,tips){
        this.money=this.money-amount-tips;
        return this.money;
    }
}
const examgive=student.exam();
// console.log(examgive)

const imp=student.improve();
// console.log(imp);

const trt=student.treat(500,50);
console.log(trt);