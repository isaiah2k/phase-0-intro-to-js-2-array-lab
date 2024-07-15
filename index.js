// creates an array of cats
const cats = ["Milo", "Otis", "Garfield"]
// Adds the name to the end of the cats array
function destructivelyAppendCat(name) {
    cats.push(name)
}
// Adds the name to the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
// Removes last element from the cats array
function destructivelyRemoveLastCat() {
    cats.pop()
}
// Removes fist element from cats array
function destructivelyRemoveFirstCat() {
    cats.shift()
}
//Returns a new array with the name added to the end
function appendCat(name) {
    return [...cats, name]
}
// Returns a new array with the name added to the beginning
function prependCat(name) {
    return [name, ...cats]
}
// Returns a new array without the last element
function removeLastCat() {
    return cats.slice(0, -1)
}
//Returns a new array without the first element
function removeFirstCat() {
    return cats.slice(1)
}