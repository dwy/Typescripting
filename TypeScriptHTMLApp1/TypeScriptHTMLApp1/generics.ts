// type parameter
function me<T>(arg: T): T {
    return arg;
}

var me1: number = me(2);
var me2: string[] = me(["hi", "sup"]);

document.body.innerHTML = me1 + "<br/>";
document.body.innerHTML += me2 + "<br/>";
