console.log('20183854-Nguyen Son Tung-IT2')
function fibonacci(n) {
   return n < 1 ? 1
        : n <= 2 ? 2
        : fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(5))