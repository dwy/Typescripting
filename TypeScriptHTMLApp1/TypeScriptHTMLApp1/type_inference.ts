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
