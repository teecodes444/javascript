// Write a function called add7 that takes one number and returns that number + 7.
function add7(num1) {
    return num1 + 7;
}
alert(add7(10));

// Write a function called multiply that takes 2 numbers and returns their product.
function multiply(num1, num2) {
    return num1 * num2;
}

alert(multiply(2,2));

// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
function capitalize(string) {
    // take string argument
    // select first letter of string
    // capitalize selected letter
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

alert(capitalize('YOOO'));
// Write a function called lastLetter that takes a string and returns the very last letter of that string:

function lastLetter(string) {
    return string.substr(-1);
}

alert(lastLetter('abcd'));

// BELOW IS FROM 100 DEVS


// *Variables*
// Create a variable and console log the value

const variable = 'hi';
console.log(variable);

// Create a variable, add 10 to it, and alert the value
let addTen = 5;
addTen = addTen + 10;
alert(addTen);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFour(num1, num2, num3, num4) {
    return num1 - num2 - num3 - num4;
}
alert(subFour(10,4,3,1));

// Create a function that divides one number by another and returns the remainder
function divide(num1, num2) {
    return num1/num2
}

console.log(divide(6,3));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwo(num1, num2) {
    if ((num1 + num2) > 50) {
        alert('Jumanji');
    } else {
        alert('you lost :(')
    }
}

addTwo(26, 3);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThree(num1, num2, num3) {
    if ((num1*num2*num3) % 3 == 0) {
        alert('ZEBRA');
    } else {
        alert('no zebraa :(')
    }
}

multiplyThree(7,2,8);