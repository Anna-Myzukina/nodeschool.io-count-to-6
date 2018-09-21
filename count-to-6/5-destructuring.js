//Exercise 5
/*Let's assume that we need to extract certain pieces of information concerning a user from an input array, which has the following format:
    [userId, username, email, age, firstName, lastName]
The consecutive values of this array will be given as execution parameters, so you can obtain them using:
    let userArray = process.argv.slice(2); // userArray equals here e.g. [1,
"jdoe", "jdoe@example.com", "John", "Doe"]
Your task is to extract information about the username and email to a separate object containing two properties - username and email - and log it out.
    let userArray = process.argv.slice(2);
    // what goes here?
    console.log(// your result ); // {username: "jdoe", email: "john@doe.com"}
 */
let args = process.argv.slice(2);
    let result = {};

    [, result.username, result.email] = args;

    console.log(result);