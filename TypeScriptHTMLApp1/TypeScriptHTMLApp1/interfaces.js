// parameter with anonymous type: must have a 'label' property
function printLabel(objectWithLabel) {
    console.log(objectWithLabel.label);
}
var labelled = { name: "Guy", label: "what a nice label!" };
printLabel(labelled);
function printLabel2(labellable) {
    console.log(labellable.label);
}
// typed parameter
var o1 = { label: "myLabel" };
printLabel2(o1);
// o2 implements ILabellable implicitely
var o2 = { label: "sup" };
printLabel2(o2);
//# sourceMappingURL=interfaces.js.map