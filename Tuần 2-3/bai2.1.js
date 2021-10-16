var sum = 0;
var fact = 1;
console.log('20183854-Nguyen Son Tung-IT2')
function handle(N){
    for(var i = 1; i<= N; i++){
        fact = 1;
        for(var j = i; j > 0; j-- ){
            fact = fact * j;
        }
        sum = sum + (1/fact);
    }
    return sum;
}
console.log(handle(3));