const largestComponent = (graph) => {
    let largestCount =0
    for(let node in graph){
        let visited = new Set()
        let tempCount= hasPath(graph,node,visited)
        if(tempCount > largestCount){
            largestCount=tempCount
        }
    }

    return largestCount
};

const hasPath=(graph,node,visited)=>{
    if(visited.has(String(node))) return false
    visited.add(String(node))

    for(let neighbor of graph[node]){
      hasPath(graph,neighbor,visited)
    }

    return visited.size
}


console.log(largestComponent({
    1: ['2'],
    2: ['1','8'],
    6: ['7'],
    9: ['8'],
    7: ['6', '8'],
    8: ['9', '7', '2']
  })); 