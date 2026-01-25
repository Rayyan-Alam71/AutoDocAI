import fs from "fs"
import { cloneRepoIntoTempDir, readFileTree, retrieveFile } from "./helper/handler.js"
import { readdir } from "fs/promises"

const EXAMPLE_REPO_URL = "https://github.com/Rayyan-Alam71/spearmint_tech.git"


async function main(){
    const createdDirPath = await cloneRepoIntoTempDir(EXAMPLE_REPO_URL)
    console.log("RETRIEVING FILES..........")
    console.log(createdDirPath)
    await retrieveFile(createdDirPath)

    console.log("READING FILES..........")
    // const files = await readdir(createdDirPath, {
    //     recursive : true
    // })
    // console.log(files)

    // for(const file of files) console.log(file.split("\\"))
    const files = await readFileTree(createdDirPath)

    if(files.length == 0) {
        console.log("no files retrieved")
        return
    }

    console.log(files)
    return
}
main()

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



// C:\Users\Lenovo\OneDrive\Desktop\projects\AutodocAI\playground\autodoc-AutoDocAI-1769366356731