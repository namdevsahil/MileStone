//array of student marks
const marks = [85, 92, 78, 95, 99];
let highestMark = marks[0];

// through the array to find the highest mark
for (let i = 1; i < marks.length; i++) {
    highestMark = marks[i] > highestMark ? marks[i] : highestMark;
}

// Display the highest mark to the teacher
console.log(`The highest mark in the class is: ${highestMark}`);
