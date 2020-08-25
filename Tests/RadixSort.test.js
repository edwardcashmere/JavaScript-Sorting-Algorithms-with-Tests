const {getDigits,countDigits,maxDigits,radixSort} =require('../RadixSort');


test("function is defined",()=>{
    expect(getDigits).toBeDefined()
});
test("test function getDigits returns the digit of the index passed from the right",()=>{
    expect(getDigits(40954,2)).toBe(9)
})

test("test function returns number of digits of any particular number",()=>{
    expect(countDigits(49503)).toBe(5)
})
test("function is defined", () => {
    expect(maxDigits).toBeDefined()
});
test("function is defined", () => {
    expect(countDigits).toBeDefined()
});

test("function returns maximum value of the largest number ",()=>{
    expect(maxDigits([45,567,8976,2345364,754,754])).toBe(7)

});
test("check that radix sort actually works",()=>{
    expect(radixSort([125, 4783, 46, 2, 4824290, 4782, 4829, 5783])).toEqual([2, 46, 125, 4782, 4783, 4829, 5783, 4824290])
})