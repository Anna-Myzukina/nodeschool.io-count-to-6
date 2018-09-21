//Exercise 6
/*You'll be given a variable number of arguments (process.argv[2] onward) to your program, all of which will be numbers. Use the ES6 spread operator to find the minimum value of these numbers and log it to the console.
And let's log the list of numbers themselves, to make it clearer. So the output should be, for example:
    The minimum of [18,5,7,24] is 5
 */
var numbers = process.argv.slice(2);
var min = Math.min(...numbers);

console.log(`The minimum of [${numbers}] is ${min}`);