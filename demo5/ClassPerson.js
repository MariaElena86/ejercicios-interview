// Definimos la clase Padre
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hola mi nombre es ${this.name}. Tengo ${this.age} años.`);
  }
}

// Exportamos para usar en otros ficheros
module.exports = Person;
