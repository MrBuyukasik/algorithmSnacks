//O(n*m) time
//O(m) space
const canSumMemo=(targetSum,numbers,memo={})=>{
    if(targetSum in memo) return memo[targetSum]
    if(targetSum === 0) return true;
    if(targetSum < 0 ) return false
    for(let num of numbers){
        const remainder = targetSum - num
        if(canSumMemo(remainder,numbers,memo)===true){
            memo[targetSum] = true
            return true
        }
    }
    memo[targetSum] = false
    return false
}
//O(nˆm) time
//O(m) space
const canSum=(targetSum,numbers,memo={})=>{
    if(targetSum === 0) return true;
    if(targetSum < 0 ) return false
    for(let num of numbers){
        const remainder = targetSum - num
        if(canSum(remainder,numbers)===true){
            return true
        }
    }
    return false
}

console.log(canSum(7,[2,3]))
console.log(canSum(7,[5,3,4,7]))
console.log(canSum(7,[2,4]))
console.log(canSum(8,[2,3,5]))
console.log(canSumMemo(300,[7,14]))
