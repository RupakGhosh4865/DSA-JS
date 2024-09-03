class Node{
    constructor(key){
        this.key = key
        this.left = null
        this.right = null
    }
}
const breadthFirstSearch=(root)=>{
    const values=[]
    if (root === null) {
        return values
    }//empty string
    const queue = []
   
    while(queue.length>0){
        const node = queue.shift()
        values.push(node.key)
        if (node.left !== null) {
            queue.push(node.left)
        }
        if (node.right !== null) {
            queue.push(node.right)
        }
    }
    return values
}
  
//Recursive Approach
const breadthFirstSearchRecursive =(root )=>{
    const values=[]
    if(root===null) return values
    const traverseLevel = (nodeLevel)=>{
        if(nodeLevel.length===0) return
        const levelVals = []
        for(let node of nodeLevel){
            values.push(node.key)
            if(node.left !== null) levelVals.push(node.left)
            if(node.right !== null) levelVals.push(node.right)
        }
        traverseLevel(levelVals)
    }
    traverseLevel([root])
    return values
}
