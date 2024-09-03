//iterative approach

function checkPalindrome (inputString) {
    {
        for(let i=0;i<inputString.length/2;i++)
            {
                if (inputString[i] !== inputString[inputString.length-1-i]) {
                    return false
                }
                return true
            }
    }
}
console.log (checkPalindrome("madam")); 


//recursive approach

function recursiveCheckPalindrome (inputString) { 
     // check palindrome 

     if (inputString.length <= 1) {
         return true
     }

     if (inputString[0] === inputString[inputString.length - 1]) {
         return recursiveCheckPalindrome(inputString.substring(1, inputString.length - 1))
     }
     return false
    }
    console.log (recursiveCheckPalindrome("madamm"));