const Insertion = require('../InsertionSort');



test("check if the Insertion exist", () => {
    expect(Insertion).toBeDefined()
});

test('test that the (InsertionSort) sorts the array from smallest to largest', () => {
    expect(Insertion([6, 4, 2, 7, 9, 3, 0, 1, 5, 8])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
})