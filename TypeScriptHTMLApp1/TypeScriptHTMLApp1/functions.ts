// rest parameters
function join(separator: string, ...names: string[]) {
    return names.join(separator);
}

var joined: string = join("o", "1");

// type of the function with rest parameters
var joinFunction: (s: string, ...ns: string[]) => string = join;

// lambda automatically capturing 'this'
var context = {
    contextValues: [42, 74, 89],
    createValuator: function() {
        return () => {
            return this.contextValues.join("z");
        }
    }
};

// Note: createValuator() compiles as follows:
// createValuator: function() {
//    var _this = this;
//    return function() {
//        return _this.contextValues.join("z");
//    };
// }

var valuator = context.createValuator();
var valuated: string = valuator();

// overloads
function getDetails(n: number): string;
function getDetails(s: string): number;
function getDetails(o: {name: string; value: number}): {message: string};
function getDetails(x: any): any {
    if (typeof x === "number") {
        return "you chose number " + x;
    }
    if (typeof x === "string") {
        return x.length;
    }
    if (typeof x === "object") {
        return {
            message: "you chose " + x["name"] + "=" + x["value"]
        };
    }
    return "you chose something: " + x;
}

var details1: string = getDetails(12);
var details2: number = getDetails("four");
var details3: {message: string;} = getDetails({ name: "price", value: 5 });
// var details4 = getDetails({}); // error, invalid parameter

document.body.innerHTML = details1 + "<br/>";
document.body.innerHTML += details2 + "<br/>";
document.body.innerHTML += details3.message + "<br/>";