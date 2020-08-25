const { Pivot,QuickSort} =require("../QuickSort");

test("pivot is helper fucntion exists",()=>{
    expect(Pivot).toBeDefined()
});

test("QuickSort function exists",()=>{
    expect(QuickSort).toBeDefined()
});

test("Pivot returns corect index",()=>{
    expect(Pivot([4,8,5,6,9,0,1,3])).toBe(3)
})

test("test quick actually sorts out an array",()=>{
    expect(QuickSort([6, 4, 2, 7, 9, 3, 0, 1, 5, 8])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
})