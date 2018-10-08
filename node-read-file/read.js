const fs = require('fs')

// Async:

fs.readFile('data.csv', 'utf8', (err, data) => {
  console.log(data)
})


// Sync:

let results

try {
  // (invalid file error example)
  const data = fs.readFileSync('nofile.csv', 'utf8')
  results = data  
} catch(e) {
  console.log("error", e)
}

console.log("results", results)
