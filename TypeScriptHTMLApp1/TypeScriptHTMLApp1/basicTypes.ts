//basic types:
var isDone: boolean = false;
var count: number = 14;
var name: string = "hi there";


// arrays:
var numbers: number[] = [1, 2, 3, 4];

// or, the generic version:
var numbers: Array<number> = [1, 2, 3, 4];
   
// enum:
enum Colour { Red = 2, Green, Yellow }; // starts at zero by default
var colourName: string = Colour[2];
console.log(colourName);

// the any type
var something: any = 4;
something = "not a number";

// using any for mixed-typed arrays
var things: any[] = ["one", 2, false];
things[1] = 1;

// void functions
function printMessage(message): void { console.log(message); }