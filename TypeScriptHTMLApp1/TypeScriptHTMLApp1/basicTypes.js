//basic types:
var isDone = false;
var count = 14;
var name = "hi there";
// arrays:
var numbers = [1, 2, 3, 4];
// or, the generic version:
var numbers = [1, 2, 3, 4];
// enum:
var Colour;
(function (Colour) {
    Colour[Colour["Red"] = 2] = "Red";
    Colour[Colour["Green"] = 3] = "Green";
    Colour[Colour["Yellow"] = 4] = "Yellow";
})(Colour || (Colour = {}));
; // starts at zero by default
var colourName = Colour[2];
console.log(colourName);
// the any type
var something = 4;
something = "not a number";
// using any for mixed-typed arrays
var things = ["one", 2, false];
things[1] = 1;
// void functions
function printMessage(message) { console.log(message); }
//# sourceMappingURL=basicTypes.js.map