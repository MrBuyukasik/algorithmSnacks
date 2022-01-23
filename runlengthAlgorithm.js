main()

function main(){
    let input = 'aaabbcccc' // 4a4b4c1d
    encodeImage(input)
}

function encodeImage(arr){
  //find out how many repetitions each characters has
   let counter=1
  //final output string
   let resultString = ''
  //iterate input string
  for(let i=0;i<arr.length;i++){
  
  //compare char with next one.
    if(arr[i]=== arr[i+1]){
        counter++
    }
    else{
        //Add result screen counted char.
        //reset counter for next chars.
        resultString+=`${counter}${arr[i]}`
        counter=1
    }
  }
  console.log(arr.length)
  console.log(resultString)
}
