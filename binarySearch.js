function binarySearch(arr,val){
    let start=0;
    let end=(arr.length)-1;
    let mid =Math.floor((start +end)/2);

    while(arr[mid]!==val && start<=end){
        if(val>arr[mid]) start=mid+1
        else end=mid-1
        mid=Math.floor((start+end)/2)

    }
    return arr[mid] ===val ? mid:-1
}

module.exports=binarySearch;

console.log(binarySearch([1, 2, 3, 4, 5, 9, 12, 18, 30, 49, 55, 81, 130], 55
    ))