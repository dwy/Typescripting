﻿class Animal {
    weight: number;
    constructor(public name: string) {
        this.weight = 0.1;
    }
    jump(distance: number = 0.5) { // default parameter value
        return this.name + " jumps " + distance + " meters!";
    }
}

class Lion extends Animal {
    constructor() {
        super("Lion");
        this.weight = 120;
    }
    jump(distance = 4) {
        var preJumpAction = this.name + " roars and ";
        var jumpAction = super.jump(distance); // calling base method
        return preJumpAction + jumpAction; 
    }
}

var lion = new Lion();
var jump: string = lion.jump(12);
document.body.innerHTML = jump;