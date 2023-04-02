// sum of two numbers
let a = 3;
let b = 4;
console.log(a + b);

// Check for strict comparision
// implies values + data type check
let a1 = 1;
let b1 = '1';
let c1 = 1;
console.log(a1 == b1);
console.log(a1 === b1);  // value is same but data type is different
console.log(a1 == c1);
console.log(a1 === c1);

// to know the data type of any value
let a2 = 'Rahul'
console.log(typeof a2);
// or we can use 
console.log(typeof(a2));

// get nth char. of string
let n = 3;
console.log(a2[n - 1])


// Remove first 3 characters of string
let s = 'Rahul';  
console.log(s.slice(3, )) // or simply console.log(s.slice(3));

// to get last three characters of string
console.log(s.slice(-3)); // this works same as in python

// get first n characters of string
console.log(s.slice(0, 3)); // n = 3;

// Find the position of one string in another
// https://www.jschallenger.com/javascript-practice/javascript-fundamentals/index-of-substring-in-string
let a3 = 'hello world';
console.log(a3.indexOf('el'));


// https://www.jschallenger.com/javascript-practice/javascript-fundamentals/extract-first-half-string-javascript
// Extract first half of the string
let a4 = 'helloworld';
console.log(a4.slice(0, a4.length/2));


// https://www.jschallenger.com/javascript-practice/javascript-fundamentals/remove-last-characters-string-javascript
// Remove last three char of string
let a5 = 'helloworld';
console.log(a5.slice(0, a5.length - 3));
// other way todo same: console.log(a5.slice(0, -3));


// https://www.jschallenger.com/javascript-practice/javascript-fundamentals/return-percentage-of-number
// Return the % of the number
// let a, b is number then: console.log(b * a/100);

// https://www.jschallenger.com/javascript-practice/javascript-fundamentals/basic-math-operators-javascript
// Basic Js Math operators
function myFunction(a, b, c, d, e, f) {
    return (((a + b - c) * d) / e) ** f;
}

// https://www.jschallenger.com/javascript-practice/javascript-fundamentals/check-if-string-contains-string
function myFunction(a, b){
    return (a.includes(b) ? b + a : a + b);
    // other way to do the same
    // return (a.indexOf(b) === -1 ? a + b : b + a);
}


// Check if number is even
// console.log((n % 2 === 0 ? "even" : "odd"));

// https://www.jschallenger.com/javascript-practice/javascript-fundamentals/times-character-occurs-string
/* 
let a = 'hello world';
let b = 'o';
console.log(a.split(b));  // similarly, we do in python!!!
console.log(a.split(b).length - 1);
*/


// Check if number is whole number
/* 
let a = 132423.214;
let b = 1235235;
console.log(Math.floor(a));
console.log(a - Math.floor(a));
// just check if: a - Math.floor(a) == 0 if true => whole number else decimal
 */

// Ternary operator
// console.log((condition ? statement1 : statement2));

// Round number to "two" decimal places
/* 
let a = 26.1379;
console.log(Math.floor(a) + Math.round((a - Math.floor(a)) * 100)/100);

// 2.12397 - 2 = 0.12397
// 0.12397 * 100 = 12.397 = Math.floor(12.397) = 12
// we can also use Math.ceil()
*/
// other simpler ans to this: a.toFixed(2); => this will give two decimal place number


// Split number to digits
// first way
/* 
let num = 123515235;
console.log(num.toString().split("").map(Number));
 */

// other way
/* 
let num = 3473832364;
let str = num + '';
let strs = str.split('');
console.log(strs.map(digit => Number(digit)));
 */
