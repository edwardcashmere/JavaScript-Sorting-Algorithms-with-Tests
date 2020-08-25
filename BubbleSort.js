function BubbleSort(arr){
    let sorted ;

    const swap =(arr,index1,index2)=>{
        [arr[index1],arr[index2]] =[arr[index2],arr[index1]]

    }
    for (let i = arr.length;i>0;i--){
        sorted=true

        for(let j=0;j<i-1;j++){
            if(arr[j]>arr[j+1]){
               swap(arr,j,j+1)
                sorted=false
                //console.log("================")
                //console.log(arr)
            }

        }
        if(sorted) break;
    }


    return arr
}
//console.log(BubbleSort([6, 4, 2, 7, 9, 3, 0, 1, 5, 8]))


module.exports =BubbleSort;