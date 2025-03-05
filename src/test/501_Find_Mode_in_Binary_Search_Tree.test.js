const TreeNode = require('../TreeNode');
const findMode = require('../501_Find_Mode_in_Binary_Search_Tree');

test('findMode for tree [1,null,2,2]', () => {
    const node1 = new TreeNode(1);
    const node2 = new TreeNode(2);
    const node2_duplicate = new TreeNode(2);

    node1.right = node2;
    node2.left = node2_duplicate;

    expect(findMode(node1)).toEqual([2]);
});

test('findMode for tree [1,0,1,0,0,1,1,0]', () => {
    const node1 = new TreeNode(1);
    const node0_1 = new TreeNode(0);
    const node1_2 = new TreeNode(1);
    const node0_2 = new TreeNode(0);
    const node0_3 = new TreeNode(0);
    const node1_3 = new TreeNode(1);
    const node1_4 = new TreeNode(1);
    const node0_4 = new TreeNode(0);

    node1.left = node0_1;
    node1.right = node1_2;
    node0_1.left = node0_2;
    node0_1.right = node0_3;
    node1_2.left = node1_3;
    node1_2.right = node1_4;
    node0_2.left = node0_4;

    expect(findMode(node1)).toEqual([0, 1]);
});

test('findMode for single node tree [1]', () => {
    const singleNode = new TreeNode(1);

    expect(findMode(singleNode)).toEqual([1]);
});

test('findMode for empty tree', () => {
    expect(findMode(null)).toEqual([]);
});