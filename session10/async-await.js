// Async/await
//1. Simplest example
const BETTER_PROMISE = async () => {
    return `Indeed Awesome!`
}

// const BETTER_PROMISE_CONSUMER = BETTER_PROMISE()
// console.log(BETTER_PROMISE_CONSUMER) will output => Promise { 'Indeed awesome!' }

// To output the actual string
BETTER_PROMISE().then(result => console.log(result))
//2. Chaining Pro,ises in Async/await

