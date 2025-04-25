const readline = require('readline');

function grade() {
    let grades = [70.5, 88.9, 92.3, 60.7, 79.1];
    console.log('Here are the original grades:', grades);
    let roundedGrades = grades.map(Math.round);
    console.log('Rounded grades:', roundedGrades);
    roundedGrades.unshift(55);
    roundedGrades.push(99);
    console.log('After adding new grades:', roundedGrades);
    roundedGrades.shift();
    roundedGrades.pop();
    console.log('After removing the first and last grades:', roundedGrades);
    const idx = roundedGrades.indexOf(89);

    if (idx !== -1) {
        console.log('Found grade 89 at index:', idx);
    } else {
        console.log('Grade 89 not found.');
    }

    const max = Math.max(...roundedGrades);
    const min = Math.min(...roundedGrades);
    console.log('The highest grade is:', max);
    console.log('The lowest grade is:', min);
    const avg = (roundedGrades.reduce((a, b) => a + b, 0) / roundedGrades.length).toFixed(1);
    console.log('The average grade is:', avg);
}

grade();
