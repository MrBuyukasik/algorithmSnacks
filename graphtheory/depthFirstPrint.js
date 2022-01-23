const deepFirstPrint = (graph,source) =>{
    const stack = [source]

    while(stack.length > 0){
        const current  = stack.pop()
        console.log(current)

        for(let i=0;i<graph[current].length;i++){
            stack.push(graph[current][i])
        }
    }
}

const deepFirstPrintRecursive = (graph,source) =>{
    console.log(source)
    for(let neighbor of graph[source]){
        deepFirstPrintRecursive(graph,neighbor)
    }
}

const breadthFirstPrint= (graph,source) =>{
    const queue = [source]

    while (queue.length>0){
        const current = queue.shift()
        console.log()
        for(let neighbor of graph[current])[
            queue.push(neighbor)
        ]
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

// deepFirstPrint(graph,'a')
deepFirstPrintRecursive(graph,'a')