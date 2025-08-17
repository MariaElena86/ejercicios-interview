/**
 * What are promises in JavaScript?: *
 * Una function promise es una función que devuelve un objeto Promise, lo que te permite encadenar .then() y .catch() para manejar resultados asíncronos de forma ordenada.
 * Whats the difference between callback functions and promises with an example?:
 * Un callback es simplemente una función que se pasa como argumento a otra función, y se ejecuta cuando la operación termina.
 * Problema: si tienes varias operaciones asíncronas encadenadas, terminas en el famoso “callback hell” (código difícil de leer y mantener).
 *
 * Una Promise es un objeto que representa el resultado futuro de una operación asíncrona.
 * Tiene 3 estados: pending, fulfilled, rejected.
 * Se manejan con .then() y .catch() → más limpio que los callbacks anidados.
 */
function fetchData(callback){
    //Fetch data from server
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('Fetched Data!');
            let exito = true;
            if (exito) {
                resolve("Operación exitosa");//se ejecuta cuando la operación se completa con éxito.
                } else {
                reject("Ocurrió un error");//se ejecuta cuando la operación falla.
                }
        },2000);
    });
}

fetchData().then(resultado => {
    console.log("OK:", resultado);
  })
  .catch(error => {
    console.error("ERROR:", error);
  });