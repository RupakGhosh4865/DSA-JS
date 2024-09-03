const graph ={
    "a":["b","d"],
    "b":["c"],
    "c":[],
    "d":["b","f"],
    "e":["d"],
    "f":[]
};

//iterative

function depthFirstTraversal (graph,start){

    const stack = [[start]]
    const visited = new Set()

    while (stack.length>0){
        const node =stack.pop()
        if (!visited.has(node)){
            visited.add(node)
            for (const neighbor of graph[node]){
                if(!visited.has(neighbor)){
                    stack.push(neighbor)
                }
            }
        }
        console.log(visited)
    }

}


// Recursive 

function depthFirstSearchRecursive(graph,start,visited=new Set())
{   
     
   
    if(!visited.has(start)){
        console.log(start)
        visited.add(start)
        for(const neighbour of graph[start]){
            depthFirstSearchRecursive(graph,neighbour,visited)
        }
    }
}

depthFirstSearchRecursive(graph, 'a');