import {input} from './input.js'

function main(){
    binarySearch(input.arr,input.el)
}

function binarySearch(arr,el){
    // arr.sort((a,b)=> a-b )
    let initLow = 0
    let initHigh = arr.length-1
    //let maxIterate = Math.log2(arr.length)
    // for(let i=0;i<maxIterate;i++){
    //  const {result,mid,high,low} = search(arr,initLow,initHigh,el)
    //  initLow=low
    //  initHigh=high

    //     if(result){
    //         console.log({value:arr[mid],index:mid})
    //         break
    //     }
    // }

    const {result,mid} = search(arr,initLow,initHigh,el)
    if(result){
         console.log({value:arr[mid],index:mid})
     }
}

function search(arr,low,high,el){

    let mid =Math.floor((high + low ) / 2)
    if(el===arr[mid]){
        return {result:true,low,high,mid}
    }else{
      if(el>arr[mid]){
        low = mid
      }
      else{
        high = mid
      }
      mid =Math.floor((high + low ) / 2) 

      return  search(arr,low,high,el)
    }
}

main()
