const caesar = function (string, cipher) {
	const regex = /\w/;
	const upperArray = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];
	const lowerArray = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];
	let cipherArray = [];
	console.log(string);
	for (let char of string) {
		let isNotPunct = regex.test(char);
		if (isNotPunct === true) {
			if (char === char.toUpperCase()) {
				console.log(
					upperArray.indexOf(char) +
						cipher -
						upperArray.length *
							Math.floor(
								(upperArray.indexOf(char) + cipher) /
									upperArray.length
							)
				);
				cipherArray.push(
					upperArray[
						upperArray.indexOf(char) +
							cipher -
							upperArray.length *
								Math.floor(
									(upperArray.indexOf(char) + cipher) /
										upperArray.length
								)
					]
				);
			} else if (char === char.toLowerCase()) {
				cipherArray.push(
					lowerArray[
						lowerArray.indexOf(char) +
							cipher -
							lowerArray.length *
								Math.floor(
									(lowerArray.indexOf(char) + cipher) /
										lowerArray.length
								)
					]
				);
			}
		} else {
			cipherArray.push(char);
		}
	}
	console.log(cipherArray.join(""));
	return cipherArray.join("");
};

// Do not edit below this line
module.exports = caesar;
