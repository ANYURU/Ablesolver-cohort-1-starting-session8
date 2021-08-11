let isPalindrome = (string) => {
    return string === string.split('').reverse().join('')? true: false
}

isPalindrome('divid')
