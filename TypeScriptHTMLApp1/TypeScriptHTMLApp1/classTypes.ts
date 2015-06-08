interface IAdaptable {
    name: string
    adapt(): boolean;
} 

// explicit implementation
class ExplicitAdaptable implements IAdaptable {
    name: string;
    adapt() { return false; }
    constructor() { this.name = "explicit"; }
}

// implicit implementation
class ImplicitAdaptable {
    name: string;
    adapt() { return true; }
    constructor() { this.name = "implicit"; }
}

var adaptable1: IAdaptable = new ExplicitAdaptable();
var adaptable2: IAdaptable = new ImplicitAdaptable();

function adapt(adaptable: IAdaptable) {
    adaptable.adapt();
    return "adapted " + adaptable.name;
}

var result = adapt(adaptable1);
result += "\n";
result += adapt(adaptable2);

document.body.innerHTML = result;