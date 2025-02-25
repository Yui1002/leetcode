const TreeNode = require('../TreeNode');
const inorderTraversal = require('../94_Binary_Tree_Inorder_Traversal');

test('inorderTraversal for tree [1,null,2,3]', () => {
    const node1 = new TreeNode(1);
    const node2 = new TreeNode(2);
    const node3 = new TreeNode(3);

    node1.right = node2;
    node2.left = node3;

    expect(inorderTraversal(node1)).toEqual([1, 3, 2]);
});

test('inorderTraversal for tree [1,2,3]', () => {
    const node1 = new TreeNode(1);
    const node2 = new TreeNode(2);
    const node3 = new TreeNode(3);

    node1.left = node2;
    node1.right = node3;

    expect(inorderTraversal(node1)).toEqual([2, 1, 3]);
});

test('inorderTraversal for single node tree [1]', () => {
    const singleNode = new TreeNode(1);

    expect(inorderTraversal(singleNode)).toEqual([1]);
});

test('inorderTraversal for empty tree', () => {
    expect(inorderTraversal(null)).toEqual([]);
});