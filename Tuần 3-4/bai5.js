function isPrime(num) {
    if(num < 2) return false;
  
    for (let k = 2; k < num; k++){
      if( num % k == 0){
        return false;
      }
    }
    return true;
  }
prime = 0;
notPrime = 0;
arr = [2, 3, 4, 5 ,6 ,7 ,8, 9]
for(var i = 0; i < arr.length; i++){
    if(isPrime(arr[i])){
        prime++;
    }else{
        notPrime++;
    }
}
console.log('NguyenSontung-20183854')
console.log('Number of prime: '+ prime);
console.log('Number of  not prime: '+ notPrime);
