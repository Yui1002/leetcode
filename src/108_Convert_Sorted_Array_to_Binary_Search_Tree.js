const TreeNode = require("./TreeNode");

var sortedArrayToBST = function(nums) {
    function helper(left, right) {
        if (left > right) {
            return null;
        }

        let mid = Math.floor((left + right) / 2);
        let newNode = new TreeNode(nums[mid]);
        newNode.left = helper(left, mid-1);
        newNode.right = helper(mid+1, right);

        return newNode;
    }

    return helper(0, nums.length - 1)
};

module.exports = sortedArrayToBST;