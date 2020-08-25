function InsertionSort(arr){
    let currentVal;
    for(let i=1;i<arr.length;i++){
        currentVal =arr[i];
        for(var j=i-1;j>=0 && arr[j]>currentVal;j--){
            arr[j+1]=arr[j];

        }
        arr[j+1]=currentVal

    }

    return arr
}

console.log(InsertionSort([6, 
    4, 2, 7, 9, 3, 0, 1, 5, 8]))


module.exports =InsertionSort;