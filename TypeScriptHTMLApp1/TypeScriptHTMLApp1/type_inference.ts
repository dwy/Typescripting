var array = [1, 2, null];
// inferred: number[]
var array2: number[] = [1, 2, null];

// no compatible type: infers {}[]
var array3 = [1, 2, "3"];


class Creature { }
class Adder extends Creature {}
class Bear extends Creature { }
class Chimp extends Creature { }

var animals1 = [new Adder(), new Bear(), new Chimp()];
// inferred: Adder[] because all the types are compatible
// var animals1B: Adder[] = [new Adder(), new Bear(), new Chimp()];

// we can force it to be Creature[]
var animals1B: Creature[] = animals1;

// incompatible with the other Creatures
class Duck extends Creature {
    numberOfFeathers: number;
    quack(): void { } 
}

var animals2 = [new Duck(), new Bear(), new Chimp()];
// inferred: Bear[] because Bear is the first compatible type
var animals2B: Bear[] = animals2;


// incompatible with the other Creatures
class Eagle extends Creature {
    colorOfBeak: Colour;
} 

// inferred: {}[] because there is no compatible type
var animals3 = [new Duck(), new Eagle()];
// can force to Bear[] because bear is compatible with Duck and Eagle
var animals3B: Bear[] = animals3;

// contextual type: the type of an expression is implied by its location

// from the function onmousedown, the compiler infers the type of the parameter to be 'MouseEvent'.
window.onmousedown = function (mouseEvent) {
    //console.log(mouseEvent.butt);  // error 
    console.log(mouseEvent.button);
};

// contextual type is ignored when the type is set explicitely
window.onmousedown = function (mouseEvent: any) {
    console.log(mouseEvent.butt);  // no error 
    console.log(mouseEvent.button);
};

// in the context of this function, the return type is used to infer the best-suited type for the array
function createCreatures(): Creature[] {
    return [new Adder(), new Bear(), new Chimp(), new Duck(), new Eagle()];
}

// infers Creature[] because of the return type of the function
var creatures = createCreatures();

// type compatibility

// functions
var x = (a: number) => 0;
var y = (b: number, s: string) => 0;

// OK, each parameter in x has a corresponding parameter with compatible type in y
y = x;
// error, no string parameter in x
//x = y; 

// return types
var a = () => ({ name: "Albert" });
var b = () => ({ name: "Beatrice", colour: "blue" });

// OK, each member of the return type of a is in b (b is a subtype of a)
a = b;
// error, a has no 'colour' property in return type (a is not a subtype of b)
//b = a

// enum compatibility
enum Direction {
    North = 1,
    East = 2,
    South = 3,
    West = 4
}
enum Member {
    Leg = 0,
    Arm = 1,
    Head = 2,
    Toe = 3
}

// enum compatible with number
var num: number = Direction.North;

// number compatible with enum
var member: Member = 3;

// values from different enums are incompatible
//var direction: Direction = Member.Toe; // error

// class compatibility

class Car {
    colour: string;
    constructor(manufacturer: string) { } // static
    static build(): Car { return new Car("Fiat"); }
}
class AirPlane {
    colour: string;
    constructor(year: number) {} // static
}

var car = new Car("Opel");
var airPlane = new AirPlane(1974);
// Car and Airplane are compatible with each other, despite different static members
car = airPlane;
airPlane = car;

// private members affect class compatibility
class RaceCar {
    colour: string;
    private hasTurbo: boolean;
}
var raceCar = new RaceCar();

car = raceCar; // OK, RaceCar has at least all of Car's members
//raceCar = car; // error, 'hasTurbo' missing from Car;

// generics compatibility

interface IList<T> { }

var listA: IList<number>;
var listB: IList<boolean>;

// compatible because they have the same structure
listA = listB;
listB = listA;

// type parameters only affect compatibility when consumed as part of a member
interface IList2<T> {
    current: T; // T is used by a member and hence affects compatibility
}

var list2A: IList2<number>;
var list2B: IList2<boolean>;

//list2A = list2B; // error
//list2B = list2A; // error

// for generic types that do not have their type arguments specified, compatibility is checked using 'any'
var f1 = <T>(x: T): void => { };
var f2 = <U>(y: U): void => { };

// compatible: '(x: any) => void' matches '(y: any) => void'
f1 = f2;
f2 = f1;
