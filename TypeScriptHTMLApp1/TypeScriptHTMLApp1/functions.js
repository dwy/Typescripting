// rest parameters
function join(separator) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return names.join(separator);
}
var joined = join("o", "1");
// type of the function with rest parameters
var joinFunction = join;
// lambda automatically capturing 'this'
var context = {
    contextValues: [42, 74, 89],
    createValuator: function () {
        var _this = this;
        return function () {
            return _this.contextValues.join("z");
        };
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
var valuated = valuator();
function getDetails(x) {
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
var details1 = getDetails(12);
var details2 = getDetails("four");
var details3 = getDetails({ name: "price", value: 5 });
// var details4 = getDetails({}); // error, invalid parameter
document.body.innerHTML = details1 + "<br/>";
document.body.innerHTML += details2 + "<br/>";
document.body.innerHTML += details3.message + "<br/>";
//# sourceMappingURL=functions.js.map