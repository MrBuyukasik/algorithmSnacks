function main(){
 let input = [2,10,5,6,11,3,15,];
 findMin(input)
}

function findMin(arr){
    let min = Number.MAX_VALUE
    let min2 = Number.MAX_VALUE
    for(let i=0;i<arr.length;i++){
       if(arr[i]<min){
           min2 = min
           min = arr[i]
       }
       else if(arr[i]<min2){
           min2= arr[i]
       }
    }
    console.log('min value',min)
    console.log('min value ',min2)

}

main()