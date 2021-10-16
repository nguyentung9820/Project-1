console.log('20183854-Nguyen Son Tung-IT2')
function findNumber(n){
    if (n % 2 == 0){
        return(2);
    }
    for (var i = 3; i * i <= n; i += 2) {
        if (n % i == 0){
            return(i);
        }
    }
    return(n);
}
console.log(findNumber(88));