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
const WAIT_FOR_BETTER_PROMISE = async () => {
    const HOLD_VALUE_FROM_BETTER_PROMISE = await BETTER_PROMISE()

    // if (![null, false, "", undefined].includes(HOLD_VALUE_FROM_BETTER_PROMISE))
    //     return `${HOLD_VALUE_FROM_BETTER_PROMISE} Async/await does.`;

    const NOT_ALLOWED = [null, false, "", undefined, []]
    return NOT_ALLOWED.includes(HOLD_VALUE_FROM_BETTER_PROMISE)
        ?
        new Error(`Promise didn't resolve`)
        : `${HOLD_VALUE_FROM_BETTER_PROMISE} Aync/await does.`
}

WAIT_FOR_BETTER_PROMISE().then(result => {
    result += `\nGood bye!`
    console.log(result)
}).catch(error => console.log(error))