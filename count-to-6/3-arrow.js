//Exercise 3
/*You'll be given a variable number of arguments (process.argv[2] onward) to your program, all of which will be strings. Use arrow functions to perform a map-reduce operation over them, before outputting them to the console. That is, your solution should start with something like:
    var inputs = process.argv.slice(2);
    var result = inputs.map(// what goes here? )
    .reduce( //what goes here? );
    In particular, you should:
      * Map all incoming strings to their first character
      * Reduce the result by concatenating them together 
    So an input of ["Hello", "arrow", "functions"] would become "Haf". 
    To show your work, you should output the transformation to the console. The above example would be:  
        [Hello,arrow,functions] becomes "Haf"
 */
var inputs = process.argv.slice(2);
var result = inputs.map(s => s[0])
                   .reduce((soFar, s) => soFar + s);

console.log(`[${inputs}] becomes "${result}"`);