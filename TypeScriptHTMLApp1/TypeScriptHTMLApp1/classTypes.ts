// ReSharper disable InconsistentNaming

interface IAdaptable {
    name: string
    adapt(): boolean;
} 

// explicit implementation
class ExplicitAdaptable implements IAdaptable {
    name: string;
    adapt() { return false; }
    constructor() { this.name = "explicit"; }
}

// implicit implementation
class ImplicitAdaptable {
    name: string;
    adapt() { return true; }
    constructor() { this.name = "implicit"; }
}

var adaptable1: IAdaptable = new ExplicitAdaptable();
var adaptable2: IAdaptable = new ImplicitAdaptable();

function adapt(adaptable: IAdaptable) {
    adaptable.adapt();
    return "adapted " + adaptable.name;
}

var result = adapt(adaptable1);
result += "\n";
result += adapt(adaptable2);

document.body.innerHTML = result;

// static / instance side of a class
interface IClockInterface {
    new (hours: number, minutes: number, seconds: number);
}

// error: Clock incorrectly implements IClockInterface
/* class Clock implements IClockInterface {
    constructor(hours: number, minutes: number, seconds: number) { }
} */

// this is because when a class implements an interface, only the instance
// side of the class is checked, but the constructor is on the static side
// of the class.

class Clock {
    constructor(hours: number, minutes: number, seconds: number) { }
}

// need to work with the static part of the class
var ClockStatic: IClockInterface = Clock;
var clock = new ClockStatic(8, 59, 12);

// extending interfaces
interface Shape {
    x: number;
    y: number;
}

interface Drawable {
    colour: string;
}

interface Square extends Shape, Drawable {
    length: number;
}

var square = <Square>{}; // empty object of type Square
square.x = 12;
square.y = -7;
square.length = 42;
square.colour = "white";