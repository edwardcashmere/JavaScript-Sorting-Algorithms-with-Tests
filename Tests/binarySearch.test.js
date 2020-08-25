const binarySearch =require("../binarySearch");


test("test if the function exists",()=>{
    expect(binarySearch).toBeDefined()
})

test("test to see if the fucntion returns the correct index of the value ",()=>{
    expect(binarySearch([1, 2, 3, 4, 5, 9, 12, 18, 30, 49, 55, 81, 130], 49)).toBe(9)
})

test("if a value does not exist the function returns -1",()=>{
    expect(binarySearch([1, 2, 3, 4, 5, 9, 12, 18, 30, 49, 55, 81, 130], 100)).toBe(-1)
})