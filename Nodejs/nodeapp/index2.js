import fs from 'fs'

    // it will re-write the previous written text
// fs.writeFile("myFile.txt","Creating a write File in Node", (err) => {
//     if(err) throw err;
// })

    // it will appen in the previous written text
// fs.appendFile("myFile.txt","Appending in the file \n", (err) => {
//     if(err) throw err;
// })

    // to read the file
// fs.readFile("about.txt","utf-8",(err,data) => {
//     if(err) throw err;
//     console.log(data);
// })

    // to rename a file
// fs.rename("myFile.txt","renamedFile.txt",(err) => {
//     if(err) throw err;
// })

    // it deletes the file
fs.unlink("renamedFile.txt", (err) => {
    if(err) throw err;
})