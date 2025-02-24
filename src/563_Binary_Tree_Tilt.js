/**
 * @param {TreeNode} root
 * @return {number}
 */
let totalTilt = 0;
var findTilt = function(root) {
    totalTilt = 0;
    dfs(root);
    return totalTilt;
}; 

var dfs = function(node) {
    if (node === null) return 0;

    let left = dfs(node.left);
    let right = dfs(node.right);
    totalTilt += Math.abs(left - right);
    return left + right + node.val;
}

module.exports = findTilt