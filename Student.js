import Person from './Person.js'

class Student extends Person {
  constructor(name, gender, course) {
    super(name, gender)
    this.course = course
  }
}

export default Student
