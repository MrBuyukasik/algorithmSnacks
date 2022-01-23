const deepFirstSearch=(graph,src)=>{
    const stack = [src]

    while(stack.length>0){
        const current=stack.pop()
        console.log(current)
        for(let neighbor of graph[current]){
        stack.push(neighbor)
        }
    }
}

const dfsRecursive=(graph,src)=>{
    console.log(src)
    for(let neighbor of graph[src]){
        dfsRecursive(graph,neighbor)
    }
}

const bfcRecursive=(graph,src)=>{
    
}

const bfs=(graph,src)=>{
    const queue = [src]

    while(queue.length>0){
       const current = queue.shift()
        console.log(current)
        for(let neighbor of graph[current]){
            queue.push(neighbor)
        }
    }

}






const graph = {
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
  }

  
deepFirstSearch(graph,'a')
console.log('*******')
bfs(graph,'a')
console.log('*******')
dfsRecursive(graph,'a')