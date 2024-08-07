(() => {
	const addNumbers = (a: number, b: number) => a + b;
	const greet = (name: string) => `Hello ${name}`;
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

	let myFunction: () => string;
	myFunction = saveTheWorld;
	console.log(myFunction());
})();
