const Student = require('./ClassStudent.js');

// Creamos un objeto de la clase hija
const student = new Student("Pedro", 18, "Matematica");

// Llamamos a un método del padre
student.greet();       //print "Hola mi nombre es Pedro. Tengo 18 años."

// Llamamos a un método de la hija
student.introduce();   // print "Hola mi nombre es Pedro. Tengo 18 años. Esta es la clase de Matematica"
