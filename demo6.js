/**
 * What is the difference between == and ===?
 */
/**
 * == → igualdad débil (loose equality)
 * Compara dos valores después de hacer conversión de tipo (type coercion).
 * Si los tipos son diferentes, JavaScript intenta convertirlos para compararlos.
*/

5 == "5"       // true  (la cadena "5" se convierte a número)
0 == false     // true  (false se convierte a 0)
null == undefined // true (regla especial en JS)


/**
 * === → igualdad estricta (strict equality)
 * Compara dos valores sin conversión de tipo.
 * Ambos deben ser del mismo tipo y tener el mismo valor.
*/

5 === "5"      // false (número vs string)
0 === false    // false (número vs booleano)
null === undefined // false
5 === 5        // true
