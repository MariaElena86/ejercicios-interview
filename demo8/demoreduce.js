/**
 * A classic programming interview question that involves using array methods (filter, map, reduce), 
 * and JavaScript objects.
 */

/**
 * Using reduce function
 */
const users = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 30, active: false },
  { name: "Charlie", age: 35, active: true },
  { name: "David", age: 40, active: false }
];

/**
 * Using reduce
 * redcue function :Calls the specified callback function for all the elements in an array. 
 * The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function
 */
const avgAge = users.reduce((acc, user, _, arr) => acc + user.age / arr.length, 0);
console.log(avgAge);
// 32.5

