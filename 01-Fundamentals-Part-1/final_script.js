console.log('=== Main script ===')
/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

// Value is a piece of data
console.log('Jonas');
console.log(23);
console.log('This works?') // apparently it does

let firstName = 'Vladimir';
console.log('The Console log now is ' + firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = 'Tour guide'
let counter = true;
console.log(counter);
console.log(typeof counter);

*/
const now = 2022;
const ageJonas = now - 1990;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5 // x= y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log('Jonas ', ageJonas, 'Sarah ', ageSarah);
console.log(averageAge)

// Template String and Strings in General

const firstName = 'Vlad';
const job = 'student of AI';
const birthYear = 1990;
const currentYear = 2023;

const vlad = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!';

console.log(vlad)

const vladNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`;
console.log(vladNew)

console.log(`This is just a regular string... It is much easier because you don't need to use the quotes or single quoatitions.`)

// Multiline string

console.log(`This is a string
And this is a new line of a string.
And this is a new new line of a string, so we
can write paragraphs like this without thinking
too much about like \n or some other bulshit.`)
