// example taken from http://www.typescriptlang.org/Handbook#mixins-mixin-sample

// Disposable Mixin
class Disposable {
    isDisposed: boolean;
    dispose() {
        this.isDisposed = true;
    }
}
 
// Activatable Mixin
class Activatable {
    isActive: boolean;
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}

class SmartObject implements Disposable, Activatable {

    interact() {
        this.activate();
    }
 
    // stand-ins for the mixins

    // Disposable
    isDisposed: boolean = false;
    dispose: () => void;
    // Activatable
    isActive: boolean = false;
    activate: () => void;
    deactivate: () => void;
}

applyMixins(SmartObject, [Disposable, Activatable]);

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

var smart = new SmartObject();
smart.interact();
smart.dispose();

document.body.innerHTML += "isActive: " + smart.isActive + "<br/>";
document.body.innerHTML += "isDisposed: " + smart.isDisposed + "<br/>";
