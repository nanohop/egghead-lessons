const fs = require('fs')

const contents = 'Data to write 123\n'

// Write File, async:
fs.writeFile('output.txt', contents, {
  // flag: 'a' // 'a' flag for append
}, (err) => {
  console.log("ERROR: ", err)
})


// Append File, async: 
fs.appendFile('output.txt', contents, (err) => {
  console.log("ERROR: ", err)
})


// Write File, Sync:
fs.writeFileSync('output.txt', contents)

// Append File, Sync:
fs.appendFileSync('output.txt', contents)


// Sync Error example:
try {
  fs.appendFileSync('output.txt', contents, {
    flag: 'ax'
  })  
} catch(e) {
  console.log("ERROR: ", e)
}

console.log("\nEnd of script")
