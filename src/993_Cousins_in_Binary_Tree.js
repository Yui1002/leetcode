var isCousins = function(root, x, y) {
    let parentOfX;
    let parentOfY;
    let depthOfX;
    let depthOfY;

    function traverse(curr, parent, depth) {
        if (curr === null) return;

        if (curr.val === x) {
            parentOfX = parent;
            depthOfX = depth;
        }

        if (curr.val === y) {
            parentOfY = parent;
            depthOfY = depth;
        }

        traverse(curr.left, curr, depth+1)
        traverse(curr.right, curr, depth+1)
    }

    traverse(root, null, 0);
    return (parentOfX !== parentOfY) && (depthOfX === depthOfY)
};

module.exports = isCousins