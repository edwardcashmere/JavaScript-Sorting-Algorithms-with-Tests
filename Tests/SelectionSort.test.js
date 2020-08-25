const SelectionSort=require('../SelectionSort');



test("check if the SelectionSort exist",()=>{
    expect(SelectionSort).toBeDefined()
});

test('test that the (selectionSort) sorts the array from smallest to largest', () => {
    expect(SelectionSort([6, 4, 2, 7, 9, 3, 0, 1, 5, 8])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
})