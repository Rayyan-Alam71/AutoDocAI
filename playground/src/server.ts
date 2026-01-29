import express from "express"
import { queryVectorStore, validateRepoUrl } from "./helper/handler.js"
import {v4 as uuid, v4} from "uuid"
import { repoIngestionQueue, testingQueue } from "./background/queue.js"
import { prisma } from "./lib/prisma.js"
import { getJobUpdate } from "./utils/statusUpdate.js"
const app = express()

app.use(express.json())
app.get('/health', (req, res)=>{
    res.json({
        msg : 'server running smoothly'
    })
})

let DATA = {namespace : "", repoUrl : ""};

// checks the health of the server just check
app.post('/signin', async (req, res)=>{
    const {name, email} = req.body;

    try {
        const user = await prisma.user.create({
            data : {
                name,
                email
            }
        })

        return res.status(200).json({
            msg : 'user created',
            data : user
        })
    } catch (error) {
        console.log(error)
        return res.status(403).json({
            msg : 'error occurred in creating user'
        })
    }
} )

// endpoint to fetch the job update while polling

// no need to implement this, as the job gets finished too quickly before the client can poll it
app.post('/update', async (req, res)=>{
    const { jobId } = req.body;
    console.log(jobId)
    if(!jobId || jobId === ""){
        return res.json({
            error : {
                msg : 'Invalid job id'
            }
        })
    }

    const update = await getJobUpdate(repoIngestionQueue, jobId)
    if(!update){
        return res.json({
            error: {
                msg : 'failed to get the job update'
            }
        })
    }

    return res.json({
        msg : 'successfull',
        data : {
            status : update
        }
    })
})


// to initiate the background job and update the db
app.post("/embed", async (req, res)=>{
    const {repoUrl, userId} = req.body;
    const isValidated = validateRepoUrl(repoUrl)

    if(!repoUrl || !isValidated){
        return res.json({
            msg : 'Invalid repo url'
        })
    }

    const namespace = `${repoUrl.split("/").pop()?.replace(".git", "")}-${uuid()}-${Date.now()}` // revisit it again
    console.log(namespace)

    const jobId = `${v4()}-${Date.now()}`
    try {
        await prisma.namespace.create({
            data : {
                repoUrl,
                userId,
                namespace 
            }
        })

        // initiate the embedding process
        await repoIngestionQueue.add('ingestRepo', {namespace, repoUrl}, {
            attempts : 2,
            backoff : {
                type : "fixed",
                delay : 3000
            },
            removeOnComplete : true,
            removeOnFail : true,
            jobId : jobId
        })

        
        // return the namespace
    
        return res.status(200).json({
            msg : {
                namespace,
                jobId
            }
        })
    } catch (error) {
        console.log(error)
        return res.json({
            msg : 'error occurred'
        })
    }
})


// once the preprocessing is done, RAG chat with the repo

app.post('/rag', async (req, res)=>{
    const {question, namespace} = req.body;

    if(!question || !namespace){
        res.status(403).json({
            msg : 'Invalid namespace or question'
        })
    }

    try {
        const namespaceFound = await prisma.namespace.findFirst({
            where : {
                namespace
            }
        })

        if(!namespaceFound){
            res.json({
                msg : 'no such namespace found'
            })
        }

        const response = await queryVectorStore(namespace, question)

        res.json({
            res : response
        })
    } catch (error) {
        console.error(error)
        res.json({
            msg : 'error while retrieval'
        })
    }

})


// to test in the development phase
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

app.listen(3001, ()=>{
    console.log('server running')
})



/*
To be done later : 
    1. Add auth middleware to protect all the routes except the GET /health
    2. Properly structure the directory by dividing the tasks into Controllers, Routes and Services
    3. IF NEEDED! refactor the DB table structure
*/