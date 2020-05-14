var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Transaction = /** @class */ (function () {
    function Transaction() {
        this.allTransactions = [];
    }
    Transaction.prototype.AddTransaction = function (type, amount) {
        this.allTransactions.push([type, amount]);
    };
    return Transaction;
}());
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Account.prototype.getAccount = function (name, accno, type) {
        this.custname = name;
        this.accno = accno;
        this.acctype = type;
    };
    Account.prototype.DisplayDetails = function () {
        console.log("Customer Name is " + this.custname);
        console.log("Customer Account " + this.accno);
        console.log("Account Type " + this.acctype);
    };
    return Account;
}(Transaction));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.balance = 2000;
        return _this;
    }
    CurrentAccount.prototype.displayBalance = function () {
        console.log("Balance is " + this.balance);
    };
    CurrentAccount.prototype.DepositCurrent = function (deposit) {
        this.balance = this.balance + deposit;
        console.log("Updated Balance" + this.balance);
        _super.prototype.AddTransaction.call(this, 'deposit', deposit);
    };
    CurrentAccount.prototype.withdraw = function (withdrawamount) {
        var penatly;
        console.log("Balance " + this.balance);
        this.balance = this.balance - withdrawamount;
        if (this.balance < 500) {
            penatly = (500 - this.balance) / 10;
            this.balance = this.balance - penatly;
            _super.prototype.AddTransaction.call(this, 'withdraw', withdrawamount + penatly);
            console.log("Balance after deducting penalty amount is " + this.balance);
        }
        else if (this.balance < withdrawamount) {
            console.log('You cannot withdraw amount,Please make use of overdraft facility');
        }
        else {
            console.log("Amount Balance after withdraw " + this.balance);
            _super.prototype.AddTransaction.call(this, 'withdraw', withdrawamount);
        }
    };
    return CurrentAccount;
}(Account));
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.savingbalance = 5000;
        return _this;
    }
    SavingAccount.prototype.displayBalance = function () {
        console.log("Balance is " + this.savingbalance);
    };
    SavingAccount.prototype.DepositSaving = function (deposit) {
        var interest;
        this.savingbalance = this.savingbalance + deposit;
        interest = (this.savingbalance * 2) / 100;
        this.savingbalance = this.savingbalance + interest;
        console.log("Updated Balance" + this.savingbalance);
        _super.prototype.AddTransaction.call(this, 'Deposit', deposit + interest);
    };
    SavingAccount.prototype.withdrawSaving = function (withdrawamount) {
        var penatly;
        console.log("Balance " + this.savingbalance);
        this.savingbalance = this.savingbalance - withdrawamount;
        if (this.savingbalance < 800) {
            penatly = (500 - this.savingbalance) / 10;
            this.savingbalance = this.savingbalance - penatly;
            console.log("Balance after deducting penalty amount is " + this.savingbalance);
            _super.prototype.AddTransaction.call(this, 'withdraw', withdrawamount + penatly);
        }
        else if (this.savingbalance < withdrawamount) {
            console.log('You cannot withdraw amount,Please make use of overdraft facility');
        }
        else {
            console.log("Amount Balance after withdraw " + this.savingbalance);
            _super.prototype.AddTransaction.call(this, 'withdraw', withdrawamount);
        }
    };
    return SavingAccount;
}(Account));
var current = new CurrentAccount();
var saveaccount = new SavingAccount();
current.getAccount('Kasparas', 5436456, 'Current');
current.DisplayDetails();
current.displayBalance();
current.withdraw(200);
current.DepositCurrent(300);
saveaccount.DepositSaving(10000);
saveaccount.withdrawSaving(5000);
console.log('Transaction History for Account:');
current.allTransactions.forEach(function (item) { return console.log(item); });
console.log('Transaction History for SavingsAccount:');
saveaccount.allTransactions.forEach(function (item) { return console.log(item); });
