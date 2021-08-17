const INQUIRER = require('inquirer')
const DISTRICTS = require('./uganda.districts')

//Describe or define the question(s) that the inquirer will use 
//Each question is an object literal {} not an object instance
const QUESTIONS = [
    {
        type:'list',
        name:'response',
        message:'Do you want to see the districts of Uganda',
        choices: ['Yes', 'No'] 
    }
]

//Use the inquirer library to output a question to the CLI and pick input 
INQUIRER.prompt(QUESTIONS).then(answer => {
    // console.log(answer.response)
    let { response } = answer

    if (response == 'Yes') {
        if(DISTRICTS.length > 0) {
            console.log(DISTRICTS.join("\n")) 
        }       
    } 
    else {
        console.log(`Okay, Goodbye! `)
    }
})