onmessage = function (oEvent) {
	if(isPrime(oEvent.data.num)) postMessage(isPrime(oEvent.data));
};


function isPrime(n) {

    if (n === 1 || n===2) {
        return false;
    }

    if (n % 2 === 0) {
        return false;
    }
    var i, l;
    // Checking for divisors
    for (i = 3, l = Math.sqrt(n); i <= l; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
};