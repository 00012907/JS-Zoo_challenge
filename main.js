// #Zoo_challenge
/*************************************************************** */
// price based on age
function calculateTicketPrice(age) {
  if ((age >= 0 && age <= 10) || age > 60) {
    return 0;
  } else if (age >= 11 && age <= 20) {
    return 2000;
  } else if (age >= 21 && age <= 60) {
    return 5000;
  }
}
// total price without discounts
function calculateTotalPrice() {
  const numberOfPeople = +prompt("How many of you?");
  let totalPrice = 0;

  let countAge11to20 = 0;
  let countAge21to60 = 0;

  for (let i = 1; i <= numberOfPeople; i++) {
    const age = +prompt(`Enter your age, please ${i}:`);
    totalPrice += calculateTicketPrice(age);

    // increment age group
    if (age >= 11 && age <= 20) {
      countAge11to20++;
    } else if (age >= 21 && age <= 60) {
      countAge21to60++;
    }
  }

  const discountedAge11to20 = countAge11to20 >= 3 ? totalPrice * 0.1 : 0;
  const discountedAge21to60 = countAge21to60 > 3 ? totalPrice * 0.3 : 0;

  totalPrice -= discountedAge11to20;
  totalPrice -= discountedAge21to60;

  console.log(totalPrice);
}
calculateTotalPrice();
/*************************************************************** */

// Loops

// Write a JavaScript code to print numbers from 1 to 20 using a for loop
/*************************************************************** */
/*
function printNumbers() {
  for (let i = 0; i <= 20; i++) console.log(i);
}
printNumbers();
*/
/*************************************************************** */

// Write a JavaScript code to find the sum of all odd numbers from 1 to 50 using a while loop.
/*************************************************************** */
/*
let sum = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 == 1) {
    sum += i;
  }
}
console.log(sum);
*/
/*************************************************************** */

//Write a JavaScript code to print the following pattern using nested loops:
/*************************************************************** */
/*
let n = 40;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    string += "";
  }
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "<br>";
}
document.write(`<pre>${string}</pre>`);
*/
/*************************************************************** */

//Write a JavaScript code to find the factorial of a given number using a for loop.
/*************************************************************** */
/*
let num = +prompt("Input a positive number: ");

if (num < 0) {
  console.log("Error, cant be negative number");
} else if (num === 0) {
  console.log(`Factorial of ${num} is 1.`);
} else {
  let n = 1;
  for (i = 1; i <= num; i++) {
    n *= i;
  }
  console.log(`Factorial of ${num} is ${n}`);
}
*/
/*************************************************************** */

//Write a JavaScript code to calculate the Fibonacci sequence up to the 10th term using a while loop
/*************************************************************** */
/*
const number = +prompt("Enter the number of terms: ");
let n1 = 0,
  n2 = 1,
  nextTerm;

console.log("Fibonacci Series:");

for (let i = 1; i <= number; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}
*/
/*************************************************************** */

// Write a JavaScript code to reverse a given string using a for loop.
/*************************************************************** */
/*
const str = prompt("Enter a string: ");
let newString = "";
for (let i = str.length - 1; i >= 0; i--) {
  newString += str[i];
}
console.log(newString);
*/
/*************************************************************** */

//Write a JavaScript code to count the number of vowels in a given string using a for loop.
/*************************************************************** */
/*
const str = prompt("Enter a string: ");
const count = str.match(/[aeiou]/gi).length;

console.log(count);
*/
/*************************************************************** */

//Write a JavaScript code to check if a given number is a prime number using a for loop.
/*************************************************************** */
/*
const n = prompt("Enter a number: ");
let isPrime = true;
for (let i = 2; i < n - 1; i++) {
  if (n % i == 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(`${n} is a prime number`);
} else {
  console.log(`${n} is a not prime number`);
}
*/
/*************************************************************** */
//Write a JavaScript function that takes a day number (1 to 7) as input and returns the corresponding day name (e.g., 1 for Sunday, 2 for Monday, etc.) using a switch statement.
/*************************************************************** */
/*
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesdsy");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Only from 1 to 7");
    break;
}
*/
/*************************************************************** */

//Implement a JavaScript function that takes a grade (A, B, C, D, or F) as input and returns the corresponding message (e.g., "Excellent", "Good", "Average", "Pass", or "Fail") using a switch statement
/*
const grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  case "D":
    console.log("Pass");
    break;
  case "F":
    console.log("Fail");
    break;
  default:
    console.log(`Input your grade within "A" to "F"`);
    break;
}
*/
/*************************************************************** */
