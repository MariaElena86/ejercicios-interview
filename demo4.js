/*
Whats the difference between callback functions and promises with an example?:
 * Un callback es simplemente una función que se pasa como argumento a otra función, y se ejecuta cuando la operación termina.
 * Problema: si tienes varias operaciones asíncronas encadenadas, terminas en el famoso “callback hell” (código difícil de leer y mantener).
 *
 * Una Promise es un objeto que representa el resultado futuro de una operación asíncrona.
 * Tiene 3 estados: pending, fulfilled, rejected.
 * Se manejan con .then() y .catch() → más limpio que los callbacks anidados.
 * 
 * Callback = pasas una función y se ejecuta al terminar la tarea.
 * Promise = un objeto que maneja mejor los flujos asíncronos, con .then() y .catch(), evitando el callback hell.
 */

//Con callbacks (callback hell):
doSomething((resultado1) => {
  doSomethingElse(resultado1, (resultado2) => {
    doThirdThing(resultado2, (resultado3) => {
      console.log("Final:", resultado3);
    });
  });
});

//Con Promises
doSomething()
  .then(resultado1 => doSomethingElse(resultado1))
  .then(resultado2 => doThirdThing(resultado2))
  .then(resultado3 => console.log("Final:", resultado3))
  .catch(error => console.error(error));