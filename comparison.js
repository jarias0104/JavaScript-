//use the logical operator '===' to compare variable values and check the console output to check if it's true or false.

const myFirstNumber = 1;
const mySecondNumber = 2;
const myThirdNumber = 3;
const myFourthNumber = myFirstNumber + mySecondNumber; //here I use the addition operator + to combine the value of the first and second variable numbers to create a new variable which number will be equal to 3
const myFifthNumber  = 4;
const mySixthNumber = 4;

console.log('Is the first number equal to the second number?',myFirstNumber === mySecondNumber);
console.log('Is the third number equal to the fourth number?', myThirdNumber === myFourthNumber);
console.log('IS the fifth number equal to the sixth number?', myFifthNumber === mySixthNumber);

//the ending result should be: 1- false, 2-true, 3-true.
