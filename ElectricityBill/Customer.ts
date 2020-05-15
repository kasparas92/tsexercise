import { CustomerService } from './CustomerService';

let c = new CustomerService(1, 'Peter', 300);

let amount = c.calculateBill(c.cust);
c.display(c.cust);
console.log(`Your total bill: ${c.calculateSurcharge(amount)}`);
