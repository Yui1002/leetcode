var diameterOfBinaryTree = function(root) {
    let result = 0;

    function traverse(node) {
        if (node === null) {
            return 0;
        }

        let left = traverse(node.left);
        let right = traverse(node.right);
        result = Math.max(result, left + right)
        return 1 + Math.max(left, right)
    }

    traverse(root)
    return result;
};

module.exports = diameterOfBinaryTree;