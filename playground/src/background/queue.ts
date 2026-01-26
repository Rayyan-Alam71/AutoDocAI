// define a testing queue and worker to test

import { Queue, Worker } from "bullmq";
import { getRedisConnection } from "./redis.js";
import { chunkCode, cloneRepoIntoTempDir, deleteTempDir, detectLanguage, generateEmbeddings, readFileTree } from "../helper/handler.js";
import type { RepoFile } from "../types/type.js";


// create a worker that will clone the repo locally, then reads the filetree and generate and store the embeddings

export const RepoIngestWorker = new Worker(
    'RepoIngestionQueue',
    async (job) => {

        const {repoUrl, namespace} = job.data
        const createdDirPath = await cloneRepoIntoTempDir(repoUrl)

        if(createdDirPath === ""){
            console.log("error while cloning the repo locally")
            throw new Error('Error while cloning the repo locally') // can be retrieved from job.failedReason
        }

        // retrieving files
        const files : RepoFile[] = await readFileTree(createdDirPath)

        if(files.length === 0){
            // notify the user
            return {
                msg : 'error while reading files'
            }
        }

        // once the processin is over, delete the dir created

        setTimeout(()=>{
            deleteTempDir(createdDirPath)
        }, 5000)

        // now perform embedding creation
        // detect the file language

        const lang = detectLanguage(files)

        const chunkedArray = chunkCode(files, lang)
        
        const vectorStore = await generateEmbeddings(chunkedArray, lang, namespace)
    },
    {
        connection : getRedisConnection()
    }
)


RepoIngestWorker.on('failed', (job, err)=>{
    console.log(err)
})

export const repoIngestionQueue = new Queue('RepoIngestionQueue', {
    connection : getRedisConnection()
})





export const testingWorker = new Worker('TestingQueue',
    async (job) =>{
        // do simulative work
        console.log("--------------------")
        console.log(job.data.repourl)
        console.log(job.data.namespace)

        await new Promise((resolve)=> setTimeout(resolve, 10000))

        return {
            msg : 'eeror whule custom'
        }
        console.log(`Job ${job.id} completed`)
    },
    {connection : getRedisConnection()}
)

testingWorker.on('failed', (job, err)=>{
    console.log('job failed');
    console.error(err)
})


// Create a queue
export const testingQueue = new Queue('TestingQueue', {connection : getRedisConnection()})