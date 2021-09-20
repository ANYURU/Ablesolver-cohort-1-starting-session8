const EventEmitter  = require('events')
const door = new EventEmitter()

door.addListener("slam", () => {
    console.log("Why did you slam the door.")
})

door.addListener("open", () => {
    console.log("The door is open. Please come in!")
})

door.emit("slam")
door.emit("open")

console.log(door.eventNames())