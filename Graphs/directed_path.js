const graph ={
    "a":["b","c"],
    "b":["c"],
    "c":[],
    "d":["b","f"],
    "e":["d"],
    "f":[]
}


//applying dfs
function hasPathDFS(graph,start,dest,){
    const stack = [start]
    const visited =new Set ()

    while(stack.length>0){
        const node = stack.pop()
        if(node === dest) return true
        if(visited.has(node)) continue
        visited.add(node)
        for(const neighbor of graph[node]){
            stack.push(neighbor)
        }
    }
    return false
}

console.log(hasPathDFS(graph,'a','f'))


//applying bfs

function hasPathBFS(graph,start,dest,){
    const queue = [start]
    const visited =new Set ()

    while(queue.length>0){
        const node = queue.shift()
        if(node === dest) return true
        for (const neighbour of graph[node]){
            if(!visited.has(neighbour)){
                console.log(neighbour);
                visited.add(neighbour)
                queue.push(neighbour)
            }
        }
    }
    return false
}

console.log(hasPathBFS(graph,'a','c'))

function hasPathRec(graph,start,dest,visited=new Set()){
    if(start===dest) return true

    if(visited.has(start)) return false
    visited.add(start)

    for(const neighbour of graph[start]){
        if(hasPathRec(graph,neighbour,dest)) return true
    }

    return false
}
console.log(hasPathRec(graph,'a','e'))

