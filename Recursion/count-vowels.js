function isVowel(char) {
    let vowels ="aeiouAEIOU"
    let lowerChar = char.toLowerCase()

    if (vowels.indexOf(lowerChar) !== -1) {
        return true
    } else {
        return false
    }

}

function countVowels(string) {
    let count=0
    for (let i=0;i<string.length;i++) {
        if (isVowel(string[i])) {
            count++
        }
    }
    return count

}
console.log(countVowels("rupak"))


const recursiveCountVowels = (string,stringLength) => {
    //edge case

    console.log(`current string length: ${stringLength} for string: ${string.substring(0,stringLength)}`)

    if (stringLength === 1) {
        console.log("base case hit here")
        console.log("base case: ",Number(isVowel(string[0])))
        return Number(isVowel(string[0]))
    }

    let result = recursiveCountVowels(string,stringLength-1) +  isVowel(string[stringLength-1])
    console.log(` Count After Checking ${string[stringLength-1]}:${result}`)
    return result
    
}

let myName = "hello"

console.log(recursiveCountVowels(myName,myName.length))