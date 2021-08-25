/**
 * Promises are alternatives to callbacks
 * Because callbacks can make code look complicated hence hard to maintain
 * Promises have tow parts 
 * 1. Definition of a promise
 * 2. Usage/Consumption of the promise  
 */

const DONE = true;
// Definition of the promise

const IS_IT_DONE = new Promise((resolve, reject) => {
    const SUCCESS = `Promise resolved`;
    const FAILURE = `Promise failed`;
    if (DONE) {
        resolve(SUCCESS); // Was passes as an argument to the constructor
    } 
    else
    {
        reject(FAILURE); // Was passed as an argument to the constructor
    }

})

// Usage
const CHECK_IF_DONE = () => {
    IS_IT_DONE
    .then(result => console.log(result))
    .catch(error => console.log(error))
}

//Invoke the checker
CHECK_IF_DONE()