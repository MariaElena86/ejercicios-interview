/**
 * What are callback functions in JavaScript?: 
 * Its a function that is passed as a parameter to another function)
 */

function fetchData(callback){
    //Fetch data from server ejample
setTimeout(()=>{
    console.log('Fetched Data!');
    const data='server data';
    callback(data);
},2000);
}

function FirtsCallback(data){
console.log(`Firts Callback Data ${data}`);
}

function SecondCallback(data){
    console.log(`Second Callback Data ${data}`);
}
fetchData(FirtsCallback)
fetchData(SecondCallback)

