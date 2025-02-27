var searchBST = function(root, val) {
    let result = null;

    function traverse(curr) {
        if (curr === null) return;

        if (curr.val === val) {
            result = curr;
            return;
        }

        traverse(curr.left);
        traverse(curr.right);
    }

    traverse(root)
    return result;
};

module.exports = searchBST;
