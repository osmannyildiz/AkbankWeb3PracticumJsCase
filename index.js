function oddishOrEvenish(num) {
	const numString = "" + num; // Convert number to string

	let sumOfDigits = 0;
	for (let i = 0; i < numString.length; i++) {
		const digit = +numString[i]; // Convert string to number
		sumOfDigits += digit;
	}

	return sumOfDigits % 2 === 0 ? "Even" : "Odd";
}

function assert(condition) {
	if (!condition) {
		throw new Error("Assertion failed!");
	}
}

function runTestCases() {
	let passed = false;
	try {
		assert(oddishOrEvenish(43) === "Odd");
		assert(oddishOrEvenish(373) === "Odd");
		assert(oddishOrEvenish(4433) === "Even");
		// assert(false === true); // Uncomment this line to test the testing code :D
		passed = true;
	} catch (err) {}

	if (passed) {
		alert("✅ Test cases passed!");
	} else {
		alert("❌ Test cases failed!");
	}
}
