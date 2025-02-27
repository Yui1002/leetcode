const TreeNode = require('../TreeNode');
const preorderTraversal = require('../144_Binary_Tree_Preorder_Traversal');

test('preorderTraversal for tree [1,null,2,3]', () => {
    const node1 = new TreeNode(1);
    const node2 = new TreeNode(2);
    const node3 = new TreeNode(3);

    node1.right = node2;
    node2.left = node3;

    expect(preorderTraversal(node1)).toEqual([1, 2, 3]);
});

test('preorderTraversal for tree [1,2,3]', () => {
    const node1 = new TreeNode(1);
    const node2 = new TreeNode(2);
    const node3 = new TreeNode(3);

    node1.left = node2;
    node1.right = node3;

    expect(preorderTraversal(node1)).toEqual([1, 2, 3]);
});

test('preorderTraversal for single node tree [1]', () => {
    const singleNode = new TreeNode(1);

    expect(preorderTraversal(singleNode)).toEqual([1]);
});

test('preorderTraversal for empty tree', () => {
    expect(preorderTraversal(null)).toEqual([]);
});