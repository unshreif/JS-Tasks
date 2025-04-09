let number = prompt("Enter a number:");
number = Number(number);
if (isNaN(number)) {
    alert("Please enter a valid number.");
} else if (number > 0) {
    console.log("Positive Number");
} else if (number < 0) {
    console.log("Negative Number");
} else {
    console.log("Zero");
}
