
class BinaryTree{

    insertLeft(data){
        let newNode = new Node(data)
        if(!this.root){
            this.root = newNode
            return this.root
        }

        this.insertLeftNode(this.root,newNode)
    }
     

    insert(data){
        let newNode = new Node(data)
        if(!this.root){
            this.root = newNode
            return this.root
        }

        this.insertNode(this.root,newNode)
    }

    insertNode(node,newNode){
        if(node.data < newNode.data){
            if(node.right === null){
                node.right = newNode
            }
            else{
                this.insertNode(node.right,newNode)
            }
        }
        else{
            if(node.left === null){
                node.left = newNode
            }
            else{
                this.insertNode(npde.left,newNode)
            }
        }
    }

    traverse(result){
        let node = this.root
      return this.traverseNode(node,result)
    }

    traverseNode(node,result){
        if(node === null){
            return result
        }
        else{
            if(node.left !==null){
                result = this.traverseNode(node.left,result)
            }
            result.push(node.data)
            if(node.right !== null){
                result = this.traverseNode(node.right,result)
            }

            return result
        }
    }
}

class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}




function main(){
    let binaryTree = new BinaryTree()

    binaryTree.insert(3)
    binaryTree.insert(9)
    binaryTree.insert(20)
    binaryTree.insert(15)
    binaryTree.insert(7)
    console.log(binaryTree.traverse([]))
}

main()