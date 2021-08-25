/**
 * Promises are alternatives to callbacks
 * Because callbacks can make code look complicated hence hard to maintain
 * Promises have two parts 
 * 1. Definition of a promise
 * 2. Usage/Consumption of the promise  
 */

/*
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
*/

//Import the file system module 'fs' and assign it to a variable
const FS = require('fs')

const READ_FILE = (fileName) => {
    // Create and return a promise
    return new Promise((resolve, reject) => {
        // use the readFile(filename, encoding, callback) method of the fs module
        FS.readFile(fileName, 'utf8', (error, data) => { // Specify the ecoding to read the buffer
            if(error){
                reject(error) // Reject the promise
                return // And stop code execution
            }
            resolve(data) //Resolve with data
        })
    })
}

// Use the promise above
READ_FILE('./readme.md')
    .then(data => console.log(data))
    .catch(error => console.log(error))