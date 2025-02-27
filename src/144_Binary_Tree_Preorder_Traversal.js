var preorderTraversal = function(root) {
    let result = [];

    function traverse(node) {
        if (node === null) return;

        result.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }

    traverse(root);
    return result;
};

module.exports = preorderTraversal;