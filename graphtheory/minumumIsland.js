const minimumIsland = (grid)=>{
    const visited = new Set()
    let minSize=Infinity
    for(let r=0;r<grid.length;r++){
        for(let c=0;c<grid[0].length;c++){
            const size = exploreSize(grid,r,c,visited)
           if(size > 0 && minSize>size){
               minSize=size
           }
        }
    }

    return minSize
}

const exploreSize=(grid,r,c,visited) =>{
    const rowInbounds= 0<= r && r<grid.length
    const colInounds=  0<= c && c<grid[0].length

    if(!rowInbounds || !colInounds) return 0

    if(grid[r][c] === 'W') return 0

    const pos = r + ',' + c
    if(visited.has(pos)) return 0 
    visited.add(pos)
    let size = 1 

    size += exploreSize(grid,r-1,c,visited)
    size += exploreSize(grid,r+1,c,visited)
    size += exploreSize(grid,r,c-1,visited)
    size += exploreSize(grid,r,c+1,visited)

    return size
}

const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ];

  const grid2 = [
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L'],
  ];

  const grid3= [
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
  ]

  const grid4 = [
    ['W', 'W'],
    ['L', 'L'],
    ['W', 'W'],
    ['W', 'L']
  ];

  console.log(minimumIsland(grid));
  console.log(minimumIsland(grid2));
  console.log(minimumIsland(grid3));
  console.log(minimumIsland(grid4));