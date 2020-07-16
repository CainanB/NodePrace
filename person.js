// module.exports = function(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;

//     this.fullName = function(){
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }

let personMod = require('./firstMod')

let str1 = "hello"
let arr1 = [1, 4, 7, 9];
let myObj = {key : "val"}

let cainan = new personMod.person('Cainan','Barboza')
cainan.greeting()

module.exports = {
    string1: str1,
    array1: arr1
}