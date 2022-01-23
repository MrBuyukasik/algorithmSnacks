const connectedComponentsCount = (graph) => {
  
    const visited = new Set()
    let count=0
    
    for(let node in graph){
      if(explore(graph,node,visited) === true){
        count++
      }
    }
    
    return count
  };
  
  const explore=(graph,src,visited)=>{
    
    if(visited.has(String(src))) return false
       
    visited.add(String(src))
  
    for(let neighbor of graph[src]){
        explore(graph,neighbor,visited)
    }
    
    return true
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  module.exports = {
    connectedComponentsCount
  };