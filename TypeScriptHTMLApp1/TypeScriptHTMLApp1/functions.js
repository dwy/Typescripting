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
//# sourceMappingURL=functions.js.map