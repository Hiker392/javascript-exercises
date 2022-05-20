const add = function (num1, num2) {
	result = num1 + num2;
	return result;
};

const subtract = function (num1, num2) {
	result = num1 - num2;
	return result;
};

const sum = function (array) {
	let result = 0;
	console.log(array);
	if (array.length == 0) {
		return 0;
	} else {
		array.forEach((arg) => {
			result = result + arg;
		});
		return result;
	}
};
const multiply = function (array) {
	let result = 1;
	array.forEach((arg) => {
		result = result * arg;
	});
	return result;
};

const power = function (num1, num2) {
	let result = 1;
	for (let i = 0; i < num2; i++) {
		result = result * num1;
	}
	return result;
};

const factorial = function (num) {
	let result = 1;
	for (num; num > 0; num--) {
		result = result * num;
	}
	return result;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
