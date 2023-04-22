// Create a JavaScript code that accepts a string of lowercase letters. Print the word followed by how many consonants and vowels it has.
// "a", "e", "i", "o", and "u" are considered vowels.
// Every other letter is considered a consonant.
// Define two variables that keep track of the number of consonants and vowels.
const wordcount = [];
const words = 'ukelele';
for (let i = 0; i < words.length; i++) {
	if (
		words[i] === 'e' ||
		words[i] === 'a' ||
		words[i] === 'i' ||
		words[i] === 'o' ||
		words[i] === 'u'
	) {
		wordcount.push(words[i]);
	}
}
const consonants = words.length - wordcount.length;
const vowels = wordcount.length;
console.log(
	words + ' has ' + consonants + ' consonants' + ' and ' + vowels + ' vowels'
);
