// find gcd of two numbers
// input:42,56

// 42 divisors 
// 1,2,3,6,7,14,21,42
// 56 divisors
// 1,2,4,7,8,14,28,56
// output:14


function gcd(a,b){
    if(a==b) return a
    if (a<b)return gcd(a,b-a)
        else return gcd(a-b,b)
}

console.log(gcd(42,56))