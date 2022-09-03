// Prototype

function Person (name) {
  this.name = name;
}

function Teacher(name){
  Person.call(this, name)
}

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

Teacher.prototype.teach = function (subject) {
  console.log(`${this.name} is now teaching ${subject}`);
}

const newObj = new Teacher("Sagar")

newObj.teach("Chess")