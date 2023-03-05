console.log('Hello World! 🌎')

let nothing;
let theName: string = "ElZero";
function showMyDetails(a = "", b = "", c?) {
    return `${a}${b}${c}`;
}

// Replace ???? With The Available Variables As Argument To Get The Result
console.log(showMyDetails(theName, nothing)); // ElZero
