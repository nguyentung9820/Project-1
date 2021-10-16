n = 70
console.log('20183854-Nguyen Son Tung-IT2')
function primeFactors(n) {
  const factors = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor == 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}

console.log('Tích các số nguyên tố của ', n + ':', primeFactors(n).join(' '))
