arr = [0,1 , 2, 3, 5, 6, 9]
var max = Math.max(...arr);
result = [];
for(var i = 0; i < max; i++){
    if(!arr.includes(i)){
        result.push(i);
    }
}
min = Math.min(...result);
console.log('NguyenSonTung-20183854')
console.log(min)