import { chunkCode, cloneRepoIntoTempDir, convertIntoLangchainDocument, deleteTempDir, detectLanguage, generateEmbeddings, queryVectorStore, readFileTree, type TextChunk } from "./helper/handler.js"
import { TESTING_SAMPLE_OUTPUT_FILETREE, TESTING_TREE_PYTHON, TESTING_TREE_REACT } from "./helper/testing.js"
import { type RepoFile } from "./types/type.js"
import dotenv from "dotenv"

dotenv.config()

const EXAMPLE_REPO_URL = "https://github.com/Rayyan-Alam71/talkzz.git"

export const TESTING_NAMESPACE = "rayyan_alam_autodocAI_testing_react"

async function main(userQuery : string, repoUrl : string){
    try {
        // cloning the repo
        const createdDirPath = await cloneRepoIntoTempDir(EXAMPLE_REPO_URL)
    
        if(createdDirPath === "") {
            console.log("error while running cloneRepiIntTempDir")
            return
        }
        // retrieving files one by one
        const files : RepoFile[]= await readFileTree(createdDirPath)
    
        if(files.length == 0) {
            console.log("no files retrieved")
            return
        }
        console.log(files)
        
        // once the processing is over, delete the dir created
        setTimeout(()=>{
            // using setTimeout to let the process of cloning finish
            deleteTempDir(createdDirPath)
        }, 5000)

        const res = await test_embedding_query(files, userQuery)
        console.log(res)

        return
    } catch (error) {
        console.error(error)
    }
}
// await main("tell me how did he manage to create a crew/team of agents", EXAMPLE_REPO_URL)
// await main("tell me how is the chatpreview page is handling the responses. And what css properties make it to automatically scroll down when a new message arrives", EXAMPLE_REPO_URL)

// const llmRes = await queryVectorStore(TESTING_NAMESPACE, "tell me how is the chatpreview page is handling the responses. And what css properties make it to automatically scroll down when a new message arrives" )
// testing_chunks()
// console.log(process.env.OPENAI_API_KEY)

// testing the embedding generation and then querying

async function test_embedding_query(filesTree : RepoFile[], userQuery :string){
    
    try {
        
        // detecting the file language
        const lang  = detectLanguage(filesTree)
        
        // chunk the testing file 
        const chunkedArray = chunkCode(filesTree, lang)
        // generate embeddings and get back the vector store
    
        const vectorStore = await generateEmbeddings(chunkedArray, lang, "")
        
        if(!vectorStore){
            console.log("COULD NOT GENERATE VECTOR STORE")
            return
        }
        
        // then query 
        
        const res = await queryVectorStore(TESTING_NAMESPACE, userQuery)

        console.log(res)
    } catch (error) {
        console.error(error)   
        return
    }
}









function testing_chunks(){
    const lang = detectLanguage(TESTING_TREE_REACT)
    console.log(lang)
    const chunkedArray : TextChunk[] = chunkCode(TESTING_TREE_REACT, lang)
    if(chunkedArray.length === 1 && chunkedArray[0]?.content === ""){
        console.error("error occurred while chunking")
        return
    }
    // console.log(chunkedArray)
    console.log("---------DOCUMENT TYPE HERE --------------")
    console.log(convertIntoLangchainDocument(chunkedArray, lang))
}











// console.log()
/*
STEP 1 : Clone a git repo into a temp directory
STEP 2 : Read the file tree of the cloned repo and retrieve files one by one 
STEP 3 : Perform chunking (effective chunking)
STEP 4 : Create embeddings and store in the vectorDB
---------- (MARKED COMPLETED UP UNTIL HERE) -----------
STEP 5 : Build the backend and expose endpoints to create and store embeddings 
STEP 6 : Expose enpoint to let user to talk to the repo 
STEP 5 : Store the namespace in the db
STEP 6 : Complete the RAG pipeline


TO BE REFACTORED LATER : 
    1. Configure the namespace in the generateEmbeddings() as per the unique user
*/



