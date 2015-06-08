function greet(person) {
    return "hi, " + person.firstName + " " + person.lastName;
}
var Student = (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + lastName;
    }
    return Student;
})();
var student = new Student("John", "Doe");
document.body.innerHTML = greet(student);
//# sourceMappingURL=greeter.js.map