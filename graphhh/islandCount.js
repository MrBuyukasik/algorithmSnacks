const islandCount = (grid) => {
    const visited = new Set();
  
    let count = 0
    for(let r=0;r<grid.length;r++){
      for(let c=0;c<grid[0].length;c++){
        if(explore(grid,r,c,visited) === true){
          count++
        }
      }
    }
    
    return count
  };
  
  const explore=(grid,r,c,visited)=>{
    const rowInbound = 0<= r && r<grid.length
    const colInbound = 0<= c && c<grid[0].length
    
    if(!rowInbound || !colInbound) return false
    
    if(grid[r][c] === 'W') return false
    
    const pos =r + ','+c
    
    if(visited.has(pos)) return false
    
    visited.add(pos)
    
    explore(grid,r+1,c,visited)
    explore(grid,r-1,c,visited)
    explore(grid,r,c-1,visited)
    explore(grid,r,c+1,visited)
  
    return true
  
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  module.exports = {
    islandCount
  };