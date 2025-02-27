const TreeNode = require('../TreeNode');
const diameterOfBinaryTree = require('../543_Diameter_of_Binary_Tree');

test('diameterOfBinaryTree for tree [1,2,3,4,5]', () => {
    const node1 = new TreeNode(1);
    const node2 = new TreeNode(2);
    const node3 = new TreeNode(3);
    const node4 = new TreeNode(4);
    const node5 = new TreeNode(5);

    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node2.right = node5;

    expect(diameterOfBinaryTree(node1)).toBe(3);
});

test('diameterOfBinaryTree for tree [1,2]', () => {
    const node1 = new TreeNode(1);
    const node2 = new TreeNode(2);

    node1.left = node2;

    expect(diameterOfBinaryTree(node1)).toBe(1);
});

test('diameterOfBinaryTree for single node tree [1]', () => {
    const singleNode = new TreeNode(1);

    expect(diameterOfBinaryTree(singleNode)).toBe(0);
});

test('diameterOfBinaryTree for empty tree', () => {
    expect(diameterOfBinaryTree(null)).toBe(0);
});