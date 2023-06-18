// Cooding challenge # 1
/* Write your code below. Good luck! 🙂 */

const massMark = 95
const massJohn = 85
const heightMark = 188
const heightJohn = 195

var BMIMark = massMark / (heightMark * heightMark)
var BMIJohn = massJohn / (heightJohn * heightJohn)

console.log(BMIMark);
console.log(BMIJohn);

if (BMIMark > BMIJohn) {
    var markHigherBMI = true
} else {
    var markHigherBMI = false
}

console.log(markHigherBMI)

console.log(BMIMark, BMIJohn, markHigherBMI)

// Cooding challenge # 2

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */

// 1. Print a nice output to the console, telling the user who has the higher BMI. 
// The message can be either:
if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's!")
}
else {
    console.log("John's BMI is higher than Mark's")
}

// 2. Modify the outputs above to use template literals 
// to include the BMI values in the outputs.

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}