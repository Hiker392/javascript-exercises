const reverseString = function (string) {
	let idxLast = string.length;
	let strArray = string.split("");
	let strArrayReversed = [];
	for (let i = 0; i < idxLast; i++) {
		strArrayReversed.push(strArray.pop());
	}
	let strReversed = strArrayReversed.join("");
	return strReversed;
};

// Do not edit below this line
module.exports = reverseString;
