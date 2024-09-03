const graph ={
    a: ["b", "c"],
    b:["a","d","e"],
    c:["a","f"],
    d:["b"],
    e:["b","f"],
    f:["c","e"]
}


//iterative approach

function breadthfirstSearch (graph,start)
{
    const queue = [start]
    const visited =new Set()
    while(queue.length>0)
    {
        const node = queue.shift()

            for (const neighbor of graph[node]){
                if(!visited.has(neighbor)){
                    console.log(neighbor);
                    visited.add(neighbor)
                    queue.push(neighbor)
                }
            }
            
         } }

         breadthfirstSearch(graph,"a")
