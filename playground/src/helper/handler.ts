import path from "path"
import fs from "fs"
import os from "os"
import { cwd, stderr, stdout } from "process"
import { exec, execSync } from "child_process"
import { readdir, readFile } from "fs/promises"


export function createTempDir(repoName : string){
    const currDir = cwd()
    const tempDirPath = path.join(cwd(), `autodoc-${repoName}-${Date.now()}`)
    fs.mkdirSync(tempDirPath, {recursive : true})
    return tempDirPath
}

export function validateRepoUrl(url : string){
    const gitHubRepoRegex = /^https:\/\/github\.com\/[\w-]+\/[\w.-]+(\.git)?$/

    if(!gitHubRepoRegex.test(url)){
        throw new Error("Invalid repo url")
    }
}

export function deleteTempDir(dirPath :string) { 
    console.log("deleting dir")
    fs.rmSync(dirPath, {recursive : true})
    console.log("dir deleted")
}

export async function cloneRepoIntoTempDir(repoUrl : string){
    if(!repoUrl) {
        console.error("invalid repo Url")
        return ""
    }
    try {
        validateRepoUrl(repoUrl)

        const fileName = repoUrl.split("/").pop()?.replace(".git", "")
        if(!fileName){
            console.error("Unable to extract file name from the repo url")
            return ""
        }
        const dirPath = createTempDir(fileName)

        // cloning the repo in the dir path
        execSync(`git clone --depth=1 ${repoUrl} ${dirPath}`)

        console.log("git clone cmd executed successfully")

        // delete the git files(like .git, .git\\HEAD)
        const gitPath = path.join(dirPath, ".git")
        fs.rmSync(gitPath, {recursive : true, force : true})
        
        return dirPath
    } catch (error) {
        console.error(error)
        return ""
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

export async function readFileTree(fileTreePath : string){
    // const sampleFilePath = path.join(cwd(), "autodoc-news-ai-agent-1769363873156")
    const allowedFiles = ["py", "txt", "md", "example", "ts", "js", "json", "html", "css"]
    try {
        const files : string[] = await readdir(fileTreePath, {
            recursive : true,
        })

        let arrayOfFileContent = []
        for(const file of files){
            // split "playground\helper\handler.js" by "\" and look if the last is an allowed file. If yes then push into arrayOfFile
            const fileExtention = file.split("\\").pop()?.split(".").pop() // this will return "js"

            if(!fileExtention){
                console.error("error while retrieving file extension")
                return []
            }

            if(!allowedFiles.includes(fileExtention)){
                continue
            }

            const filePath = path.join(fileTreePath, file)
            const fileContent = await readFile(filePath, {
                encoding : "utf-8"
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