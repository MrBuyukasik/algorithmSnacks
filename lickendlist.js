
class LinkedList{

    insertHead(data){
        let node = new Node(data)
        if(this.root === null){
            this.root = node
            return this.root
        }
        
        let temp = this.root
        this.root = node
        node.next = temp
        return this.root
    }

    insertTail(node,data){
        if(node.next != null){
            this.insertTail(node.next,data)
        }
        else{
            if(!node.next){
                node.next = new Node(data)
                return node
            }
        }
    }

    insertTail2(data){
        let node = this.root
        while(node.next != null){
            node = node.next
        }
        if(!node.next){
            node.next =  new Node(data)
            return node
        }
    }

    getRoot(){
        return this.root
    }

    traverse(){
        let node = this.root
        console.log(node.data)
        while(node.next!=null){
            node = node.next
            console.log(node.data)
        }
    }

    delete(data){
        if(this.root.data === data){
            this.root = this.root.next
            return
        }
        
        let node=this.root
        let prevNode = null
        while(node !==null && node.data !== data){
            prevNode = node            
            node = node.next
        }
        
        prevNode.next = node.next
    }

}



class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
   }
}


function main(){
    let linkedlist = new LinkedList()
    linkedlist.insertHead(5)
    linkedlist.insertHead(8)
    linkedlist.insertHead(9)
    linkedlist.insertTail(linkedlist.getRoot(),15)
    linkedlist.insertTail2(25)
    linkedlist.insertTail2(36)
    linkedlist.delete(25)
    linkedlist.delete(36)
    linkedlist.delete(9)
    linkedlist.traverse()


}

main()
