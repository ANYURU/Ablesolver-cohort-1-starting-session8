// const fs = require('fs')
// const path = require('path')

// const content = 'This is written using NodeJS fs.writeFile() API' // You can also fetch this from an API
// // Asynchronous
// fs.writeFile('test1.txt', content, err => {
//     if (err) {
//         console.error(err);
//         return // Retrun out of the function if there was an error
//     }

//     // file written successfully 
//     console.log ('Voila!')
//     console.log('Content has bee written to the file successfully!')
// })

// Synchronous 
const fs = require('fs')
const path = require('path')
const filePath = path.resolve('test2.txt')

let content = 'This is written synchronously using NodeJS fs.writeFile() API'

try {
    content = `${content}\n ${filePath}`

    const data = fs.writeFileSync( filePath, content)
    // file written successfully 
    console.log(`Voila!\n You've written to the file.`)

} catch (err) {
    console.error(err);
}