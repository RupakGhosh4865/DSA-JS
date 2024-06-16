class stack {
    constructor(){
        this.stack=[]
   }
    push(data){
        this.stack.push(data)
   }
    pop(){
        this.stack.pop()
    }
//     peek(){
//         return this.stack[this.stack.length-1]

//     }
//     isEmpty(){
//         return this.stack.length===0
//     }
//     size(){
//         return this.stack.length
//     }
//     clear(){
//         this.stack=[]
//     }
    contains(elements){
        return this.stack.includes()
    }
//     reverse(){
//         this.stack.reverse()
//         }
printstack (){
let str =""
for (let i=0;i<this.stack.length;i++){
    str += this.stack[i] 
    return str
}}


///exaple for use 
 }
let mystack =new stack();

mystack.push (4)
mystack.push(2)
mystack.pop()

console.log(mystack.printstack())
console.log(mystack.contains(4))




