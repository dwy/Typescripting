// ReSharper disable InconsistentNaming

// type parameter
function me<T>(arg: T): T {
    return arg;
}

var me1: number = me<number>(2);
var me2: string[] = me(["hi", "sup"]);

document.body.innerHTML = me1 + "<br/>";
document.body.innerHTML += me2 + "<br/>";

// type of generic function
var meFunction: <T>(arg: T) => T = me;
var meFunctionObjectNotation: {<T>(arg: T):  T} = me;

interface GenericMeFunction {
    <T>(arg: T): T;
}
var meFunctionFromInterface: GenericMeFunction = me;

// moving the type parameter to the interface
interface GenericMeFunctionWithParameter<T> {
    (arg: T): T;
}
// need to specify the type T
var meFunctionFromInterface2: GenericMeFunctionWithParameter<string> = me;

// generic class
class TheBlackAdder<T> {
    constructor(private values: T[]) {}
    add(element: T): T[] {
        this.values.push(element);
        return this.values;
    }
}

var adder = new TheBlackAdder([1]);
var added = adder.add(42);

document.body.innerHTML += added + "<br/>";
