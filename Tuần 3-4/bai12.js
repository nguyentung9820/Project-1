function isSubArray(A, B, n,m)
{
    // Two pointers to traverse the arrays
    var i = 0, j = 0;
 
    // Traverse both arrays simultaneously
    while (i < n && j < m) {
 
        // If element matches
        // increment both pointers
        if (A[i] == B[j]) {
 
            i++;
            j++;
 
            // If array B is completely
            // traversed
            if (j == m)
                return true;
        }
        // If not,
        // increment i and reset j
        else {
            i = i - j + 1;
            j = 0;
        }
    }
 
    return false;
}
 
var A = [ 2, 3, 0, 5, 1, 1, 2 ];
var n = A.length;
var B = [ 3, 0, 5, 1, 10 ];
var m = B.length;
var C = [ 5, 1, 1, 2];
var k = C.length

console.log('NguyenSonTung-20183854')
if (isSubArray(A, B, n, m)){
    console.log('Mang ' + B + ' la con cua mang ' + A)
} else{
    console.log('Mang ' + B + ' khong phai la con cua mang ' + A)
    }
if (isSubArray(A, C, n, k)){
    console.log('Mang ' + C + ' la con cua mang ' + A)
} else{
    console.log('Mang ' + C + ' khong phai la con cua mang ' + A)
}