const fibonacci = function (val) {
	if (val < 0) {
		return "OOPS";
	} else {
		val = parseInt(val);
		arr = [1, 1];
		for (let i = 2; i < val; i++) {
			arr.push(arr[i - 2] + arr[i - 1]);
			console.log(arr);
		}
		return arr[val - 1];
	}
};

// Do not edit below this line
module.exports = fibonacci;
