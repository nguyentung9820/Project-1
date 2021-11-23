list = ['Nguyen Van An', 'Nguyen Son Tung', 'Nguyen Van B', 'Nguyen Thi An', 'Tran Thi Thu'];
count = 0;
list.forEach(element => {
    array = element.split(" ")
    if(array[array.length - 2] == 'Thi'){
        count++
    }
});
console.log('Nguyen Son Tung - 20183854')
console.log('So ban co ten dem la Thi la ' + count)