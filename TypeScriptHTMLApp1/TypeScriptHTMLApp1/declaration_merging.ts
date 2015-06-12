// ReSharper disable InconsistentNaming

// merging interfaces
interface Player {
    play(): number;
    // score: number; // error: non-function members must be unique
}

interface Player {
    score: number;
}

var player: Player = {
    score: 12,
    play() {
        this.score += 42;
        return this.score;
    }
};

player.play();

document.body.innerHTML += "player score: " + player.score + "<br/>";

// function overload

interface ContentGenerator {
    generate(doc: Document): string;
}

interface ContentGenerator {
    generate(regex: string): void;
}

interface ContentGenerator {
    generate(text: "stuff"): Document;
}

// the functions defined later will have higher precedence.
// the merged interface will be:
interface ContentGenerator {
    generate(text: "stuff"): HTMLElement; // a more specialised overload of the function below
    generate(text: string): Element;
    generate(doc: Document): string;
}

// module merging
module Animals {
    export interface CanFly { maximumAltitude: number; }
    export class Eagle {
        // someMember: NotExported; // error
        screech() {
            return localValue;
        }
    }
    var localValue: string = "I am local to this module";
}

module Animals {
    export class Elephant {
        talk() {
            // return localValue; // error
        }
    }
    class NotExported { }
}

// exported members are merged: 
/*
module Animals {
    export interface CanFly { maximumAltitude: number; }
    export class Eagle { }
    export class Elephant { }
}
*/

// merging a module with a class
class Album {
    label: Album.AlbumLabel;
}
// module declaration must follow the declaration it will merge with
module Album {
    export class AlbumLabel { }
    // adding a new static member to existing class
    export var totalCount: number = 0;
}

var album = new Album();
Album.totalCount++;
album.label = new Album.AlbumLabel();

// merging a module with a function
function stringConcat(...elements: string[]) : string {
    return elements.join(stringConcat.separator);
}

module stringConcat {
    export var separator = " -- ";
    export function hi(): string { return "hello"; }
}

var text: string = stringConcat("one", "two", "three");
document.body.innerHTML += "concatenated: " + text + "<br/>";
document.body.innerHTML += "hi: " + stringConcat.hi() + "<br/>";

