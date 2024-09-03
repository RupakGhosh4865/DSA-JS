function reversestring(string) {
    let reverse=""
    let length = string.length
    while(length>0){
        reverse = reverse + string[length]
        length = length -1
    }
    return reverse
}

console.log(reversestring("rupak"))

//RECURSIVE APPROACH

function reversestringrecursive(string) {
    //BASE CASE
    console.log ("current string: ",string)
    if  (string.length=== "") {
        return string
    }
    let reversepart = reversestringrecursive(string.substring(0,string.length-1))
    let result =string [string.length-1] + reversepart

    console.log('Reversing: lastchar ${string[string.length-1]} added in front of ${reversepart} to form a result:${result}')
    return result
    }
    console.log(reversestringrecursive("rupak"))