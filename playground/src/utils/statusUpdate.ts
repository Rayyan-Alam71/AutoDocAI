// fetch the status update of the background job
import { Job, Queue } from "bullmq";


async function getJobUpdate(queue :Queue, jobId : string){

    try {
        const update = await Job.fromId(queue, jobId)
        const state = await update?.getState()
        
        console.log(state)
        
        return state
    } catch (error) {
        console.error(error)        
        return null
    }
}

export { getJobUpdate }