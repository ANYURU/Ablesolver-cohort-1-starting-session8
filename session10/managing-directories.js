const fs = require('fs');

/*
//Access of the operating system's /etc directory
const dirname = '/etc'
fs.access(dirname, (err) => {
    if(err) {
        console.log(err)
        return 
    }
    console.log(`It's possible to access the directory ${dirname}`) 
})
*/

// Relative directory
const dirname2 = 'images'
fs.access(dirname2, (err) => {
    if(err) {
        console.log(err)
        return 
    }
    console.log(`It's possible to access the directory ${dirname2}`) 
}) 