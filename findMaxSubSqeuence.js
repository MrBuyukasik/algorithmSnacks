// Write a function takes two string, s1 and s2 and returns 
// the longest common subsquence of s1 and s2
function main(){
    let s1='AGGTAB'  // GTAB
    let s2='GXTXAYB'

    let s3='ABAZDC'  //ABAD
    let s4='BACBAD'

    let s5='aaaa'  //aa
    let s6='aa'

   
   console.log('result =>', maxSqeuence(s1,s2)) 
   console.log('result =>', maxSqeuence(s3,s4)) 
   console.log('result =>', maxSqeuence(s5,s6)) 

}

function maxSqeuence(s1,s2){
  const [long, short] = longestSqeuence(s1,s2)
  let i=0
  let j=0
  let k=0
  let sequence = '';

  for(i=0;i<long.length;i++){
    for(j=k;j<short.length;j++){

        if(short[j]===long[i]){
            sequence+=short[j]
            k=j+1
            break;
        }
    }
  }

  return sequence
}

function longestSqeuence(s1,s2){
    if(s1.length>=s2.length){
        return [s1, s2]
    }else{
        return [s2, s1]
    }
}

main()
