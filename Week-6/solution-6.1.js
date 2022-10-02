function maxSubArray(arr) {
  let maxInt = Math.pow(2, 53);
  let max_so_far = -maxInt - 1;
  let max_ending_here = 0;

  for(let i=0; i< arr.length; i++)
    {
      max_ending_here = max_ending_here + arr[i];
      if(max_so_far < max_ending_here) {
        max_so_far = max_ending_here;
      }

      if(max_ending_here < 0) {
        max_ending_here = 0
      }
    }
  return max_so_far
}

console.log(maxSubArray([4,-1,2,1]))