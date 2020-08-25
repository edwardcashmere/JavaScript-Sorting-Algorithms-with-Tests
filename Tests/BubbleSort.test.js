const BubbleSort=require('../BubbleSort')
const {swap} =require("../BubbleSort")



test('test that the function sorts the array from smallest to largest',()=>{
    expect(BubbleSort).toBeDefined()
});
test('test that the function dorts the array from smallest to largest', () => {
    expect(BubbleSort([6,4,2,7,9,3,0,1,5,8])).toEqual([0,1,2,3,4,5,6,7,8,9])
})

