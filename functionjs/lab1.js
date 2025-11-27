function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        getBalance() {
            return balance;
        },

        deposit(amount) {
            if (amount > 0) {
                balance += amount;
            } 
        },

        withdraw(amount) {
            if (amount <= balance && amount > 0) {
                balance -= amount;
            } 
        }
    };
}
