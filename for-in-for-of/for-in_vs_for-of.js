
// In general, use:
// for...in = objects
// for...of = arrays, strings

const obj = {
  key1: "one",
  key2: "two"
}
console.log("\nfor...in with an object")
for(const key in obj) {
  console.log(key)
}


const cap_arr = ["A", "B", "C"]
console.log("\nfor...of with an array")
for(const letter of cap_arr) {
  console.log(letter)
}

const str = "ABC!@#"
console.log("\nfor...of with a string")
for(const letter of str) {
  console.log(letter)
}


const arr = ["a", "b", "c"]
arr[6] = 'd'

console.log("\nfor...of in array with missing keys")
for(const value of arr) {
  console.log(value)
}

console.log("\nfor...in in array with missing keys")
for(const key in arr) {
  console.log(key, arr[key])
}
