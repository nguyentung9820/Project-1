arr = [0, 5, 7, 0 ,8, 0, 9 ,9, 1]
result = [];
for(var i = 0; i < arr.length; i++) {
    if(arr[i] != 0){
        result.push(arr[i]);
    }
}
console.log(result);