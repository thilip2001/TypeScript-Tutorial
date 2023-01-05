// const anchor = document.querySelector('a')!
// // if(anchor){
// // console.log(anchor.href);}

// console.log(anchor.href);

// const form = document.querySelector('form')! ;

// interface IsPerson {
//     name:string;
//      age:number;
//      speak(a:string):void;
//      spend(a: number):number;
// }

// const me: IsPerson = {
//     name:"Thiliban",
//     age: 20,
//     speak(text:string):void {
//         console.log(text);
//     },
//     spend(amount:number):number{
//         console.log("I spent ", amount);
        
//         return amount
//     }
// }

// const greetPerson = (person: IsPerson):void =>{
//      console.log("hello", person.name);
// }

// greetPerson(me)

//<------------------------------------------------------------------------------------------------------------------------------------->






import { Invoice } from "./classes/invoice.js";

const invOne = new Invoice("mario", "work on the mario website", 250)
const invTwo = new Invoice("pyt", "work on the pyt website", 500)

 let invoices :Invoice[] = [];
 invoices.push(invOne)
 invoices.push(invTwo)

 console.log(invoices);

 invoices.forEach(inv => {
    console.log(inv.client, inv.details, inv.amount, inv.format());  
 }) 

 


const form = document.querySelector(".new-item-form") as HTMLFormElement;  
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// console.log(form.children);
// console.log(type);
// console.log(tofrom);
// console.log(details);
// console.log(amount);

form.addEventListener('submit', (e:Event)=>{
    e.preventDefault();

    console.log(type.value,tofrom.value, details.value, amount.valueAsNumber);
    
})


