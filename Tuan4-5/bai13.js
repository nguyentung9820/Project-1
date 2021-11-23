list = ['Nguyen Van An', 'Nguyen Son Tung', 'Nguyen Van Hung', 'Nguyen Thanh Han', 'Tran Thi Thu'];
result = [];
list.forEach(element => {
    array = element.split(" ")
    check = array[array.length - 1].split("");
    if(check[0] == 'H'){
        result.push(element);
    }
});
console.log('Nguyen Son Tung - 20183854')
console.log('So ban ten bat dau bang chu H  la ' + result.length)