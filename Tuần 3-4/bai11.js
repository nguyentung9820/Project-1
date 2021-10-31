function longestIncreasingSequence(arr, strict) {

    var index = 0,
      indexWalker,
    	longestIncreasingSequence,
    	i,
    	il,
    	j;

    // start by putting a reference to the first entry of the array in the sequence
    indexWalker = [index];
    	
	for (i = 1, il = arr.length; i < il; i++) {
		
        if (arr[i] < arr[indexWalker[index]]) {
         	
        	for (j = 0; j <= index; j++) {

            	
                if (arr[i] < arr[indexWalker[j]] && (!strict || !j || arr[i] > arr[indexWalker[j-1]])) {
                    indexWalker[j] = i;
                    break;
                }
            }

        } else if (arr[i] > arr[indexWalker[index]] || (arr[i] === arr[indexWalker[index]] && !strict))  {
            indexWalker[++index] = i;
        }
		
    }

	longestIncreasingSequence = new Array(index + 1);
	longestIncreasingSequence[index] = arr[indexWalker[index]];


	for (i = index - 1; i >= 0; i--) {

		// If the index stored is smaller than the last one it's valid to use its corresponding value in the sequence... so we do  
		if (indexWalker[i] < indexWalker[i + 1]) {
            longestIncreasingSequence[i] = arr[indexWalker[i]];

        // but bigger than the value at i (this must be possible because of the way we constructed the indexWalker array)
        } else {
            for ( j = indexWalker[i + 1] - 1; j >= 0; j--) {
                if ((strict && arr[j] > arr[indexWalker[i]] && arr[j] < arr[indexWalker[i + 1]]) || 
                	(!strict && arr[j] >= arr[indexWalker[i]] && arr[j] <= arr[indexWalker[i + 1]]) ){
                    longestIncreasingSequence[i] = arr[j];
                    indexWalker[i] = j;
                    break;
                }
            }
        }
    }

    return longestIncreasingSequence;
}
console.log('NguyenSonTung-20183854')
console.log(longestIncreasingSequence([1,2,3,4,5,6,8,3,1,2,3,4,1,3,4], true))