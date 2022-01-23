const deepFirstSearch=(graph,src,dst) =>{
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

const deepFirstSearchRecursive=(graph,src,dst,visited)=>{
    if(src === dst) return true
    if(visited.has(src)) return false

    visited.add(src)

    for(let neighbor of graph[src]){
        if(deepFirstSearchRecursive(graph,neighbor,dst,visited) === true){
            return true
        }
    }

    return false
}


const undirectedPath = (edges,nodeA,nodeB)=>{
    const graph = buildGraph(edges)
    
    return deepFirstSearchRecursive(graph,nodeA,nodeB,new Set())

}
const buildGraph=(edges)=>{
    const graph = {};
    for(let edge of edges ){
        const [a,b] = edge
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];

        graph[a].push(b)
        graph[b].push(a)
    }
    return graph
}

const edges = [
    ['i','j'],
    ['k','i'],
    ['m','k'],
    ['k','l'],
    ['o','n']
]

console.log(undirectedPath(edges,'j','m'))
// const graph ={
//     i:['j','k'],
//     j:['i'],
//     k:['i','m','l'],
//     m:['k'],
//     l:['k'],
//     o:['n'],
//     n:['o']
// }