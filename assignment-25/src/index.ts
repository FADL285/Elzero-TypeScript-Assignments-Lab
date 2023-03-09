// Write Function Code Here
function showTypes<T = string, U = string, V = string>(arg1: T = "Nothing" as T, arg2: U = "Nothing" as U, arg3: V = "Nothing" as V): string {
  return `${arg1} - ${arg2} - ${arg3}`;
}

// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true
