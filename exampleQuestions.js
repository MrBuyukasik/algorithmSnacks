/*
    USD -> TRY = 11.23
    AUD -> YSD = 0.86
    TRY -> EUR = 0.09
    SGD -> USD = 0.56
    CAG -> DIR = 123

    


    [0,0]
    [1,1]
    [2,2]
    [3,3]
    [4,4]
 */

function main(){
    var graph = new Graph()
     graph.initGraph(5)
     graph.insertGraph({from: 'USD',to:'try',rate : 11.23})
     graph.insertGraph({from: 'AUD',to:'YSD',rate : 0.86})
     graph.insertGraph({from: 'TRY',to:'EUR',rate : 0.09})
     graph.insertGraph({from: 'SGD',to:'USD',rate : 0.56})
     graph.insertGraph({from: 'CAG',to:'DIR',rate : 123})
     graph.printGraph()
}

export class Graph{

    constructor(){
        this.graphAjancency=null
    }
    
    initGraph(maxVertex){

        //Created 2d matrix  
        this.graphAjancency=new Array(maxVertex)
        for(let i=0;i<this.graphAjancency.length;i++){
            this.graphAjancency[i]=new Array(maxVertex)
        }
        // Init matrix with 0 
        for(let i=0;i<this.graphAjancency.length;i++){
            for(let j=0;j<this.graphAjancency[i].length;j++){
                this.graphAjancency[i][j] = '-'
            }
        }
        
    }


    insertGraph(a,b){
        for(let i=0;i<this.graphAjancency.length;i++){
            for(let j=0;j<this.graphAjancency[i].length;j++){
                if(i===a && j===b){
                    this.graphAjancency[i][j]=1
                    this.graphAjancency[j][i]=1
                }
            }
        }
    }

    printGraph() {
        let graphline = " ";
        let i, j;
        for (i = 0; i < this.graphAjancency.length; i++) {
          console.log('\n')
           for (j = 0; j < this.graphAjancency[i].length; j++) {
               graphline += this.graphAjancency[i][j];
               if (j == this.graphAjancency.length - 1) {
                  console.log(graphline);
                  graphline = ' ';
               }
           }
         }
}
}
main()