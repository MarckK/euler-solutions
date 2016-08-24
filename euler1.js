// Find the sum of all the multiples of 3 or 5 below 1000.

function sumOfMultiplesOf3or5 (number) {
	sum = 0;
		for (var i = 1; i < number; i++) {
			if (i % 3 === 0 || i % 5 === 0) {
				sum += i;
			}
		}
	return sum;
}

sumOfMultiplesOf3or5(1000);
