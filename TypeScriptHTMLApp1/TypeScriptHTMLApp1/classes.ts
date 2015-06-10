class Animal {
    weight: number;
    constructor(public name: string) {
        this.weight = 0.1;
    }
    jump(distance: number = 0.5) { // default parameter value
        return this.name + " jumps " + distance + " meters!";
    }
}

class Lion extends Animal {
    constructor() {
        super("Lion");
        this.weight = 120;
    }
    jump(distance: number = 4) {
        var preJumpAction = this.name + " roars and ";
        var jumpAction = super.jump(distance); // calling base method
        return preJumpAction + jumpAction;
    }
}

var lion = new Lion();
var jump: string = lion.jump(12);
document.body.innerHTML = jump;

// public / private modifiers
class Dog extends Animal {
    private favouriteFood: string;
    height: number; // public by default
    // private weight: number; // error: private is incompatible with the public definition in the base class
    constructor() {
        super("Dog");
        this.favouriteFood = "Royal Canin";
        this.height = 0.3;
    }
}

// parameter properties: create and initialise public and private properties
class Person {
    constructor(public name: string, private salary: number) { }
}
var person = new Person("Chateaubriand", 50000);

document.body.innerHTML += person.name;