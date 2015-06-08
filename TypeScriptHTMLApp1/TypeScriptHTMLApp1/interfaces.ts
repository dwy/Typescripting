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
    if (config.colour) {
        printer.colour = config.colour;
    }
    if (config.isCamelCase) {
        printer.isCamelCase = config.isCamelCase;
    }
    return printer;
}