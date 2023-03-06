console.log('Hello World! 🌎')

type custom = "Yes" | "No" | "Error";
function isHeOld(age: any) : custom  {
    if (typeof age !== "number") return "Error";
    return age > 40 ? "Yes" : "No";
}

// Do Not Edit Here
console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"
