class Instructor {
    name;
    designation = "Broker";
    team = "Leader Team 1";
    location;

    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    classTime(time) {
        this.time = time;
    }


}
const about = new Instructor("Rafi", "Bosti");
console.log(about);

about.classTime("10.00");
console.log(about);

