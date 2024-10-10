// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const counters =[0];
    const arr = [root, 's'];
    // let counter = 0;
    while(arr.length > 1){
        const node = arr.shift();
        
        if(node === 's'){
            // console.log(counter)
            // counters.push(counter);
            // counter = 0;
            counters.push(0);
            arr.push('s');
            
        }else{
            // counter ++;
            counters[counters.length - 1] ++;
            arr.push(...node.children)
        }
    }
    // counters.push(counter);
    // console.log(counters)
    return counters;
    
}

module.exports = levelWidth;
