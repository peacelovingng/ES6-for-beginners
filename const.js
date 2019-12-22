// const is used to assign a fixed value to the variable

const a = 50;
//a = 60;    // TypeError: Assignment to constant variable.
console.log(a);

const b = "Constant variable";
//b = "Assigning new value";    // TypeError: Assignment to constant variable.
console.log(b);

const LANGUAGES = ['JS', 'Ruby', 'Python', 'Go'];
// LANGUAGES = 'JavaScript';    // TypeError: Assignment to constant variable.
LANGUAGES.push('Java')
console.log(LANGUAGES)
