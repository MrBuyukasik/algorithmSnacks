const hasPathRecursive = (graph,src,dst)=>{
    if(src === dst) return true

    for(let neighbor of graph[src]){
       if(hasPathRecursive(graph,neighbor,dst)===true){
           return true
       }
    }
    return false
}

const hasPath = (graph,src,dst)=>{
    const stack = [src]

    while(stack.length>0){
        const current = stack.pop()
        for(let neighbor of graph[current]){
            if(neighbor === dst) return true
            stack.push(neighbor)
        }
    }
    return false
}

const hasPathWithBFS = (graph,src,dst) =>{
    const queue = [src]

    while(queue.length>0){
        const current = queue.shift()
        for(let neighbor of graph[current]){
            if(neighbor === dst ) return true 
            queue.push(neighbor)
        }
    }

    return false
}

// const hasPathWithBFSRecursive = (graph,src,dst) =>{
//     if(src === dst) return true
//     for(let neighbor of graph[src]){
//         if(hasPathWithBFSRecursive(graph,src,dst) === true){
//             return true
//         }
//     }
   

//  return false
// }



const graph = { 
  f:['g','i'],
  g:['h'],
  h:[],
  i:['g','k'],
  j:['i'],
  k:[]
}

console.log(hasPathRecursive(graph,'f','k'))
console.log(hasPath(graph,'f','k'))
console.log(hasPathWithBFS(graph,'f','k'))