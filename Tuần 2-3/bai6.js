var count = 0;
var n = 0;
console.log('20183854-Nguyen Son Tung-IT2')
function isPerfect(n)
{
    var sum = 1;
    for (var i=2; i*i<=n; i++)
    {
        if (n%i==0)
        {
            if(i*i!=n)
                sum = sum + i + n/i;
            else
                sum=sum+i;
        }
    }
    if (sum == n && n != 1){
        count++;
        return true;
    }
  
     return false;
}
while (count < 5){
    n++
    if(n == 1){
        console.log(n);
        n++
    }
    if (isPerfect(n)){
        console.log(n);
    }
}

  

