// function LinearSearch(arr,val){

//     for (let i=0;i<arr.length;i++){
//         if(arr[i] === val) return i
//         else return -1
//     }

// }

// console.log(LinearSearch([1, 2, 3, 4, 5, 9, 12, 18, 30, 49, 55, 81, 130], 100))


function Amaka(n){
    let start=0.50
    for(let i=0;i<=n;i++){
        console.log(i)
        start*=2
        console.log(start)
    }


    return start

}

console.log(Amaka(30))