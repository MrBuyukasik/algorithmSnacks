// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeMinValue = (root) => {
    if(root === null ) return []
  
   const queue = [root]
   let minValue = Infinity 
   while(queue.length>0){
     const node = queue.shift()
     if(node.left) queue.push(node.left)
     if(node.right) queue.push(node.right)
     if(minValue>node.val) minValue=node.val

   }
  
  return minValue
};

















module.exports = {
  treeMinValue
};  