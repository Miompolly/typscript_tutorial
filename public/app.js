import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
// let docOne:HasFormatter;
// let docTwo:HasFormatter;
// const invoiceOne=new Invoice('Divin','work for Joel Website',20000);
// const invoiceTwo=new Invoice('Armand','work for Joel Website',30000);
let invoices = [];
// invoices.push(invoiceOne);
// invoices.push(invoiceTwo);
console.log(invoices);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.form-new');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const tofrom = document.querySelector('#tofrom');
const type = document.querySelector('#type');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
