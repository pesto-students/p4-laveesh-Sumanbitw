// async/await & Generators

async function asyncAwait() {
  const response1 = await doTask1();
  const response2 = await doTask2();
  const response3 = await doTask3();
  console.log(response1);
  console.log(response2);
  console.log(response3);
}

function* generatorFunc() {
  yield doTask1();
  yield doTask2();
  yield doTask3();
}

const doTask1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Do Task 1")
    }, 1000)
  })
}

const doTask2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Do Task 2")
    }, 2000)
  })
}

const doTask3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Do Task 3")
    }, 0)
  })
}

const generator = generatorFunc();

generator.next().value.then(console.log);
generator.next().value.then(console.log);
generator.next().value.then(console.log);


// console.log(asyncAwait());


