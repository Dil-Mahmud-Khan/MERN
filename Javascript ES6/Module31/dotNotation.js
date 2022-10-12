const student = {
    name: 'Kolim Uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    },
}

const marks = student.marks.math;
console.log(marks);


const chemistry = student['marks']['chemistry'];
console.log(`Marks of chemistry is ${chemistry}`);






