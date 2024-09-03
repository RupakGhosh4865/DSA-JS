const depthfirsttraversal = (root) => {
    if(root === null) 
    return 

    const values = []
    const stack = [root]
    while(stack.length > 0) {
        const node = stack.pop() //point of optimization
        values.push(node.key)
        if(root.right!==null) {
            stack.push(node.right)
        }
        if(node.left!==null) {
            stack.push(node.left)
        }
    }
    return values
}

//recursive approacch

const depthFirstTraversalRecursive =(root)=>{
    if(root===null) return []
    const leftValues = depthFirstTraversalRecursive(root.left)
    const RightValues = depthFirstTraversalRecursive(root.right)
      // return [root.key,leftValues,RightValues]
    // output:- [a,[b,c,d],[e,f,g]]
    return [root.key,...leftValues,...RightValues]
     // output:- [a,b,c,d,e,f,g]
}
