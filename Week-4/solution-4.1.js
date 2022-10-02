// Promise


class MyPromise {
  constructor(handler) {
    this.status = "PENDING";
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    this.value = null;

    const onFulfilledPromise = (value) => {
      if (this.status === "PENDING") {
        this.status = "FULLFILLED";
        this.value = value;
        this.onFulfilledCallbacks.forEach(callbackFn => callbackFn(value))
      }
    }

    const onRejectedPromise = (value) => {
      if (this.status === "PENDING") {
        this.status = "REJECTED";
        this.value = value;
        this.onRejectedCallbacks.forEach(callbackFn => callbackFn(value))
      }
    }

    try {
      handler(onFulfilledPromise, onRejectedPromise)
    } catch (error) {
      onRejectedPromise(error)
    }
  }
  then(onResolve, onReject) {
    return new MyPromise((resolve, reject) => {
      if (this.status === "PENDING") {
        this.onFulfilledCallbacks.push(() => {
          try {
            const fulfilledFromLastPromise = onResolve(this.value)
            if (fulfilledFromLastPromise instanceof MyPromise) {
              fulfilledFromLastPromise.then(resolve, reject)
            } else {
              resolve(fulfilledFromLastPromise)
            }
          } catch (error) {
            reject(error)
          }
        });

        this.onRejectedCallbacks.push(() => {

          try {
            const rejectedFromLastPromise = onReject(this.value)
            if (rejectedFromLastPromise instanceof MyPromise) {
              rejectedFromLastPromise.then(resolve, reject)
            } else {
              reject(rejectedFromLastPromise)
            }
          } catch (error) {
            reject(error)
          }
        })

      }

      if (this.status === "FULLFILLED") {
        try {
          const fulfilledFromLastPromise = onResolve(this.value)
          if (fulfilledFromLastPromise instanceof MyPromise) {
            fulfilledFromLastPromise.then(resolve, reject)
          } else {
            resolve(fulfilledFromLastPromise)
          }
        } catch (error) {
          reject(error)
        }
      }

      if (this.status === "REJECTED") {
        try {
          const rejectedFromLastPromise = onReject(this.value)
          if (rejectedFromLastPromise instanceof MyPromise) {
            rejectedFromLastPromise.then(resolve, reject)
          } else {
            reject(rejectedFromLastPromise)
          }
        } catch (error) {
          reject(error)
        }
      }
    })
  }
  catch(cb) {
    return this.then(undefined, cb)
  }

}

const getRandomNumber = (start, end) => {
  let randomNum = Math.floor(Math.random() * (end - start) + start);
  return randomNum;
}


const p1 = new MyPromise((resolve, reject) => {
  getRandomNumber(10, 100) % 5 === 0 ? resolve("Resolved promise") : reject("Rejected promise")
})


p1.then(console.log).catch(console.log)

 
