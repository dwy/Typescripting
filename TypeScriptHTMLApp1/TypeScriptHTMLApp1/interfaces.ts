// parameter with anonymous type: must have a 'label' property
function printLabel(objectWithLabel: { label: string }) {
     console.log(objectWithLabel.label);
}

var labelled = { name: "Guy", label: "what a nice label!"};
printLabel(labelled);
// printLabel({}); error: no label property

