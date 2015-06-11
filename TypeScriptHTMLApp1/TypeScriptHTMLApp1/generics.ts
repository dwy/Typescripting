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
