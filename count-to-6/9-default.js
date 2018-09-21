//Exercise 9
/*For this exercise, you should write a Node module whose default export is a function that will make a string really important. It should do this by adding a bunch of exclamation marks after it. The exact number of exclamation marks should be configurable, but by default, it should be equal to the length of
the string. So:
    makeImportant("Hi", 5);             // => "Hi!!!!!"
    makeImportant("Hi");                // => "Hi!!"
    makeImportant("Hello?", undefined); // => "Hello?!!!!!!"
Bonus ES6 knowledge that might be helpful: ES6 includes a String.prototype.repeat that does exactly what you'd imagine.
 */
module.exports =
        (string, bangs = string.length) => string + "!".repeat(bangs);