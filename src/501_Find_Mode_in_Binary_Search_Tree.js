/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let prev = null;
let maxFrequency = 0;
let currCount = 0;
let modes = [];

var findMode = function(root) {
    prev = null;
    maxFrequency = 0
    currCount = 0
    modes = []

    inOrderTraversal(root);
    return modes;
};

var inOrderTraversal = (node) => {
    if (!node) return;

    inOrderTraversal(node.left);

    if (prev && node.val === prev.val) {
        currCount++;
    } else {
        currCount = 1;
    }

    if (currCount > maxFrequency) {
        modes = [node.val];
        maxFrequency = currCount;
    } else if (currCount === maxFrequency) {
        modes.push(node.val);
    }

    prev = node;
    inOrderTraversal(node.right);
}

module.exports = findMode;
