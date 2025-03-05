const TreeNode = require('../TreeNode');
const sortedArrayToBST = require('../108_Convert_Sorted_Array_to_Binary_Search_Tree');

function treeToArray(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];
    while (queue.length) {
        const node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }
    // Remove trailing nulls
    while (result[result.length - 1] === null) {
        result.pop();
    }
    return result;
}

test('sortedArrayToBST for array [-10,-3,0,5,9]', () => {
    const nums = [-10, -3, 0, 5, 9];
    const root = sortedArrayToBST(nums);
    const result = treeToArray(root);
    expect(result).toEqual([0, -10, 5, null, -3, null, 9]);
});

test('sortedArrayToBST for array [1,3]', () => {
    const nums = [1, 3];
    const root = sortedArrayToBST(nums);
    const result = treeToArray(root);
    expect(result).toEqual([1, null, 3]);
});

test('sortedArrayToBST for array [1]', () => {
    const nums = [1];
    const root = sortedArrayToBST(nums);
    const result = treeToArray(root);
    expect(result).toEqual([1]);
});

test('sortedArrayToBST for empty array', () => {
    const nums = [];
    const root = sortedArrayToBST(nums);
    const result = treeToArray(root);
    expect(result).toEqual([]);
});