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
//# sourceMappingURL=functions.js.map