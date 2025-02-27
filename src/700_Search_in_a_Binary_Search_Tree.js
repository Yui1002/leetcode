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

let improvedsearchBST = function(root, val) {
    if (root === null || root.val === val) {
        return root;
    }

    if (root.val < val) {
        return improvedsearchBST(root.right, val);
    } else {
        return improvedsearchBST(root.left, val);
    }
}

module.exports = searchBST;
