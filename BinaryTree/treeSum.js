//Breadth Approach

const tbwbfs = (root) => {
    if (root===null) return 0
    const queue=[]
    let sum =0
    while (queue.length>0) {
        const node = queue.shift()
        sum+=node
        if(node.left!==null) queue.push(node.left)
        if(node.right!==null) queue.push(node.right)
    }
    return sum
}
//Depth First Approach


const tbwdfs = (root) => {
    if (root===null) return 0
    console.log("KEY:",root.key)
    return root.key + tbwdfs(root.left) + tbwdfs(root.right)
}

//bst end 