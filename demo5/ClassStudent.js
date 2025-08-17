const Person = require('./ClassPerson.js');

// Definimos la clase Child que hereda de Person
class Student extends Person {
  constructor(name, age, classname) {
    // Llamamos al constructor del padre con super()
    super(name,age);
    this.classname = classname;
  }

  introduce() {
    console.log(`Hola me llamo ${this.name}. Tengo ${this.age} años. Esta es la clase de ${this.classname}.`);
  }
}

module.exports = Student;