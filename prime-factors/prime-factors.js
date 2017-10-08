var primeFactors = {
  for: function getPrimeFactors(product) {
    let primeFactors = [];
    let i = 2;
    while (product > 1) {
      if (product % i === 0) {
        primeFactors.push(i);
        product = product / i;
      } else {
        i += 1;
      }
    }
    return primeFactors;
  }
};

module.exports = primeFactors;

console.log(primeFactors.for(150));
console.log(primeFactors.for(250));
