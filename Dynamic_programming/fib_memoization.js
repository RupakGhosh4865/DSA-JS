function fibMemo(n, memo = []) {
if(n in memo)
    console.log("Memo: ",memo[n])
   {
       
    if(n<=1) return n

    memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);
    console.log("Memo: ",memo)

    return memo[n];
}
}
console.log(fibMemo(5))