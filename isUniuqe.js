
main()
function main(){
    console.log(isUnique('a'))
    console.log(isUnique('abcda'))
    console.log(isUnique('abcdddd'))
}

function isUnique2(input){
    let defaultValue = '0' 
    for(let i=0;i<input.length;i++){
     let val= str.charCodeAt(i) - 'a'; 
        if(input.length<1){
          return true
        }
        for(let j=i+1;j<input.length;j++){
         if(input[i] === input[j]){
             defaultValue= input[j]
             return false
         }
     }
    }
 
    return true
 }


function isUnique(input){
   let defaultValue = '0' 
   for(let i=0;i<input.length;i++){
       if(input.length<1){
         return true
       }
       for(let j=i+1;j<input.length;j++){
        if(input[i] === input[j]){
            defaultValue= input[j]
            return false
        }
    }
   }

   return true
}