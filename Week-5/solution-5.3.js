// hasDuplicate

const hasDuplicate = (arr) => {
  return new Set(arr).size !== arr.length
}

console.log(hasDuplicate([1,3,2,5,1]))