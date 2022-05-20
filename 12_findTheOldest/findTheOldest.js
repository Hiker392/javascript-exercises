const findTheOldest = function (people) {
	let oldestPerson = {};
	let oldestAge = null;
	let thisAge = null;
	const today = new Date();

	people.forEach((element) => {
		if (element.yearOfDeath == null) {
			thisAge = today.getFullYear() - element.yearOfBirth;
			console.log(thisAge);
			if (oldestAge == null || oldestAge < thisAge) {
				oldestAge = thisAge;
				oldestPerson = element;
			}
		} else {
			thisAge = element.yearOfDeath - element.yearOfBirth;
			if (oldestAge == null || oldestAge < thisAge) {
				oldestAge = thisAge;
				oldestPerson = element;
			}
		}
	});
	return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
