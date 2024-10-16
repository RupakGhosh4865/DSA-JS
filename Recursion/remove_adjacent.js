// let inputString = "aabcc"

// let i=1

// console.log(inputString.substring(0,i))
// console.log(inputString.substring(i+1))
// console.log(inputString.substring(0,i)+ inputString.substring(i+1))

// Iterative

function removeAdjacent(string) {

    let result = ""
for (let i = 0; i < string.length; i++) {
    if(i===inputString.length-1 ||  inputString[i] !== inputString[i+1]) {
        result += inputString[i]
}
}
return result
}

//iterative using stack

function removeAdjDup(inputString)
{
    let stack=[]
    for (let i = 0; i < inputString.length; i++) {
       
       if(!stack.includes(inputString[i]))
        {
            stack.push(inputString[i])
        }
      
        
    }
    return stack.join("")
}
console.log(removeAdjDup("aabcc"))



function recursiveRAD(inputString)
{  
    if(inputString.length<=1) return inputString
    if(inputString[0]===inputString[1]) return recursiveRAD(inputString.substring(1))
    return recursiveRAD(inputString[0]) + recursiveRAD(inputString.substring(1))
}

console.log(recursiveRAD("aabccdd"))

