const fib=(n)=>{ 
    // 1 1 2 3 5 8 13 21 34 55 
    // O(2ˆn) Time
    // O(n) space
    if(n<=2) return 1
    return fib(n-1)+fib(n-2)
}

const fibWithMemo=(n,memo)=>{
    if(n in memo) return memo[n]
    if(n<=2) return 1
    memo[n]=fib(n-1,memo)+fib(n-2,memo)

    return memo[n]
}

console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))
console.log(fib(7))
console.log(fib(8))
console.log(fib(9))
console.log(fib(10))// O(2ˆn) Time // O(n) space
console.log(fibWithMemo(10,[])) //O(N) Time // O(n) space