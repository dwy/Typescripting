interface IPerson {
    firstName: string;
    lastName: string;
}

function greet(person: IPerson) {
    return "hi, " + person.firstName + " " + person.lastName;
}

class Student {
    fullName: string;

    constructor(public firstName: string, public lastName: string) {
        this.fullName = firstName + lastName;
    }
}

var student = new Student("John", "Doe");

document.body.innerHTML = greet(student);