/**
 * Is JavaScript Asynchronous? Prove with an example.
 * Yes its Asynchronous, that means that the execution doesnt wait to run the nex line
*/

console.log('Demostrar que JavaScript es asyncronos')
var aux = 5;
setTimeout(function(){
    aux=2;
    console.log(`Valor cambiado a:${aux}`)
},1000)
aux=1;
console.log(`Valor cambiado a:${aux}`)

