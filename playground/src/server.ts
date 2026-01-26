import express from "express"
import { validateRepoUrl } from "./helper/handler.js"
import {v4 as uuid} from "uuid"
import { repoIngestionQueue, testingQueue } from "./background/queue.js"
const app = express()

app.use(express.json())
app.get('/health', (req, res)=>{
    res.json({
        msg : 'server running smoothly'
    })
})

let DATA = {namespace : "", repoUrl : ""};

app.post("/embed", async (req, res)=>{
    const {repoUrl} = req.body;
    const isValidated = validateRepoUrl(repoUrl)

    if(!repoUrl || !isValidated){
        return res.json({
            msg : 'Invalid repo url'
        })
    }

    const namespace = `${uuid()}-${Date.now()}` // revisit it again
    console.log(namespace)
    // store this namespace and the status in the db
    DATA.namespace = namespace
    DATA.repoUrl = repoUrl

    // initiate the embedding process
    await repoIngestionQueue.add('ingestRepo', DATA, {
        attempts : 2,
        backoff : {
            type : "fixed",
            delay : 3000
        },
        removeOnComplete : true,
        removeOnFail : true
    })
    // return the namespace

    return res.status(200).json({
        msg : {
            DATA
        }
    })
})



app.post('/test',async  (req, res)=>{
    const { name } = req.body
    let DATA = {
        namespace : "",
        status: "",
        repourl : "repo"
    }
    DATA.namespace = "namespace"
    DATA.status = "queued"
    // add a job to the queue
    await testingQueue.add('test', DATA, {
        attempts : 2,
        backoff : {
            type : 'fixed',
            delay : 3000
        },
        removeOnComplete : true,
        removeOnFail : true
    })
    
    res.json({
        msg : 'bckground job started'
    })
})
async function initiateJob(){
    // mark as processing 

    // run clone the repo

    // read the file repo

    // generate the embeddings and store in the vector

    // mark as completed 

    // if failed, mark as failed
}

app.listen(3000, ()=>{
    console.log('server running')
})