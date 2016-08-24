
// Return prime factors as an array
function primeFactors (num) {
	var factors = [];
	var denominator = 2;
	while (num > 1) {
		while (num % denominator === 0) {
			factors.push(denominator);
			num /= denominator;
		}
		denominator++;
		if ((denominator * denominator > num) && (num > 1)) {
			factors.push(num);
			break;
		}
	}
	return factors;
}

function getMaxinArray(array) {
  return Math.max(...array)
}

function largestPrime (num) {
  return getMaxinArray(primeFactors(num));
}

largestPrime(600851475143);
