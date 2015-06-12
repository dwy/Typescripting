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

// OK, each member of the return type of a is in b
a = b;
// error, a has no 'colour' property in return type
//b = a;