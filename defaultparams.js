// default parameters - parameters given by default while declaring a function
// but it’s value can be changed when calling the function

let func = (a, b=10) => {
    return a + b;
}

console.log(func(20));
console.log(func(20, 50));

let notWorkingFunc = (a=10, b) => {    // order is of importance
    return a + b;
}

console.log(notWorkingFunc(20));    // returns NaN - Not a Number
