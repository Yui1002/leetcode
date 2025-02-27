const TreeNode = require('../TreeNode');
const postorderTraversal = require('../145_Binary_Tree_Postorder_Traversal');

test('postorderTraversal for tree [1,null,2,3]', () => {
    const node1 = new TreeNode(1);
    const node2 = new TreeNode(2);
    const node3 = new TreeNode(3);

    node1.right = node2;
    node2.left = node3;

    expect(postorderTraversal(node1)).toEqual([3, 2, 1]);
});

test('postorderTraversal for tree [1,2,3]', () => {
    const node1 = new TreeNode(1);
    const node2 = new TreeNode(2);
    const node3 = new TreeNode(3);

    node1.left = node2;
    node1.right = node3;

    expect(postorderTraversal(node1)).toEqual([2, 3, 1]);
});

test('postorderTraversal for single node tree [1]', () => {
    const singleNode = new TreeNode(1);

    expect(postorderTraversal(singleNode)).toEqual([1]);
});

test('postorderTraversal for empty tree', () => {
    expect(postorderTraversal(null)).toEqual([]);
});