// // JAVASCRIPT BASICS CALCULATIONS

// console.log('=== Main script ===')
// /*
// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// // Value is a piece of data
// console.log('Jonas');
// console.log(23);
// console.log('This works?') // apparently it does

// let firstName = 'Vladimir';
// console.log('The Console log now is ' + firstName);
// console.log(firstName);
// console.log(firstName);

// let myFirstJob = 'Tour guide'
// let counter = true;
// console.log(counter);
// console.log(typeof counter);

// */
// const now = 2022;
// const ageJonas = now - 1990;
// const ageSarah = now - 2018;
// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5 // x= y = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2
// console.log('Jonas ', ageJonas, 'Sarah ', ageSarah);
// console.log(averageAge)

// // STRINGS AND TEMPLATE STRINGS

// const firstName = 'Vlad';
// const job = 'student of AI';
// const birthYear = 1990;
// const currentYear = 2023;

// const vlad = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!';

// console.log(vlad)

// const vladNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`;
// console.log(vladNew)

// console.log(`This is just a regular string... It is much easier because you don't need to use the quotes or single quoatitions.`)

// // Multiline string

// console.log(`This is a string
// And this is a new line of a string.
// And this is a new new line of a string, so we
// can write paragraphs like this without thinking
// too much about like \n or some other bulshit.`)

// // const age = 15;

// // if (age >= 18) {
// //     console.log('The person can start driving lessons 🚗 ');
// // } else {
// //     const yearsLeft = 18 - age;
// //     console.log(`This person is too young ⛔️. Wait another ${yearsLeft} years.`);
// // }

// // CONDITIONAL VARIABLE
// const birthYear = 1991;

// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

// // COODING CHALLENGE # 2

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// /* Write your code below. Good luck! 🙂 */

// // 1. Print a nice output to the console, telling the user who has the higher BMI. 
// // The message can be either:
// if (BMIMark > BMIJohn) {
//     console.log("Mark's BMI is higher than John's!")
// }
// else {
//     console.log("John's BMI is higher than Mark's")
// }

// // 2. Modify the outputs above to use template literals 
// // to include the BMI values in the outputs.

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
// }

// // TYPE CONVERSION
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear)
// console.log(Number(inputYear) + 18);
// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('I am ' + String(23) + ' years old');

// console.log('23' - '10' - '3')