import Person from './Person.js'

class Teacher extends Person {
  constructor(name, gender, degree) {
    super(name, gender)
    this.degree = degree
  }
}

export default Teacher
