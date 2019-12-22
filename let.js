// let is similar to var but, let has scope - only accessible in the block level it is defined
/*
if (true) {
    let a = 40;
    console.log(a);
}
console.log(a);    // ReferenceError: a is not defined - outside of the scope
*/

let a = 50;
let b = 100;
if (true) {
    let a = 60;
    var c = 10;    // accessible everywhere
    console.log(a/c);
    console.log(b/c);
}
 console.log(c)
 console.log(a)
