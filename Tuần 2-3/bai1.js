console.log('20183854-Nguyen Son Tung-IT2')
for (var counter = 0; counter <= 100; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === true) {
                console.log(counter);
    }
}