mang = [1,1, 3,3,3,3,3 ,4,5,3,4,4,4,4,4,4];
maxkt=0; // lúc đầu
key = [];
for (i=0;i<mang.length;i++){
    if  ( mang[i]==mang[i+1] ) // nếu xuất hiện sự trùng lặp
    {
       k=i;
       while (mang[k]==mang[i])
        k++;
        ddt=k-i;   // ddt độ dài temp ( độ dài của các đoạn con nhất thời )
        if (maxkt<ddt) {
            maxkt=ddt;
            }
    } 
} 
for (i=0;i<mang.length;i++) {
    if  ( mang[i]==mang[i+1] ) // nếu xuất hiện sự trùng lặp
    {
       k=i;
       while (mang[k]==mang[i]) k++;
       ddt=k-i;   // ddt độ dài temp ( độ dài của các đoạn con nhất thời )
       if (maxkt==ddt) 
              {
                  for(j= i; j< k; j++){
                    key.push(j)
                  }
              }
    }
}
 
console.log('So luong phan tu trong mang la ' + maxkt)
console.log('Chi so cac phan tu trong mang la ' + key)