import { cloneRepoIntoTempDir, deleteTempDir, readFileTree } from "./helper/handler.js"
import { type RepoFile } from "./types/type.js"
const EXAMPLE_REPO_URL = "https://github.com/Rayyan-Alam71/dashboard.git"


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
        deleteTempDir(createdDirPath)
        return
    } catch (error) {
        console.error(error)
    }
}
main()

/*
STEP 1 : Clone a git repo into a temp directory
STEP 2 : Read the file tree of the cloned repo and retrieve files one by one 
        ---------- (MARKED COMPLETED UP UNTIL HERE) -----------
STEP 3 : Perform chunking (effective chunking)
STEP 4 : Create embeddings and store in the vectorDB
STEP 5 : Store the namespace in the db
STEP 6 : Complete the RAG pipeline

*/



// C:\Users\Lenovo\OneDrive\Desktop\projects\AutodocAI\playground\autodoc-AutoDocAI-1769366356731