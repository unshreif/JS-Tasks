function runAtmMachine() {
    const correctPin = "1234";
    let balance = 1000;
    let attempts = 0;
    let isAuthenticated = false;

    do {
        const enteredPin = prompt("Enter your PIN:");
        attempts++;

        if (enteredPin === correctPin) {
            isAuthenticated = true;
            break;
        } else {
            alert(`Incorrect PIN. You have ${3 - attempts} attempts left.`);
        }
    } while (attempts < 3);

    if (!isAuthenticated) {
        alert("Maximum attempts reached. Program terminated.");
        return;
    }

    let running = true;
    do {
        const choice = prompt(
            "Select an option:\n1. Withdraw Money\n2. Deposit Money\n3. Check Balance\n4. Exit"
        );

        switch (choice) {
            case "1":
                const withdrawAmount = parseFloat(prompt("Enter amount to withdraw:"));
                if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
                    alert("Please enter a valid amount.");
                } else if (withdrawAmount > balance) {
                    alert("Insufficient funds. Your balance is " + balance + " EGP");
                } else {
                    balance -= withdrawAmount;
                    alert("Withdrawal successful. New balance: " + balance + " EGP");
                }
                break;

            case "2":
                const depositAmount = parseFloat(prompt("Enter amount to deposit:"));
                if (isNaN(depositAmount) || depositAmount <= 0) {
                    alert("Please enter a valid amount.");
                } else {
                    balance += depositAmount;
                    alert("Deposit successful. New balance: " + balance + " EGP");
                }
                break;

            case "3":
                alert("Your current balance is: " + balance + " EGP");
                break;

            case "4":
                alert("Thank you for using our ATM. Goodbye!");
                running = false;
                break;

            default:
                alert("Invalid option. Please try again.");
        }
    } while (running);
}
