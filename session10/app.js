// Start a node server that listens via http protocol
const HTTP = require('http')

require('dotenv').config()

const HOSTNAME = '127.0.0.3' //localhost
const PORT = process.env.PORT || 8888 // Use the port from the .env otherwise assign 8888

const SERVER = HTTP.createServer((request, response) => {
    response.statusCode = 200
    response.setHeader('Content-type','text/plain')
    // To send environment variables at the process you can follow the steps below
    // ENV_NAME=ENV_VALUE node filename at the CLI
    // or add them to the .env file.
    // Add the dotenv package to your node add. Following the steps below.
    // 1. yarn add dotenv or npm add dotenv
    // 2. require('dotenv').config() recommended to be added to the top of the file
    // Tip: Always ignore the .env and node_modules using .gitignore feature
    
    let { APP_NAME } = process.env

    response.end(`${APP_NAME}.\n${process.env.PUBLIC_KEY}.`)
})

SERVER.listen(PORT, HOSTNAME, ()=> {
    console.log(`The server is running at ${HOSTNAME}:${PORT}`)
})

// How to terminate the node process without using the unsafe CTRL + C (Windows) or Control + C (Mac)
// Signal Terminate

process.on("SIGTERM", ()=> {
    Server.close(() => {
        console.log(`${process.pid} Process terminated`)
    });
});

// The process will be terminated after 5 minutes
setTimeout(()=> process.kill(process.pid, "SIGTERM"), 36000000)