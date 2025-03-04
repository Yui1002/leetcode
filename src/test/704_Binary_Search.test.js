const search = require('../704_Binary_Search');

test('search in array [-1,0,3,5,9,12] for target 9', () => {
    const nums = [-1,0,3,5,9,12];
    const target = 9;
    const result = search(nums, target);
    expect(result).toBe(4); // The index of 9 in the array is 4
});

test('search in array [-1,0,3,5,9,12] for target 2', () => {
    const nums = [-1,0,3,5,9,12];
    const target = 2;
    const result = search(nums, target);
    expect(result).toBe(-1); // 2 is not in the array, so the result should be -1
});

test('search in array [5] for target 5', () => {
    const nums = [5];
    const target = 5;
    const result = search(nums, target);
    expect(result).toBe(0); // The index of 5 in the array is 0
});

test('search in array [5] for target 0', () => {
    const nums = [5];
    const target = 0;
    const result = search(nums, target);
    expect(result).toBe(-1); // 0 is not in the array, so the result should be -1
});

test('search in empty array [] for target 1', () => {
    const nums = [];
    const target = 1;
    const result = search(nums, target);
    expect(result).toBe(-1); // The array is empty, so the result should be -1
});