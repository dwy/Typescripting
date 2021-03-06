﻿// ReSharper disable InconsistentNaming
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

// accessors: get and set
class LazyStudent {
    private _name: string;

    constructor(name: string) { this._name = name; }

    get name(): string {
        return this._name + " (from getter)";
    }

    set name(newName: string) {
        if (this._name !== newName) {
            this._name = newName + " (from setter)";
        }
    }
}

var lazyStudent = new LazyStudent("First Name");
lazyStudent.name = "Second name";

document.body.innerHTML += "<br/>" + lazyStudent.name;

// static members
class PersonFactory {
    public static count: number = 0;
    static create(name: string) {
        PersonFactory.count++;
        return new Person(name, 0);
    }
}
var newPerson = PersonFactory.create("Albert");

document.body.innerHTML += "<br/> person count: " + PersonFactory.count;

// constructor function
var person1 = new Person("Alfonso", 20);

var personConstructor: typeof Person = Person;
var person2 = new personConstructor("Bud", 1000);

// using classes as interfaces
class Point {
    x: number;
    y: number;
}

interface Point3D extends Point {
    z: number;
}

var point3d: Point3D = { x: 1, y: 2, z: 3 };