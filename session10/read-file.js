//Read using asynchronous fs.readFile
const fs = require('fs')
const path = require('path')

const user = 'davie'
const PATH = path.join('/', 'home', user, 'Desktop', 'ablestate', 'workspace', 'Solver-Cohort-1', 'JS-Sessions', 'session10', 'server.js') // /Users/davie/Desktop/ablestate/workspace/Solver-Cohort-1/JS-sessions/session10
//C:\Users\username\Desktop\ablestate\workspace\Solver-Cohort-1\JS-sessions\session10

fs.readFile(PATH, 'utf-8', (err, data) => {
    if(err){
        console.error(err)
        return
    }
    console.log(data)
})
/**
 * Test asynchronous
 * The lines of code below will be output first because asynchronous doesn't block the thread.
 * Yet the code from :9 to :15 is asynchronous and will take more time to execute
 */

//Synchronous reading

try {
    const data = fs.readFileSync(PATH, 'utf-8')
    console.log(data)
}
catch(err) {
    console.error(err)
}
console.log('After file reading.')
