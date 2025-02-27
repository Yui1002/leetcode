const TreeNode = require('../TreeNode');
const searchBST = require('../700_Search_in_a_Binary_Search_Tree');

test('searchBST for tree [4,2,7,1,3] with val=2', () => {
    const node4 = new TreeNode(4);
    const node2 = new TreeNode(2);
    const node7 = new TreeNode(7);
    const node1 = new TreeNode(1);
    const node3 = new TreeNode(3);

    node4.left = node2;
    node4.right = node7;
    node2.left = node1;
    node2.right = node3;

    const result = searchBST(node4, 2);
    expect(result).toEqual(node2);
});

test('searchBST for tree [4,2,7,1,3] with val=5', () => {
    const node4 = new TreeNode(4);
    const node2 = new TreeNode(2);
    const node7 = new TreeNode(7);
    const node1 = new TreeNode(1);
    const node3 = new TreeNode(3);

    node4.left = node2;
    node4.right = node7;
    node2.left = node1;
    node2.right = node3;

    const result = searchBST(node4, 5);
    expect(result).toBeNull();
});

test('searchBST for single node tree [1] with val=1', () => {
    const singleNode = new TreeNode(1);

    const result = searchBST(singleNode, 1);
    expect(result).toEqual(singleNode);
});

test('searchBST for empty tree with val=1', () => {
    const result = searchBST(null, 1);
    expect(result).toBeNull();
});