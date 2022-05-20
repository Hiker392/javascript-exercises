const palindromes = function (string) {
	const regex = /[^\w]/g;
	string = string.toLowerCase().replace(regex, "");
	let array = string.split("");
	let reversedArray = [];
	array.forEach((element) => {
		reversedArray.unshift(element);
	});
	let reversedString = reversedArray.join("");
	if (string == reversedString) {
		return true;
	} else {
		return false;
	}
};
// Do not edit below this line
module.exports = palindromes;
