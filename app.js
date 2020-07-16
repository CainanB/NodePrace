const fs = require("fs");
const fileName = "./preamble.txt"


fs.readFile(fileName, (error, buffer) => {
    if(error){
        console.log(error.message);
        return;
    }

    console.log(`File Data: ${buffer.toString()}`);
})
