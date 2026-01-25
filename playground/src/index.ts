import { chunkCode, cloneRepoIntoTempDir, deleteTempDir, detectLanguage, readFileTree } from "./helper/handler.js"
import { TESTING_SAMPLE_OUTPUT_FILETREE, TESTING_TREE_PYTHON, TESTING_TREE_REACT } from "./helper/testing.js"
import { type RepoFile } from "./types/type.js"
const EXAMPLE_REPO_URL = "https://github.com/Rayyan-Alam71/talkzz.git"


async function main(){
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
        return
    } catch (error) {
        console.error(error)
    }
}
// main()

function testing_chunks(){
    const lang = detectLanguage(TESTING_TREE_REACT)
    console.log(lang)
    const chunkedArray = chunkCode(TESTING_TREE_REACT, lang)
    console.log(chunkedArray)
}

testing_chunks()
/*
STEP 1 : Clone a git repo into a temp directory
STEP 2 : Read the file tree of the cloned repo and retrieve files one by one 
STEP 3 : Perform chunking (effective chunking)
---------- (MARKED COMPLETED UP UNTIL HERE) -----------
STEP 4 : Create embeddings and store in the vectorDB
STEP 5 : Store the namespace in the db
STEP 6 : Complete the RAG pipeline

*/



