function SelectionSort(arr){
    const swap = (arr, index1, index2) => {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]]}
    let lowest;
    for(let i=0;i<arr.length;i++){
        lowest =i
        for(var j=i+1;j<arr.length;j++){
            if(arr[j]<arr[lowest]){
                
                lowest=j
            }
            

        }
        if (i !== lowest) {
            swap(arr, i, lowest)
        }
    }

    return arr

}
//console.log(SelectionSort([6, 4, 2, 7, 9, 3, 0, 1, 5, 8]));

module.exports=SelectionSort;
