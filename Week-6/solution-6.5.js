function findPairWithGivenDifference(arr, size, n) {
  let i = 0;
  let j = 1;


  while (i < size && j < size) {
    if (i != j && arr[j] - arr[i] == n) {
      return true;
    } else if (arr[j] - arr[i] < n) j++;
    else i++;
  }
  return false;
}

console.log(findPairWithGivenDifference([2,5,4,7,8], 5, 15))
