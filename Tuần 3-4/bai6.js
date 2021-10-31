arr = [1,2,3,4,5,6,7,8,9]
result = []; 
for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr.length; j++){
        if(arr[i] != arr[j] && arr[i] % arr[j] == 0 && !result.includes(arr[j])) {
            result.push(arr[j]);
        }
    }
}

console.log('NguyenSonTung-20183854')
console.log(result)
