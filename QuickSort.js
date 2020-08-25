function Pivot(arr,start=0,end=arr.length-1){

    const swap=(arr,index1,index2)=>{
        [arr[index1],arr[index2]] =[arr[index2],arr[index1]]
    }

    let pivotindex=arr[start];
    let index=start;
    for(let i=start+1;i<=end;i++){
        if(arr[i]<pivotindex){
            index++
           // console.log(index)
            swap(arr,index,i)
           
        }
    }
    swap(arr,start,index)
    console.log(arr)

    return index
}

function QuickSort(arr,left=0,right=arr.length-1){
    if(left<right){
        let pivotIndex = Pivot(arr, left, right);

        QuickSort(arr, left, pivotIndex - 1)

        QuickSort(arr,pivotIndex+1,right)

        return arr
        
    }
   
}
console.log(QuickSort([4, 8, 5, 6, 9, 0, 1, 3]))

module.exports.Pivot=Pivot;
module.exports.QuickSort=QuickSort;
