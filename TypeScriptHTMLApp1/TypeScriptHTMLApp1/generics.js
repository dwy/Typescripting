// type parameter
function me(arg) {
    return arg;
}
var me1 = me(2);
var me2 = me(["hi", "sup"]);
document.body.innerHTML = me1 + "<br/>";
document.body.innerHTML += me2 + "<br/>";
// type of generic function
var meFunction = me;
//# sourceMappingURL=generics.js.map