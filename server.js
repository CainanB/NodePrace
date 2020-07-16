// const http = require('http');


// const server = http.createServer((req, res)=>{

//     // handling incoming requests
//     res.writeHead(200, {"content-type": "text/html"});
//     res.write("<h1>Hello World!</h1>");
//     res.end();

// })

// server.listen(3000)

// console.log('Node.js web server at port 5000 is running....');

// var myGreeting = require('./firstMod');
// console.log(myGreeting.greeting);

// myGreeting.greeting.forEach(val=>console.log(val))

// var myMod = require('./firstMod');
// console.log(myMod.anObject.firstName);

// var personMod = require('./firstMod');

// var cainan = new personMod.person("Cainan", "Barboza")
// cainan.greeting();

// var personMod = require('./person');

// var michael = new personMod("Michael","Cortez");
// michael.fullName()

var complex = require("./person")

console.log(complex.string1);
console.log(complex.array1[1]);

