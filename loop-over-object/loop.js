const obj = {
  name: "Joe",
  favorite_color: "blue"
}

// With a for...in loop:
for(const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key, obj[key])
  }
}

// With Object.keys, forEach
Object.keys(obj).forEach(key => {
  console.log(`${key}: ${obj[key]}`)
})

// map over Object.keys:
const key_values = Object.keys(obj).map(key => {
  return `${key}: ${obj[key]}`
})

console.log(key_values)

// Just the values:
Object.values(obj).forEach(value => {
  console.log(value)
})

// The keys and the values with Object.entries
Object.entries(obj).map(([ key, value ]) => {
  console.log(key, value)
})

