function handle2(a) {
    if (a == 1)
        return 1;
    return a * handle2(a - 1);
}
function handle(N){
    var s = 0;
    var t = 0;
    for(var i = 1; i <= N; i++){
        t = t+ handle2(i);
        s = s+(1/t);
    }
    return s;
}
console.log('20183854-Nguyen Son Tung-IT2')
console.log(handle(3));