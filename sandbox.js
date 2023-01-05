// // const character = 'Luxe'
// // console.log(character);
// // const inputs = document.querySelectorAll("input")
// // console.log(inputs);
// // inputs.forEach((input)=> console.log(input))
// // let character :string = "Hello" //explicit type add
// // let isBoolean = true
// // const circ = (diameter : number) =>{
// //     return Math.floor(diameter * Math.PI)
// // }
// // console.log(circ(8));
// //<----- Arrays ----->
// let characters = [ "Thiliban", "John", "Doe", "Freeguy"]
// characters.push("Lebanan")
// // characters.push(12) <--- type error --->
// let numbers = [1,2,3,4]
//  numbers.push(5)
// //  numbers.push("Hey") <----type error -->
// let mixed = ["Thilip", "Jocky", "John", 12, 24]
// mixed.push("Lebanan")
// mixed.push(10)
// // mixed.push(true) <---type error --->
// // <---- Objects ---->
// let student = {
//     stud : "Thiliban",
//     rollNo : 1815146,
//     dept : "production"
// //redeclare is same as the object structure.
//explicit types
var character;
var age;
var isLoggedIn;
character = "hello";
age = 40;
isLoggedIn = true;
//arrays 
var ninjas = [];
ninjas.push("Hello");
//union types
var mixed = [];
mixed.push("Hello");
mixed.push(20);
// mixed.push(true) <--not valid type --->
console.log(mixed);
var uid;
uid = "Hello";
uid = 20;
console.log(typeof (uid));
//objects
var ninjaOne;
ninjaOne = { name: "Thilip", age: 20 };
var ninjaTwo;
ninjaTwo = { name: "Thiliban", age: 20, beltColor: "Red" };
console.log(ninjaTwo);
