"use strict";
const removeFromArray = function (anArray, ...allArgs) {
	let argsArray = allArgs;
	let baseArray = anArray;
	argsArray.forEach((val) => {
		if (baseArray.includes(val)) {
			console.log(baseArray.indexOf(val));
			console.log(baseArray);
			baseArray.splice(baseArray.indexOf(val), 1);
			console.log(baseArray);
		}
	});
	return baseArray;
};

// Do not edit below this line
module.exports = removeFromArray;
