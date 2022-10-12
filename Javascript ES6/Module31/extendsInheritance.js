class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;

    }
    feedback() {
        console.log(`${this.name} thank you for your opinion`);
    }

}


class Instructor extends TeamMember {
    designation = "Broker";
    team = "Leader";
    constructor(name, location) {
        super(name, location)
    }
    supportTime(time) {
        console.log(`${time} will be the staring time`);
    }
}

class Developer extends TeamMember {
    designation = "Lawyer";
    team = "None";
    tech
    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
    }
}

const Out = new Instructor("Dil", "Tangail");
Out.supportTime(10);
console.log(Out);

const Dev = new Developer("Dil", "Tangail", "C#");
console.log(Dev);