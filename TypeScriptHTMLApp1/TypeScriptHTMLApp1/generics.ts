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
    // static init(first: T): void {} // error: static members cannot reference type parameters
}

var adder = new TheBlackAdder([1]);
var added = adder.add(42);

document.body.innerHTML += added + "<br/>";

// constraints

// parameter must have at least a 'text' property of type string
// Note: can also define an interface with member text: string;
function searchText<T extends {text: string;}>(somewhere: T, element: string) {
    return somewhere.text.search(element);
}
var index: number = searchText({ text: "abc" }, "b");

document.body.innerHTML += index + "<br/>";

// using class types in generics

// because the type information is erased in the compiled javascript,
// need to refer to the type by its constructor function: 'new()'
function create<T>(classType: {new(): T;}): T {
    return new classType();
}

class Tester { }

var testerInstance: Tester = create(Tester);
