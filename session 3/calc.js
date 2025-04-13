function calculate(num1, num2, operator) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            return "Cannot divide by zero";
        }
        return num1 / num2;
    } else {
        return "Invalid operator";
    }
}

function testCalculator() {
    console.log(calculate(10, 5, "+"));
    console.log(calculate(10, 5, "-"));
    console.log(calculate(10, 5, "*"));
    console.log(calculate(10, 5, "/"));
    console.log(calculate(10, 5, "^"));
}

function main() {
    const choice = prompt(
        "Choose a task to run:\n1. ATM Machine\n2. Student Grades System\n3. Test Calculator Function"
    );

    switch(choice) {
        case "1":
            runAtmMachine();
            break;
        case "2":
            runStudentGradesSystem();
            break;
        case "3":
            testCalculator();
            alert("Calculator function tested. Check the console for results.");
            break;
        default:
            alert("Invalid choice.");
    }
}

main();
