const account = {
    accountName: "Laura",
    balance: 500,

    getBalance: function() {
        console.log(this.balance);
    },

    deposit: function(amount) {
        this.balance += amount;
    },

    withdrawal: function(amount) {
        this.balance -= amount;
    },

    getAccountName: function() {
    console.log(this.accountName);
}
};


account.deposit(100);
account.withdrawal(50);
account.getBalance();
account.getAccountName();