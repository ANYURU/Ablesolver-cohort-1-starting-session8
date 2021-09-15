const fs = require('fs')
const path = require('path')
const folderPath = 'test'

const isFile = fileName => fs.lstatSync(fileName).isFile()
const isNotFile = fileName => !fs.lstatSync(fileName).isFile()

try {

    const filesInDirectory = fs.readdirSync(folderPath)
    const modifiedList = filesInDirectory.map(fileName => path.join(folderPath, fileName))
    const filteredList = modifiedList.filter(isFile)
    console.log('files:', filteredList)

} catch (err) {
    console.error(err)
}

try {
    const foldersInDirectory = fs.readdirSync(folderPath)
    const modifiedList = foldersInDirectory.map(folderName => path.join(folderPath, folderName))
    const filteredList = modifiedList.filter((isNotFile))
    console.log('Directories:', filteredList)
} catch (err) {
    console.error(err)
}


