import path from "path"
import fs from "fs"
import os from "os"
import { cwd, stderr, stdout } from "process"
import { exec, execSync } from "child_process"
import { readdir, readFile } from "fs/promises"


export function createTempDir(repoName){
    const currDir = cwd()
    const tempDirPath = path.join(cwd(), `autodoc-${repoName}-${Date.now()}`)
    console.log("creating dir...")
    fs.mkdirSync(tempDirPath, {recursive : true})
    console.log("dir created")
    return tempDirPath
}

export function validateRepoUrl(url){
    const gitHubRepoRegex = /^https:\/\/github\.com\/[\w-]+\/[\w.-]+(\.git)?$/

    if(!gitHubRepoRegex.test(url)){
        throw new Error("Invalid repo url")
    }
}

export function deleteTempDir(dirPath) { 
    console.log("deleting dir")
    fs.rmSync(dirPath, {recursive : true})
    console.log("dir deleted")
}

export async function cloneRepoIntoTempDir(repoUrl){
    try {
        validateRepoUrl(repoUrl)

        const fileName = repoUrl.split("/").pop().replace(".git", "")
        const dirPath = createTempDir(fileName)

        // cloning the repo in the dir path
        execSync(`git clone --depth=1 ${repoUrl} ${dirPath}`)

        console.log("git clone cmd executed successfully")

        // delete the git files(like .git, .git\\HEAD)
        const gitPath = path.join(dirPath, ".git")
        fs.rmSync(gitPath, {recursive : true, force : true})
        console.log("deleted .git")
        console.log(dirPath)
        return dirPath
    } catch (error) {
        console.error(error)
    }
    
}

export async function retrieveFile(dirPath){
    // retrieve the content of the file 
   try {
        const files = await readdir(dirPath, {
            recursive : true
        })
        console.log("files in the dir: ", files)

        for (const file of files){
            console.log(file)
        }

        // reading file one by one
        // readFileTree(files, dirPath)
   } catch (error) {
    console.error("error retrieving files: ", error)
   }
}
// C:\Users\Lenovo\OneDrive\Desktop\projects\AutodocAI\playground\autodoc-AutoDocAI-1769366356731

/*
this is waht returns after readdir(filepath_given_in_the_end)
[
  'playground',
  'playground\\helper',
  'playground\\index.js',
  'playground\\package.json',
  'playground\\helper\\handler.js'
]

*/

export async function readFileTree(fileTreePath){
    // const sampleFilePath = path.join(cwd(), "autodoc-news-ai-agent-1769363873156")
    const allowedFiles = ["py", "txt", "md", "example", "ts", "js", "json", "html", "css"]
    try {
        const files = await readdir(fileTreePath, {
            recursive : true,
        })

        let arrayOfFileContent = []
        for(const file of files){
            // split "playground\helper\handler.js" by "\" and look if the last is an allowed file. If yes then push into arrayOfFile
            console.log(file)
            const fileExtention = file.split("\\").pop().split(".").pop() // this will return "js"

            if(!allowedFiles.includes(fileExtention)){
                continue
            }

            const filePath = path.join(fileTreePath, file)
            const fileContent = await readFile(filePath, {
                encoding : "utf-8",
                recursive : true
            })

            arrayOfFileContent.push({
                filename : file,
                fileContent 
            })
        }

        return arrayOfFileContent;
    } catch (error) {
        console.error(error)
        return []
    }
}