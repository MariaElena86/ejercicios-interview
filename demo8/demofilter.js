/**
 * A classic programming interview question that involves using array methods (filter, map, reduce), 
 * and JavaScript objects.
 */

/**
 * Using Array
 */
const users = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 30, active: false },
  { name: "Charlie", age: 35, active: true },
  { name: "David", age: 40, active: false }
];

/**
 * Using Filter Array
 * filter function :Returns the elements of an array that meet the condition specified in a callback function.
 */

const activeUsers = users.filter(user => user.active);
console.log(activeUsers);

/**
 * Primer usuario
user = { name: "Alice", active: true }
user.active //return true
=> filter lo incluye en el nuevo array

 * Segundo usuario
user = { name: "Bob", active: false }
user.active //return false
=> filter lo descarta

 * Tercer usuario
user = { name: "Charlie", active: true }
user.active //return true
=> filter lo incluye en el nuevo array

 * filter return
[
  { name: "Alice", age: 25, active: true },
  { name: "Charlie", age: 35, active: true }
]
*/

