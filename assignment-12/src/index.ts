console.log('Hello World! 🌎')

function yesOrNo(val: any ) : "Yes" | "No" | "Error" {
    if (typeof val !== "number") return "Error";
    return val > 10 ? "Yes" : "No";
}

// Do Not Edit Here
console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // Yes
console.log(yesOrNo(8)); // No
