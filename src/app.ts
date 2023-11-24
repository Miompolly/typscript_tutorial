import {Invoice} from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';




// let docOne:HasFormatter;
// let docTwo:HasFormatter;

// const invoiceOne=new Invoice('Divin','work for Joel Website',20000);
// const invoiceTwo=new Invoice('Armand','work for Joel Website',30000);

let invoices:Invoice[]=[]; 

// invoices.push(invoiceOne);
// invoices.push(invoiceTwo);

console.log(invoices);

invoices.forEach(inv=>{
console.log(inv.client,inv.amount,inv.format());
})









const form=document.querySelector('.form-new') as HTMLFormElement;

const details=document.querySelector('#details') as HTMLInputElement;
const amount=document.querySelector('#amount') as HTMLInputElement;
const tofrom=document.querySelector('#tofrom') as HTMLInputElement;
const type=document.querySelector('#type') as HTMLSelectElement;


const ul=document.querySelector('ul')!;

const list=new ListTemplate(ul);

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    let doc:HasFormatter;
    let values:[string,string,number];
    values=[tofrom.value,details.value,amount.valueAsNumber];
    if(type.value==='invoice'){
       doc=new Invoice(...values);  
    }else{
        doc=new Payment(...values);  

    }

    list.render(doc,type.value,'end');

})