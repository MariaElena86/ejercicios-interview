/**
 * What is the difference between null and undefined in JavaScript? * 
 */

/**
 * null: ausencia intencional de un valor, puesto manualmente.
 * Es un valor que el programador asigna explícitamente para indicar la ausencia intencional de valor.
 * Es como decir: “aquí debería haber algo, pero lo dejo vacío a propósito”.
 */
let y = null;
console.log(y); // null

let usuario = {
  nombre: "Ana",
  edad: null // se indica explícitamente que no hay edad
};


/**
 * undefined: valor por defecto cuando algo no tiene asignación.
 * Significa que una variable fue declarada pero no tiene valor asignado.
 * Es el valor por defecto que pone JavaScript cuando algo no existe o no está definido.
 */

let x;
console.log(x); // undefined

function saludar(nombre) {
  console.log(nombre);
}
saludar(); // undefined (no se pasó argumento)

let persona = {};
console.log(persona.edad); // undefined (la propiedad no existe)
