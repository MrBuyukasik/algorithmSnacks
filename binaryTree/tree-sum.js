// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeSum = (root) => {
    if(root===null) return 0
     const stack = [root]
     const values = []
     while(stack.length>0){
       const node = stack.pop()
       values.push(node.val)
       if(node.left) stack.push(node.left)
       if(node.right) stack.push(node.right)
     }
    
    return values.reduce((a,b) => a+b,0)
  };
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  module.exports = {
    treeSum
  };