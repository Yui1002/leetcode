const TreeNode = require('../TreeNode')
const increasingBST = require('../897_Increasing_Order_Search_Tree');

function treeToArray(root) {
    if (!root) return [];
    const result = [];
    let current = root;
    while (current) {
        result.push(current.val);
        current = current.right;
    }
    return result;
}

test('increasingBST for tree [5,3,6,2,4,null,8,1,null,null,null,7,9]', () => {
    const node5 = new TreeNode(5);
    const node3 = new TreeNode(3);
    const node6 = new TreeNode(6);
    const node2 = new TreeNode(2);
    const node4 = new TreeNode(4);
    const node8 = new TreeNode(8);
    const node1 = new TreeNode(1);
    const node7 = new TreeNode(7);
    const node9 = new TreeNode(9);

    node5.left = node3;
    node5.right = node6;
    node3.left = node2;
    node3.right = node4;
    node2.left = node1;
    node6.right = node8;
    node8.left = node7;
    node8.right = node9;

    const result = increasingBST(node5);
    expect(treeToArray(result)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('increasingBST for single node tree [1]', () => {
    const singleNode = new TreeNode(1);

    const result = increasingBST(singleNode);
    expect(treeToArray(result)).toEqual([1]);
});

test('increasingBST for empty tree', () => {
    const result = increasingBST(null);
    expect(treeToArray(result)).toEqual([]);
});