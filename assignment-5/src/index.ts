console.log('Hello World! 🌎')

// Update the tsconfig to display the errors the following errors 🚀

// ------------> Unfixed Function
/*
function reportErrors(username, age: number) {
    let rank = "Professor";
    return `Username: ${username}`;
    console.log("We Will Not Reach Here");
}
*/

// -----------> Fixed the errors in the function
function reportErrors(username: string) {
    return `Username: ${username}`;
}

console.log(reportErrors("FADL"));
