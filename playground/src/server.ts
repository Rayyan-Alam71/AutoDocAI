import express from "express"
import { queryVectorStore, validateRepoUrl } from "./helper/handler.js"
import {v4 as uuid} from "uuid"
import { repoIngestionQueue, testingQueue } from "./background/queue.js"
import { prisma } from "./lib/prisma.js"
const app = express()

app.use(express.json())
app.get('/health', (req, res)=>{
    res.json({
        msg : 'server running smoothly'
    })
})

let DATA = {namespace : "", repoUrl : ""};

app.post('/', async (req, res)=>{
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

    try {
        await prisma.namespace.create({
            data : {
                repoUrl ,
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
        removeOnFail : true
    })
    // return the namespace
    
    return res.status(200).json({
        msg : {
            namespace
        }
    })
    } catch (error) {
        console.log(error)
        return res.json({
            msg : 'error occurred'
        })
    }
})


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
{
    "msg": "user created",
    "data": {
        "id": "b90d1692-ff4d-4cff-9906-7a4bd5cac68d",
        "name": "Rayyan Alam",
        "email": "alamrayan@gmail.com"
    }
}
*/