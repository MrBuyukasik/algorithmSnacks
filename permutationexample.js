permutation()

function permutation(){

   console.log(permutation2('abcd','dscd')) 
}

function permutation2(str,str2){
    let letters = {}

    for(let i =0;i<str.length;i++){
        letters[str[i]] = 0
    }

    if(str.length !== str2.length){
        return false
    }
    for(let i=0;i<str.length;i++){
        letters[str[i]]++
    }

    for(let i =0;i<str2.length;i++){
        if(letters[str2[i]]){
            letters[str2[i]]--
            if(letters[str2[i]]<0){
                return false;
            }
        }
        else{
            return false
        }
    }

    return true

}

