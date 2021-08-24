//Zero delay
// setTimeout(()=>{
//     console.log('after')
// }, 0)

// console.log('before')


// setTimeout(() => {
//     console.log(`The first`) 
// }, 0)


// setTimeout(() => {
//     console.log(`The Second`) 
// }, 0)

// setInterval: Running a callback forever on specific intervals

// setInterval(()=>{
//     let date = new Date();
//     console.log(date.toLocaleTimeString())
// }, 1000)

//To stop the serInterval we utilize the clearInterval by passing the ID of the serInterval()
// const id = setInterval(()=>{
//     console.log(`The set Interval message.`)
// }, 1000)

// setTimeout(() => {
//     clearInterval(id)
// }, 4000)

//2nd clearInterval Application
let count = 0
const interval = setInterval(() => {
    count++
    console.log(count)

    if(count === 10){
        clearInterval(interval)
        //return
    }
    //otherwise do things
}, 1000)
