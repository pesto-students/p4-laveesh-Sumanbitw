//Print Next Greator Element

function printNGE(arr, n) {
  var s = [];
  let res = new Array(n);

  for (let i = n - 1; i >= 0; i--) {
    if (s.length != 0) {
      while (s.length != 0 && s[s.length - 1] <= arr[i]) {
        s.pop();
      }
    }
    res[i] = s.length == 0 ? -1 : s[s.length - 1];
    s.push(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) console.log(res[i]);
}

let arr = [6, 8, 0, 1, 3];
let n = arr.length;

console.log(printNGE(arr, n));
