let grade = "A";

switch (grade) {
    case "A+":
    case "A":
    case "A-":
        console.log("Excellent!");
        break;
    case "B+":
    case "B":
        console.log("Very Good!");
        break;
    case "C":
        console.log("Good");
        break;
    default:
        console.log("Invalid Grade");
}