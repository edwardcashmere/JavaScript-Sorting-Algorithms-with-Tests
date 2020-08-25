const {mergeSort} = require('../mergeSort');
const {merge}=require("../mergeSort");

test("test to check if two sorted arrays are merged correctly",()=>{
    expect(merge([2,8,9],[1,4,6,7])).toEqual([1,2,4,6,7,8,9])
})
test("check if the mergeSort exist", () => {
    expect(mergeSort).toBeDefined()
});

test('test that the (mergeSort) sorts the array from smallest to largest', () => {
    expect(mergeSort([6, 4, 2, 7, 9, 3, 0, 1, 5, 8])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
})