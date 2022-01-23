// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const depthFirstValues = (root) => {
  
  if(root === null) return [];
   const values =[]
   const stack = [root]
   
   while(stack.length>0){
      const node = stack.pop();
      values.push(node.val)
     if(node.right !== null) stack.push(node.right)
     if(node.left !== null) stack.push(node.left)
   }
  
  return values
}; 

const depthFirstValues = (root) => {
    if(root === null ) return []
  
    const leftValues = depthFirstValues(root.left)
    const rightValues = depthFirstValues(root.right)
    
    return [root.val,...leftValues,...rightValues]
}
















module.exports = {
  depthFirstValues
};