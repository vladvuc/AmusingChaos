console.log('\n=== Coding challenge ===');

// 1. Store mass and height in variables
// DATA 1
// const markM = 78;
// const markH = 1.69;
// const johnM = 92;
// const johnH = 1.95;

// DATA 2
const markM = 95;
const markH = 1.88;
const johnM = 85;
const johnH = 1.76;

// 2. Calculate both their BMIs using the formula
const markBMI = markM / (markH ** 2);
const johnBMI = johnM / (johnH * johnH);

console.log(markBMI, johnBMI)

// 3. Create a boolean variable and compare
const markHigherBMI = markBMI > johnBMI;
if (markHigherBMI) {
    console.log("Mark has higher BMI! By... ", markBMI - johnBMI)
} else {
    console.log("John has higher BMI! By...", johnBMI - markBMI)
}
