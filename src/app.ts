// const anchor = document.querySelector('a')!
// // if(anchor){
// // console.log(anchor.href);}

// console.log(anchor.href);

// const form = document.querySelector('form')! ;
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


