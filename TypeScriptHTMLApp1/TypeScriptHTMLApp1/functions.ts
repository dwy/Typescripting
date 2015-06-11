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

