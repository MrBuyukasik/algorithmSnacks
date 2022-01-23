const minimumIsland = (grid) => {
    const visited = new Set()
    let min = Infinity
    
    for(let r=0;r<grid.length;r++){
      for(let c=0;c<grid[0].length;c++){
        const islandCount = exploreSize(grid,r,c,visited) 
        if(islandCount> 0 && islandCount<min){
          min=islandCount
        }
      }
    }
    
    return min
  };
  
  
  const exploreSize=(grid,r,c,visited)=>{
    const rowInbound = 0<=r && r<grid.length;
    const colInbound = 0<= c && c<grid[0].length;
    
    if(!rowInbound || !colInbound) return 0
    
    if(grid[r][c] === 'W') return 0 
    
    const pos = r+','+c
    if(visited.has(pos)) return 0 
    visited.add(pos)
    let size = 1 
    size += exploreSize(grid, r - 1, c, visited);
    size += exploreSize(grid, r + 1, c, visited);
    size += exploreSize(grid, r, c + 1, visited);
    size += exploreSize(grid, r, c - 1, visited);
    
    return size
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  module.exports = {
    minimumIsland
  };