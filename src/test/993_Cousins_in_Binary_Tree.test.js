const TreeNode = require('../TreeNode');
const isCousins = require('../993_Cousins_in_Binary_Tree');

test('isCousins for tree [1,2,3,4] with x=4 and y=3', () => {
    const node1 = new TreeNode(1);
    const node2 = new TreeNode(2);
    const node3 = new TreeNode(3);
    const node4 = new TreeNode(4);

    node1.left = node2;
    node1.right = node3;
    node2.left = node4;

    expect(isCousins(node1, 4, 3)).toBe(false);
});

test('isCousins for tree [1,2,3,null,4,null,5] with x=5 and y=4', () => {
    const node1 = new TreeNode(1);
    const node2 = new TreeNode(2);
    const node3 = new TreeNode(3);
    const node4 = new TreeNode(4);
    const node5 = new TreeNode(5);

    node1.left = node2;
    node1.right = node3;
    node2.right = node4;
    node3.right = node5;

    expect(isCousins(node1, 5, 4)).toBe(true);
});

test('isCousins for tree [1,2,3,null,4] with x=2 and y=3', () => {
    const node1 = new TreeNode(1);
    const node2 = new TreeNode(2);
    const node3 = new TreeNode(3);
    const node4 = new TreeNode(4);

    node1.left = node2;
    node1.right = node3;
    node2.right = node4;

    expect(isCousins(node1, 2, 3)).toBe(false);
});

test('isCousins for single node tree [1] with x=1 and y=2', () => {
    const singleNode = new TreeNode(1);

    expect(isCousins(singleNode, 1, 2)).toBe(false);
});

test('isCousins for empty tree with x=1 and y=2', () => {
    expect(isCousins(null, 1, 2)).toBe(false);
});