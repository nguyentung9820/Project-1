function handle(N){
    var s = 0;
    var t = 0;
    for(var i = 1; i <= N; i++){
        t = t+i;
        s = s+(1/t);
    }
    return s;
}
console.log('20183854-Nguyen Son Tung-IT2')
console.log(handle(5));