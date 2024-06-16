class queue{
    constructor(){
        this.queue =[]

    }
    enqueue(data){
        this.queue.push(data)
    }
    dequeue(){
        this.queue.shift ()
    }
    isempty(){
        return this.queue.length===0
    }
    dequeue(){
        if(this.isempty()){
            return "queue  is empty"
        }
        return this.queue.shift()
    }
    peek(){
        return this.queue[0]
    }
    size(){
        return this.queue.length
    }
    clear(){
        this.queue =[]
    }
    printqueue(){
        let str =""
        for(let i=0;i<this.queue.length;i++){
            str+=this.queue[i]
        }
        return str

    }

}

/////////example///////////
let myqueue = new queue()
myqueue.enqueue(20)
myqueue.enqueue(10)
myqueue.enqueue(50)
myqueue.dequeue()
myqueue.dequeue()
myqueue.dequeue()
console.log(myqueue.printqueue())
console.log(myqueue.isempty())