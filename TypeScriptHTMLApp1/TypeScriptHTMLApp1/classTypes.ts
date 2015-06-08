interface IAdaptable {
    adapt(): boolean;
} 

// explicit implementation
class ExplicitAdaptable implements IAdaptable {
    adapt() { return false; }
}

// implicit implementation
class ImplicitAdaptable {
    adapt() { return true; }
}

var adaptable1: IAdaptable = new ExplicitAdaptable();
var adaptable2: IAdaptable = new ImplicitAdaptable();
