//Solution-2

//call, apply, bind

//bind

const obj1 = {
  name: "Sachiv",
  place: "Bihar",
  job: function work(){
    return `Secretary`
  }
}

const obj2 = {
  name: "Pradhan",
  place: "Phulera",
  job: function work(){
    return `Panchayat Head`
  }
}

function bio(){
  return `${this.name} ji lives in ${this.place} works as a ${this.job()}` 

}

// const result = bio.bind(obj2);

// console.log(result());

//call

function add(num1, num2){
  return num1 + num2 + this.num3 + this.num4
}

const obj = { num3: 5, num4: 6};

// const result = add.call(obj, 2, 4);

// console.log(result);

//apply

function multiply(num1, num2){
  return num1 * num2 * this.num3 * this.num4;
}

const result = multiply.apply(obj, [2, 4]);

console.log(result);



