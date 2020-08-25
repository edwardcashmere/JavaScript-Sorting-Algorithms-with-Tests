function getDigits(num,i){
    return Math.floor(Math.abs(num)/Math.pow(10,i))%10
}

function countDigits(num){
    if(num ===0) return 0;
    return Math.floor(Math.log10(num))+1
}

function maxDigits(num){
    let maxDigits=0;
    for(let i=0;i<num.length;i++){
        maxDigits=Math.max(maxDigits,countDigits(num[i]))
    }

    return maxDigits
}
function radixSort(nums){
    let mostDigits=maxDigits(nums);
    for(let k=0;k<mostDigits;k++){
        let buckets=Array.from({length:10},()=>[])
        for (let i=0;i<nums.length;i++){
            buckets[getDigits(nums[i],k)].push(nums[i])
        }
        nums=[].concat(...buckets)
    }
    return nums
}
console.log(radixSort([125, 4783, 46, 2, 4824290, 4782, 4829, 5783]))

module.exports.radixSort=radixSort
module.exports.maxDigits=maxDigits;
module.exports.countDigits=countDigits;
module.exports.getDigits=getDigits;