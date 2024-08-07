"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => `The world is saved!`;
    //* let myFunction;
    // myFunction = 10;
    // console.log(myFunction);
    //* let myFunction: (y: number, z: number) => number;
    // myFunction = addNumbers;
    // console.log(myFunction(1, 2));
    //* let myFunction: (y: string) => string;
    // myFunction = greet;
    // console.log(myFunction('Bruce'));
    let myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
