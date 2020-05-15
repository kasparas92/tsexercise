import { ICustomer } from './ICustomer';

export class CustomerService {
  cust: ICustomer;

  constructor(id: number, name: string, unit: number) {
    this.cust = { id: id, name: name, unit: unit };
  }

  public calculateBill(customer: ICustomer): number {
    let finalcost;
    let reading = customer.unit;
    if (reading <= 199) {
      finalcost = reading * 1.2;
    } else if (reading < 400) {
      finalcost = reading * 1.5;
    } else if (reading < 600) {
      finalcost = reading * 1.8;
    } else {
      finalcost = reading * 2;
    }
    return finalcost;
  }

  public calculateSurcharge(cost: number): number {
    let surcharge;
    if (cost > 400 || cost < 100) {
      surcharge = cost * 0.15;
    } else {
      surcharge = 0;
    }
    return cost + surcharge;
  }

  public display(customer: ICustomer): void {
    console.log(`CustomerId: ${customer.id}`);
    console.log(`CustomerName: ${customer.name}`);
    console.log(`You consumed Electricity: ${customer.unit}`);
  }
}
