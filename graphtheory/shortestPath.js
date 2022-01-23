const shortestPath = (edges,nodeA,nodeB)=>{
    const graph = buildGraph(edges)
    const visited = new Set([nodeA])

    const queue = [[nodeA,0]]

    while(queue.length>0){
        const [node, distance] = queue.shift()
        
        if(node === nodeB) return distance

        for(let neighbor of graph[node]){
            if(!visited.has(neighbor)){
                visited.add(neighbor)
                queue.push([neighbor,distance+1])
            }
        }

    }

    return -1
}

const buildGraph = (edges) =>{
    const graph ={}
    for(let edge of edges){
        const [a,b] = edge
        if(!(a in graph)) graph[a] = []
        if(!(b in graph)) graph[b] = []
        graph[b].push(a)
        graph[a].push(b)
    }

    return graph
}

// const edges = [
//     ['w', 'x'],
//     ['x', 'y'],
//     ['z', 'y'],
//     ['z', 'v'],
//     ['w', 'v']
//   ];

const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
  ];

console.log(shortestPath(edges,'y','x'))