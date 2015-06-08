// parameter with anonymous type: must have a 'label' property
function printLabel(objectWithLabel: { label: string }) {
     console.log(objectWithLabel.label);
}

var labelled = { name: "Guy", label: "what a nice label!"};
printLabel(labelled);
// printLabel({});  // error: no label property
// printLabel({label: 12});  // error: label is not a string


// interface
interface ILabellable {
    label: string;
}

function printLabel2(labellable: ILabellable) {
    console.log(labellable.label);
}

// typed parameter
var o1: ILabellable = { label: "myLabel" };
printLabel2(o1);

// o2 implements ILabellable implicitely
var o2 = { label: "sup" };
printLabel2(o2);

// optional properties
interface IPrinterConfig {
    isCamelCase?: boolean;
    colour?: string;
}

function createPrinter(config: IPrinterConfig) {
    var printer = { id: -1, colour: "blue", isCamelCase: true };
    if (typeof config.colour != 'undefined') {
        printer.colour = config.colour;
    }
    if (typeof config.isCamelCase != 'undefined') {
        printer.isCamelCase = config.isCamelCase;
    }
    return printer;
}

var printer = createPrinter({ colour: "white" });

// function types
interface IParseNumberFunction {
    (text: string, base: number): number;
}

var parseNumber: IParseNumberFunction = function(text, base) {
    return parseInt(text, base);
};
// lambda syntax
var parseNumber2: IParseNumberFunction = (text, base) => parseInt(text, base);

var numberOne = parseNumber("1", 10);
var numberTwo = parseNumber2("2", 10);

// array types: define the type of the index and values
interface IStringArray {
    [index: number]: string;
}
var strings: IStringArray = ["a", "b", "c"];

interface IPrinterConfigArray {
    [index: number]: IPrinterConfig;
}
var printerConfigArray: IPrinterConfigArray = [{colour: "red"}, {isCamelCase: false}];

// dictionaries
interface IDictionary {
    [index: string]: string;
    // length: number; // error: properties must be a subtype of the string index (in this case string).
}

var dict: IDictionary = {"a" : "1", "length": "12"};
