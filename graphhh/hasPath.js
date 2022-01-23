const hasPath = (graph, src, dst) => {
    const stack = [src]
    
    while(stack.length > 0){
      const current = stack.pop()
  
      for(let neighbor of graph[current]){
          if(neighbor === dst) return true
          stack.push(neighbor)
      }
      
    }
    
    return false
  };
  
const hasPath = (graph, src, dst) => {
  const queue = [src]
  
  while(queue.length){
    const current = queue.shift()
    for(let neighbor of graph[current]){
      if(neighbor === dst) return true
      queue.push(neighbor)
    }
  }
  
  return false
};

const hasPath = (graph, src, dst) => {
    if(src === dst) return true
    
    for(let neighbor of graph[src]){
      if(hasPath(graph,neighbor,dst) === true){
        return true
      }
    }
    
    return false
  };
  

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  };

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  };
  
  hasPath(graph, 'f', 'j'); // false  
  
  hasPath(graph, 'f', 'k'); // true


  module.exports = {
    hasPath
  };