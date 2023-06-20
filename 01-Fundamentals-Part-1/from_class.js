const hasDriversLivence = true; // Varibable A
const hasGoodVision = true; // Variable B

console.log(hasDriversLivence && hasGoodVision);
console.log(hasDriversLivence || hasGoodVision);
console.log(!hasDriversLivence);

const shouldDrive = hasDriversLivence && hasGoodVision;

if (shouldDrive) {
    console.log("She should be able to drive.")
} else {
    console.log("Someone else should drive.")
}

const isTired = true; // C

console.log(hasDriversLivence && hasGoodVision && !isTired);

if (shouldDrive && !isTired) {
    console.log("She is able to drive.")
} else {
    console.log('Someone else should drive.')
}