const fs = require('fs')

fs.open('./.gitignore', 'r', (error, fileDescriptor) => {
    console.log(fileDescriptor)
})

fs.open('./logs', 'r+', (error, fileDescriptor) => {
    console.log(fileDescriptor)
})

fs.open('./logs', 'w+', (error, fileDescriptor) => {
    console.log(fileDescriptor)
})

try {
    const FILEDESCRIPTOR = fs.openSync('test.txt', 'w+')
    console.log('openSync ' + FILEDESCRIPTOR)
    fs.closeSync(FILEDESCRIPTOR)
    console.log('After closing' + FILEDESCRIPTOR)
} catch (error) {
    console.error(error)
}

/**
 * Quiz: Add the descriptions of fs.open or fs.openSync file modes below.
 * File reading modes.
 * r, r+, w+, a and a+
 * r:
 * r+:
 * w+:
 * a:
 * a+:
 */