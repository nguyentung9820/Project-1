input = 'aeh231jh3u1h3j3j123h1niu123';
array = input.split("");
result = [];
array.forEach(item => {
    if(!isNaN(item)){
        result.push('$')
    } else {
        result.push(item)
    }
})
console.log('Nguyen Son Tung - 20183854')
console.log(result.join(""))