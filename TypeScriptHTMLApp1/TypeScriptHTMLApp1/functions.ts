// rest parameters
function join(separator: string, ...names: string[]) {
    return names.join(separator);
}

var joined: string = join("o", "1");

// type of the function with rest parameters
var joinFunction: (s: string, ...ns: string[]) => string = join;
