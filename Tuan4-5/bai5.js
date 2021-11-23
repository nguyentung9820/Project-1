input = '01010100010101010011101101';
array = input.split('')
result = [];
array.forEach(item => {
    if(item == 0){
        result.push(1)
    } else {
        result.push(0)
    }
})
console.log('Nguyen Son Tung - 20183854')
console.log('Chuoi ban dau: ' + input)
console.log("Ket qua: " + result.join(""))