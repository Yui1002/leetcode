var postorderTraversal = function(root) {
    let result = [];

    function traverse(node) {
        if (node === null) return;

        traverse(node.left);
        traverse(node.right);
        result.push(node.val);
    }

    traverse(root)

    return result;
};

module.exports = postorderTraversal;