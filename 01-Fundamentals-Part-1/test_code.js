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
