//iterative approach

function fibonacci(n) {
    let a = 0
    let b = 1
    let result = 0
    for (let i = 0; i < n; i++) {
        result = a + b
        a = b
        b = result
    }
    return result
}

console.log(fibonacci(10))


//recursive approach

function fibonacci(n) {
    if (n <=1) {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(10))