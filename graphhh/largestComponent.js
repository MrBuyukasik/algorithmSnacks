const largestComponent = (graph) => {
  
    let largest = 0
    
    for(let node in graph){
      const sum = explore(graph,node,new Set())
      if(sum>largest){
        largest = sum
      }
    }
    
    return largest
  };
  
  const explore=(graph,src,visited)=>{
    if(visited.has(String(src))) return 0
    visited.add(String(src))
    
    for(let neighbor of graph[src]){
      explore(graph,neighbor,visited)
    }
    
    return visited.size
  }  
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  module.exports = {
    largestComponent
  };