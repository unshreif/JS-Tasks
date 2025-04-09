let firstNum = prompt("Enter the first number:");
firstNum = Number(firstNum);
let secondNum = prompt("Enter the second number:");
secondNum = Number(secondNum);
let operation = prompt("Enter the operation (+, -, *, /):");
let result;
if (operation === "+") {
    result = firstNum + secondNum;
} else if (operation === "-") {
    result = firstNum - secondNum;
} else if (operation === "*") {
    result = firstNum * secondNum;
} else if (operation === "/") {
    result = firstNum / secondNum;
} else {
    result = "Invalid operation";
}
alert("The result is: " + result);
