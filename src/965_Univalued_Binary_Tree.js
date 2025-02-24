var isUnivalTree = function(root) {
    if (root === null) return true;

    var checkUnivalTree = function(node, value) {
        if (node === null) {
            return true;
        }

        if (node.val !== value) {
            return false;
        }

        return checkUnivalTree(node.left, value) && checkUnivalTree(node.right, value);
    }

    return checkUnivalTree(root, root.val)
};

module.exports = isUnivalTree;