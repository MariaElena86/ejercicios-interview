/**
 * A classic programming interview question that involves using array methods (filter, map, reduce), 
 * and JavaScript objects.
 */

/**
 * Using map
 */
const users = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 30, active: false },
  { name: "Charlie", age: 35, active: true },
  { name: "David", age: 40, active: false }
];

/**
 * Using map Array
 * map function :Calls a defined callback function on each element of an array, and returns an array that contains the results.    
 * .map no modifica el array original, siempre devuelve uno nuevo.
 */
const userNames = users.map(user => user.name);
console.log(userNames);
// ["Alice", "Bob", "Charlie", "David"]

/**
 * Utilizar map para retornar los elementos del array con nuevos valores
 * Pero el array users original sigue igual.
 */
const userInfo = users.map(user => {
  return {
    nombre: user.name.toUpperCase(),
    edadEn10: user.age + 10
  };
});
/**
 * Print
[
  { nombre: "ALICE", edadEn10: 35 },
  { nombre: "BOB", edadEn10: 40 },
  { nombre: "CHARLIE", edadEn10: 45 },
  { nombre: "DAVID", edadEn10: 50 }
]
 */