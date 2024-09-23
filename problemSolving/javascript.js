// Write a program that takes a user’s input and prints the numbers from one to the number the user entered. 
// However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. 
// For numbers which are multiples of both three and five print "FizzBuzz".

// Take user input
document.querySelector('#submit').addEventListener('click', run);
document.querySelector('#reset').addEventListener('click', reset);

function run() {
    const uValue = document.querySelector('#value').value;
    for (let i = 1; i <= uValue; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz")
        } else if (i % 3 === 0) {
            console.log("fizz")
        } else if (i % 5 === 0) {
            console.log("buzz")
        } else {
            console.log(i);
        }
    };
};

function reset() {
    document.querySelector('#value').value = "";
}
// Print numbers from 1 until user input value
// when user value is a multiple of 3
    // print fizz
// when user value is a multiple of 5
    // print buzz
// when user value is multipe of 3 and 5
    // print "fizzbuzz"
    
