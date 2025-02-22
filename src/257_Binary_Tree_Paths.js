const TreeNode = require('./TreeNode')

var binaryTreePaths = function(root) {
    let result = [];
    if (!root) return result;

    let currentPath = root.val;
    if (root.left !== null) {
        dfs(root.left, currentPath, result);
    }

    if (root.right !== null) {
        dfs(root.right, currentPath, result);
    }
};

var dfs = function(node, currentPath, result) {
    currentPath += "->" + node.val;

    if (node.left === null && node.right === null) {
        result.push(currentPath);
        return;
    }

    if (node.left !== null) {
        dfs(node.left, currentPath, result);
    }

    if (node.right !== null) {
        dfs(node.right, currentPath, result);
    }
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node5 = new TreeNode(5);

// Build the tree structure
node1.left = node2;
node1.right = node3;
node2.right = node5;

console.log(binaryTreePaths(node1))