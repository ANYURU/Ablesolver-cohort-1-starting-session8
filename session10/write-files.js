const fs = require('fs')
const path = require('path')

const content = 'This is written using NodeJS fs.writeFile() API' // You can also fetch this from an API

fs.writeFile('test1.txt', content, err => {
    if (err) {
        console.error(err);
        return // Retrun out of the function if there was an error
    }

    // file written successfully 
    console.log ('Voila!')
    console.log('Content has bee written to the file successfully!')
})

