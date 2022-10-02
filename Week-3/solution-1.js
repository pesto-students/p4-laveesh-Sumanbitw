//Solution-1

//Apply Memoization

function memoize(fn){
  let cache = {};
  return function(...args){
    const key = args.toString() ;
    if(cache.hasOwnProperty(key)){
      return cache[key];
    }else{
      let result = fn(...args);
      cache[key] = result;
      return result;
    }
  }
}

function add(num1, num2){
  return num1 + num2;
}

function time(fn){
  console.time();
  fn();
  console.timeEnd();
}

const memoizeAdd = memoize(add);

time(() => console.log(memoizeAdd(100,100)));
time(() => console.log(memoizeAdd(200,100)));
time(() => console.log(memoizeAdd(100,300)));
time(() => console.log(memoizeAdd(500,200)));
time(() => console.log(memoizeAdd(100,100)));

// console.log(memoizeAdd(100,100));
// console.log(memoizeAdd(100));
// console.log(memoizeAdd(100,200));
// console.log(memoizeAdd(300,100));
// console.log(memoizeAdd(100,100));
