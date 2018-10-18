const days_ago = [12, 3, 1, 0, 5, 14, 9]

// 12 => "12 days ago"
// 1 => "1 day ago"

let strings = []

for(let i = 0; i < days_ago.length; i++) {
  const num = days_ago[i]
  const str = `${num} day${num === 1 ? '' : 's'} ago`
  strings.push(str)
}

console.log(strings)

console.log("\n")


const map_strings_func = num => {
  return `${num} day${num === 1 ? '' : 's'} ago`
}

const last_accident = ago => {
  return `Last Accident: ${ago}`
}

const map_strings = days_ago
  .map(map_strings_func)
  .map(last_accident)

console.log(map_strings)