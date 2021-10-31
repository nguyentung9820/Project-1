arr = [1, 3, 3 , 5, 6, 3, 7 , 8 ,9 ]
var N = 3;
countC = 0;
countMoreC = 0;
countLowC = 0;
for(var i = 0; i < arr.length; i++){
    if(arr[i] == N){
        countC++;
    }else if(arr[i] > N){
        countMoreC++;
    }else {
        countLowC++;
    }
}
console.log('NguyenSonTung-20183854') 
console.log('So luong cac so nho hon ' + N + ' la ' + countLowC)
console.log('So luong cac so bang ' + N + ' la ' + countC)
console.log('So luong cac so lon hon ' + N + ' la ' + countMoreC)