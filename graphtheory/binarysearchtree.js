import Node from './node.js'

function main(){
    var BST = new BinarySearchTree()
    BST.insert(10)
    BST.insert(8)
    BST.insert(9)
    BST.insert(5)
    BST.insert(11)
    BST.insert(12)
    BST.insert(3)


    var root = BST.getRootNode()
    console.log(BST.print(root,[])) 

    BST.remove(10)
    var root = BST.getRootNode()

    console.log(BST.print(root,[])) 

}

export default class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(data){
        var newNode= new Node(data);
        if(!this.root){
            this.root = newNode
        }
        else{
         this.insertNode(this.root,newNode)
        }   
    }

    insertNode(node,newNode){
        if(newNode.data < node.data){
            if(node.left === null){
                node.left = newNode
            }else{
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

    getRootNode(){
        return this.root;
    }

    print(node, acc) {
        if (node == null) {
           return acc;
        } else {
           if (node.left != null) {
              acc = this.print(node.left, acc);
           }
           acc.push(node.data);
           if (node.right != null) {
              acc = this.print(node.right, acc);
           }
           return acc;
        }
     }

     remove(data){
        this.root = this.removeNode(this.root,data)
     }

     removeNode(node,key){
        if(node === null)
            return

        if(key<node.data){
            node.left = this.removeNode(node.left,key)
            return node
        }
        else if(key>node.data){
            node.right = this.removeNode(node.right,key)
            return node
        }
        else{
            if(node.left === null && node.right === null){
                node = null
                return node
            }
        }    
     }

}

main()
