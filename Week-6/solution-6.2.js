function spiralOrder(array) {
  let i, k = 0, l = 0;
  let row = array.length;
  let col = array[0].length;
  /*
      k - starting row index
      m - ending row index
      l - starting column index
      n - ending column index
      i - iterator  
  */
 let arr = []

  while (k < row && l < col) {
      // print the first row from the remaining rows
      for (i = l; i < col; ++i) {
          arr.push(array[k][i]);
      }
      k++;

      // print the last column from the remaining columns
      for (i = k; i < row; ++i) {
          arr.push(array[i][col - 1]);
      }
      col--;

      // print the last row from the remaining rows
      if (k < row) {
          for (i = col - 1; i >= l; --i) {
              arr.push(array[row - 1][i]);
          }
          row--;
      }

      // print the first column from the remaining columns
      if (l < col) {
          for (i = row - 1; i >= k; --i) {
              arr.push(array[i][l]);
          }
          l++;
      }
  }
  return arr;
}

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
