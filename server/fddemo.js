import fs from 'fs'
const data=fs.readFileSync(data.txt);
console.log("Data=",data)
fs.writeFileSync("data.txt","my new file data")
