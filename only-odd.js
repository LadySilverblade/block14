//Create a JavaScript code that accepts an array of numbers and returns a new array with only the odd numbers from the original array. If there is only one odd number in the array, return an array with that single value.
//use for loop to identify the odd numbers and print them out
const oddNumbers = [];
const numbers = [2, 4, 6, 8, 10, 11, 12];
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 2 === 1) {
		oddNumbers.push(numbers[i]);
	}
}
console.log(oddNumbers);
