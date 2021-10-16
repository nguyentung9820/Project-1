var check0 = 0;
var check1 = 0;
var check2 = 0;
var check3 = 0;
console.log('20183854-Nguyen Son Tung-IT2')
for(var i = 0; i <=100; i++){
    var result = i%5;
    switch(result) {
    case 0:
        check0++;
        break;
    case 1:
        check1++;
        break;
    case 2:
        check2++;
        break;
    case 3:
        check3++;
        break;
    }
}
console.log('Số các số chia 5 dư 0: ' + check0);
console.log('Số các số chia 5 dư 1: ' + check1);
console.log('Số các số chia 5 dư 2: ' + check2);
console.log('Số các số chia 5 dư 3: ' + check3);