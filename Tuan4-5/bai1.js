console.log('Nguuyen Son Tung 20183854');
input = 'Nguyen    Son          Tung';
array = input.split(" ");
result = [];
array.forEach(item => {
    if(item != ""){
        result.push(item)
    }
})
console.log("Chuoi ban dau: " + input)
console.log("Ket qua: " + result.join(" "))