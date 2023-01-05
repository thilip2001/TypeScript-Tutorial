// // // const character = 'Luxe'
// // // console.log(character);
// // // const inputs = document.querySelectorAll("input")
// // // console.log(inputs);
// // // inputs.forEach((input)=> console.log(input))
// // // let character :string = "Hello" //explicit type add
// // // let isBoolean = true
// // // const circ = (diameter : number) =>{
// // //     return Math.floor(diameter * Math.PI)
// // // }
// // // console.log(circ(8));
// // //<----- Arrays ----->
// // let characters = [ "Thiliban", "John", "Doe", "Freeguy"]
// // characters.push("Lebanan")
// // // characters.push(12) <--- type error --->
// // let numbers = [1,2,3,4]
// //  numbers.push(5)
// // //  numbers.push("Hey") <----type error -->
// // let mixed = ["Thilip", "Jocky", "John", 12, 24]
// // mixed.push("Lebanan")
// // mixed.push(10)
// // // mixed.push(true) <---type error --->
// // // <---- Objects ---->
// // let student = {
// //     stud : "Thiliban",
// //     rollNo : 1815146,
// //     dept : "production"
// // //redeclare is same as the object structure.
// //explicit types
//     let character :string;
//     let  age :number;
//     let isLoggedIn :boolean;
//     character = "hello"
//     age =40 
//     isLoggedIn = true
// //arrays 
//     let ninjas :string[] = [];
//     ninjas.push("Hello")
// //union types
//     let mixed : (string|number)[] = [];
//     mixed.push("Hello")
//     mixed.push(20)
//     // mixed.push(true) <--not valid type --->
//     console.log(mixed);
//     let uid:string|number;
//     uid = "Hello"
//     uid = 20;
//     console.log(typeof(uid));
// //objects
//     let ninjaOne :object;
//     ninjaOne = {name:"Thilip", age:20}
//     let ninjaTwo :{
//         name :string,
//         age :number,
//         beltColor:string
//     }
//     ninjaTwo = {name:"Thiliban", age:20, beltColor:"Red"}
//     console.log(ninjaTwo);
var age = 25;
age = "twenty five";
console.log(age);
age = { age: 24 };
console.log(age);
var mixed = [];
mixed.push(25);
mixed.push("THILIBAN");
mixed.push(false);
console.log(mixed);
var ninja;
ninja = { name: "Thiliban", age: 20 };
console.log(ninja);
