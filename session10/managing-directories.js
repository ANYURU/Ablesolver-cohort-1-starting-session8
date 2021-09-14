const fs = require('fs');

//Access of the operating system's /etc directory
const dirname = '/etc'
fs.access(dirname, (err) => {
    if(err) {
        console.log(err)
        return 
    }
    console.log(`It's possible to access the directory ${dirname}`) 
})

