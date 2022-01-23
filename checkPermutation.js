main()

function main(){
    console.log(checkPermutation('abcdf','acbdf'))
}

function checkPermutation(stringOne,stringTwo){
    if(stringOne.length !== stringTwo.length){
        return false
    }
}