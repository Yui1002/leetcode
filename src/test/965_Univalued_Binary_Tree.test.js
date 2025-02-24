const TreeNode = require('../TreeNode');
const isUnivalTree = require('../965_Univalued_Binary_Tree');

test('isUnivalTree for tree [1,1,1,1,1,null,1]', () => {
    const node1 = new TreeNode(1);
    const node1_left = new TreeNode(1);
    const node1_right = new TreeNode(1);
    const node1_left_left = new TreeNode(1);
    const node1_left_right = new TreeNode(1);
    const node1_right_right = new TreeNode(1);

    node1.left = node1_left;
    node1.right = node1_right;
    node1_left.left = node1_left_left;
    node1_left.right = node1_left_right;
    node1_right.right = node1_right_right;

    expect(isUnivalTree(node1)).toBe(true);
});

test('isUnivalTree for tree [2,2,2,5,2]', () => {
    const node2 = new TreeNode(2);
    const node2_left = new TreeNode(2);
    const node2_right = new TreeNode(2);
    const node5 = new TreeNode(5);
    const node2_left_right = new TreeNode(2);

    node2.left = node2_left;
    node2.right = node2_right;
    node2_left.left = node5;
    node2_left.right = node2_left_right;

    expect(isUnivalTree(node2)).toBe(false);
});

test('isUnivalTree for single node tree [1]', () => {
    const singleNode = new TreeNode(1);

    expect(isUnivalTree(singleNode)).toBe(true);
});

test('isUnivalTree for empty tree', () => {
    expect(isUnivalTree(null)).toBe(true);
});