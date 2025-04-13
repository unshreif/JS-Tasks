function runStudentGradesSystem() {
    const studentName = prompt("Enter student's name:");
    let numSubjects = parseInt(prompt("Enter the number of subjects:"));

    while (isNaN(numSubjects) || numSubjects <= 0) {
        alert("Please enter a valid number of subjects.");
        numSubjects = parseInt(prompt("Enter the number of subjects:"));
    }

    let totalScore = 0;

    for (let i = 0; i < numSubjects; i++) {
        const subjectName = prompt(`Enter name for subject ${i + 1}:`);
        let grade;

        do {
            grade = parseFloat(prompt(`Enter grade for ${subjectName}:`));
            if (isNaN(grade)) {
                alert("Please enter a valid grade.");
            }
        } while (isNaN(grade));

        totalScore += grade;
    }

    const average = totalScore / numSubjects;
    const status = average >= 50 ? "Passed" : "Failed";
    const message = average >= 50 ?
        "Congratulations! You passed" :
        "Sorry, you failed";

    alert(message);

    const summary = `
Student: ${studentName}
Number of Subjects: ${numSubjects}
Total Score: ${totalScore}
Average: ${average.toFixed(2)}
Status: ${status}`;

    alert(summary);
}
