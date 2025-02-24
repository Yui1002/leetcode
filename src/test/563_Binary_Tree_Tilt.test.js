const TreeNode = require('../TreeNode');
const findTilt = require('../563_Binary_Tree_Tilt');

test('findTilt for tree [4,2,9,3,5,null,7]', () => {
    const node4 = new TreeNode(4);
    const node2 = new TreeNode(2);
    const node9 = new TreeNode(9);
    const node3 = new TreeNode(3);
    const node5 = new TreeNode(5);
    const node7 = new TreeNode(7);

    node4.left = node2;
    node4.right = node9;
    node2.left = node3;
    node2.right = node5;
    node9.right = node7;

    expect(findTilt(node4)).toBe(15);
});

test('findTilt for tree [1,2,3]', () => {
    const node1 = new TreeNode(1);
    const node2 = new TreeNode(2);
    const node3 = new TreeNode(3);

    node1.left = node2;
    node1.right = node3;

    expect(findTilt(node1)).toBe(1);
});

test('findTilt for single node tree [1]', () => {
    const singleNode = new TreeNode(1);

    expect(findTilt(singleNode)).toBe(0);
});

test('findTilt for empty tree', () => {
    expect(findTilt(null)).toBe(0);
});