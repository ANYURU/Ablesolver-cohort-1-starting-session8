const CHECK_EMPTY = (event, length =8) => {
    const  ELEMENT = event.target
    console.log(event)
    if (ELEMENT.value == '' || event.target.value == null) {
        ELEMENT.classList.add("is-invalid")

        // alert('Field required')
        // console.log(event.target)
        return false
    }

    if (ELEMENT.value.length < length) {
        ELEMENT.classList.add("is-invalid")
        return false
    }


    ELEMENT.classList.remove("is-invalid")
    return true

} 