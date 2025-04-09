let maxNumber = prompt("Enter a number to count up to:");
maxNumber = Number(maxNumber);

if (isNaN(maxNumber) || maxNumber === 0) {
    alert("Please enter a valid number.");
} else {
    for (let i = 1; i <= maxNumber; i++) {
        console.log(i);
    }
}
