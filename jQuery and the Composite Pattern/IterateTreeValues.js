/*
The Iterator Pattern can be used in our applications to abstract the way we access items from a data structure. 
For example, let's suppose we need to retrieve all the items that are greater than 4 from the following tree structure
*/
var collection = {
    nodeValue: 7,
    left: {
        nodeValue: 4,
        left: 2,
        right: {
            nodeValue: 6,
            left: 5,
            right: 9
        }
    },
    right: {
        nodeValue: 9,
        left: 8
    }
};

/*
Let's now implement our iterator function. Since tree data structures can have nesting, we end up with the following recursive implementation
*/
function iterateTreeValues(node, callback) {
    if (node === null || node === undefined) {
        return;
    }

    if (typeof node === 'object') {
        if ('left' in node) {
            iterateTreeValues(node.left, callback);
        }
        if ('nodeValue' in node) {
            callback(node.nodeValue);
        }
        if ('right' in node) {
            iterateTreeValues(node.right, callback);
        }
    } else {
        // its a leaf, so the node is the value
        callback(node);
    }
}

/*
Finally, we end up with an implementation that looks as follows
*/
var valuesArray = [];
iterateTreeValues(collection, function(value) {
    if (value > 4) {
        valuesArray.push(value);
    }
});
console.log(valuesArray);
