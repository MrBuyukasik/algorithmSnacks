class BinarySearchTree{
    insert(data){
        let node = new Node(data)

        if(!this.root){
            this.root = node
            return this.root
        }
        this.insertNode(this.root,node)
       
    }

    insertNode(node,newNode){
    
        if(node.data < newNode.data){
            if(node.left === null){
                node.left = newNode
            }
            else{
                this.insertNode(node.left,newNode)
            }
        }
        else{
            if(node.right === null){
                node.right = newNode
            }
            else{
                this.insertNode(node.right,newNode)
            }
        }
    }


    delete(){

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
            if(node.left !=null){
              result = this.traverseNode(node.left,result)
            }
            result.push(node.data)
            if(node.right !=null){
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
    let binarySearchTree = new BinarySearchTree()

    binarySearchTree.insert(30)
    binarySearchTree.insert(10)
    binarySearchTree.insert(9)
    binarySearchTree.insert(45)
    binarySearchTree.insert(2)
    binarySearchTree.insert(54)


    console.log(binarySearchTree.traverse([]))
}
main()