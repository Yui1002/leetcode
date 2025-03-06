
const TreeNode = require('./TreeNode');

var increasingBST = function(root) {
    let dummy = new TreeNode(0);
    let prev = dummy;

    function helper(curr) {
        if (curr === null) return;

        helper(curr.left);
        if (prev) {
            prev.right = curr
        }

        curr.left = null;
        prev = curr;
        helper(curr.right);
    }

    helper(root);
    return dummy.right;
};

module.exports = increasingBST;