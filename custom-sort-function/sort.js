const numberArr = [12, 50, 6, -1, 0, -9]

const descSort = numberArr.sort((a, b) => {
  return b - a
})

console.log(descSort)


const numberSorted = numberArr.sort((a, b) => {
  if(a < 0 && b < 0) {
    return a - b
  } else if(a < 0 || b < 0) {
    return b - a
  } else {
    return a - b
  }
})

console.log(numberSorted)


const floorArr = [
  "6th Floor",
  "2nd Floor",
  "11th Floor",
  "8th Floor",
  "7th Floor",
  "9th Floor",
  "1st Floor",
  "3rd Floor",
  "10th Floor",
  "5th Floor",
  "4th Floor",
]

const sorted = floorArr.sort((a, b) => {
  return a.match(/\d+/) - b.match(/\d+/)
})

console.log(sorted)