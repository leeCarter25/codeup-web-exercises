// JavaScript let, const and var vid lesson

// Note: only use const unless you know that later on the value will need to be changed then let is ok to use.

let age = 30;
age = 31;
console.log(age);


// cannot reassign const value.

const birthYear = 1996;
// birthYear = 1990;
console.log(birthYear);


// cannot declare empty value with const gives error.
// const job;

// var can be done just like let up above.
// Note: let is block scoped and var is function scoped.

var job = "fisherman";
job = "coder";
console.log(job);


// this can be done, but this doesn't create the variable in the current scope, instead it's created on the global object.
// lastName = "carter";
console.log(lastName);

// JavaScript Basic Operators vid lesson

// Math Operators
const now = 2037
const ageChris = now - 1996;
const ageKat = now - 1995;
console.log(ageChris, ageKat);

// Note: 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
console.log(ageChris * 2, ageChris / 10, 2 ** 3);

const firstName = "Chris";
const lastName = "Carter";
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--;
x--; // brings our value to 99
console.log(x);

// Comparison Operators
// Note: we use comparison operators to produce boolean values.
console.log(ageChris > ageKat); // >, <, >=(means greater or equal to), <=(means less than or equal to)
console.log(ageKat >= 42);

const isFullAge = ageKat >= 42;

console.log(now - 1996 > now - 1995);

// Operator Precedence

const now = 2037
const ageChris = now - 1996;
const ageKat = now - 1995;

console.log(now - 1996 > now - 1995);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageChris + ageKat) / 2
console.log(ageChris, ageKat, averageAge);
