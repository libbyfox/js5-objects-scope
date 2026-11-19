const account = {
    accountName: "Laura",
    balance: 500,

    getBalance: function() {
        console.log(this.balance);
    },

  deposit: function(amount) {
    if (isNaN(amount) || amount <= 0) {
        console.log("Invalid deposit amount.");
    } else {
        this.balance += amount;
        this.getBalance();
    }
},

  withdrawal: function(amount) {
    if (isNaN(amount) || amount <= 0) {
        console.log("Invalid withdrawal amount.");
    } else if (amount > this.balance) {
        console.log("Insufficient funds.");
    } else {
        this.balance -= amount;
        this.getBalance();
    }
},

    getAccountName: function() {
    console.log(this.accountName);
}
};




function atm() {
    const message = parseFloat(
        prompt(
            "Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"
        )
    );

    switch (message) {
        case 1:
            account.getBalance();
            break;
        case 2:
            const depositAmount = parseFloat(prompt("How much would you like to deposit?"));
            account.deposit(depositAmount);
            account.getBalance();
            break;
        case 3:
           const withdrawalAmount = parseFloat(prompt("How much would you like to withdraw?"));
            account.withdrawal(withdrawalAmount);
            account.getBalance();
            break;
        case 4:
            account.getAccountName();
            break;
        case 5:
            console.log("Thank you for using our ATM! Goodbye!");
            break;  
    }
}


atm();