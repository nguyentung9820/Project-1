list = ['Nguyen Van An', 'Nguyen Son Tung', 'Nguyen Van B', 'Nguyen Thanh An', 'Tran Thi Thu'];
count = 0;
list.forEach(element => {
    array = element.split(" ")
    if(array[array.length - 1] == 'An'){
        count++
    }
});
console.log('Nguyen Son Tung - 20183854')
console.log('So ban ten An la ' + count)