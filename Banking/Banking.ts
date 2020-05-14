class Transaction {
  public allTransactions: [string, number][] = [];

  public AddTransaction(type: string, amount: number): void {
    this.allTransactions.push([type, amount]);
  }
}

class Account extends Transaction {
  public custname: string;
  accno: number;
  acctype: string;

  public getAccount(name, accno, type) {
    this.custname = name;
    this.accno = accno;
    this.acctype = type;
  }

  public DisplayDetails() {
    console.log(`Customer Name is ${this.custname}`);
    console.log(`Customer Account ${this.accno}`);
    console.log(`Account Type ${this.acctype}`);
  }
}

class CurrentAccount extends Account {
  public balance: number = 2000;
  public displayBalance(): void {
    console.log(`Balance is ${this.balance}`);
  }

  public DepositCurrent(deposit): void {
    this.balance = this.balance + deposit;
    console.log(`Updated Balance${this.balance}`);
    super.AddTransaction('deposit', deposit);
  }

  public withdraw(withdrawamount) {
    let penatly: number;
    console.log(`Balance ${this.balance}`);
    this.balance = this.balance - withdrawamount;
    if (this.balance < 500) {
      penatly = (500 - this.balance) / 10;
      this.balance = this.balance - penatly;
      super.AddTransaction('withdraw', withdrawamount + penatly);
      console.log(`Balance after deducting penalty amount is ${this.balance}`);
    } else if (this.balance < withdrawamount) {
      console.log('You cannot withdraw amount,Please make use of overdraft facility');
    } else {
      console.log(`Amount Balance after withdraw ${this.balance}`);
      super.AddTransaction('withdraw', withdrawamount);
    }
  }
}

class SavingAccount extends Account {
  public savingbalance: number = 5000;
  public displayBalance(): void {
    console.log(`Balance is ${this.savingbalance}`);
  }

  public DepositSaving(deposit): void {
    let interest: number;
    this.savingbalance = this.savingbalance + deposit;
    interest = (this.savingbalance * 2) / 100;
    this.savingbalance = this.savingbalance + interest;
    console.log(`Updated Balance${this.savingbalance}`);
    super.AddTransaction('Deposit', deposit + interest);
  }

  public withdrawSaving(withdrawamount) {
    let penatly: number;
    console.log(`Balance ${this.savingbalance}`);
    this.savingbalance = this.savingbalance - withdrawamount;
    if (this.savingbalance < 800) {
      penatly = (500 - this.savingbalance) / 10;
      this.savingbalance = this.savingbalance - penatly;
      console.log(`Balance after deducting penalty amount is ${this.savingbalance}`);
      super.AddTransaction('withdraw', withdrawamount + penatly);
    } else if (this.savingbalance < withdrawamount) {
      console.log('You cannot withdraw amount,Please make use of overdraft facility');
    } else {
      console.log(`Amount Balance after withdraw ${this.savingbalance}`);
      super.AddTransaction('withdraw', withdrawamount);
    }
  }
}

let current = new CurrentAccount();
let saveaccount = new SavingAccount();
current.getAccount('Kasparas', 5436456, 'Current');
current.DisplayDetails();
current.displayBalance();
current.withdraw(200);
current.DepositCurrent(300);
saveaccount.DepositSaving(10000);
saveaccount.withdrawSaving(5000);

console.log('Transaction History for Account:');
current.allTransactions.forEach((item) => console.log(item));
console.log('Transaction History for SavingsAccount:');
saveaccount.allTransactions.forEach((item) => console.log(item));
