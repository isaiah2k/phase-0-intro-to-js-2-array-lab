const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push("Ralph")
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name) {
    const newCatsArray = cats.slice();
    newCatsArray.push(name);
    return newCatsArray;
}
function prependCat(name) {

}
function prependCat(name) {
    const newCatsArray = cats.slice();
    newCatsArray.unshift(name);
    return newCatsArray;
}
function removeLastCat() {
    const newCatsArray = cats.slice();
    newCatsArray.pop();
    return newCatsArray;
}
function removeFirstCat() {
    const newCatsArray = cats.slice()
    newCatsArray.shift()
    return newCatsArray
}