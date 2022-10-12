var arr=[3,4];
for(var i=2;i<+25;i++){
    arr[i]=arr[i-1]+arr[i-2];
}
console.log(arr);