// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeIncludes = (root, target) => {
    if(root === null ) return false
    const stack = [root]
    
    while(stack.length>0){
       const node = stack.pop()
       
       if(node.val === target) return true
       if(node.left) stack.push(node.left)
       if(node.right) stack.push(node.right)
      
    }
 
 return false
   
};

















module.exports = {
 treeIncludes
};