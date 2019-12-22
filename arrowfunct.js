// Old syntax

function oldOne() {
    console.log('Hello World!');
}

// New syntax

var newOne = () => {    // declare a variable newOne and assign it to the function ()
                        // => defines the function body
    console.log('Hello World!');
}

oldOne();
newOne();

// Another example of arrow function

let newOneWithParameters = (a, b) => {
    console.log(a+b);
}

newOneWithParameters(10, 20);
