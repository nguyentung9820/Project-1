check = 0;
console.log('20183854-Nguyen Son Tung-IT2')
for (var counter = 2; counter <= 100; counter++) {
    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false && check < 20) {
                check++;
                console.log(counter);
    }
}