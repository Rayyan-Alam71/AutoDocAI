import { v4 as uuidv4 } from 'uuid';
import path from "path"
import fs from "fs"
import { cwd } from "process"
import { execSync } from "child_process"
import { readdir, readFile } from "fs/promises"
import type { RepoFile } from "../types/type.js"
import { rimraf, rimrafSync } from "rimraf"
import { TESTING_SAMPLE_OUTPUT_FILETREE, TESTING_TREE_PYTHON } from "./testing.js"
import { OpenAIEmbeddings } from "@langchain/openai";
import { Pinecone as PineconeClient } from "@pinecone-database/pinecone"

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

export async function deleteTempDir(dirPath :string) {
    try {
        
        // console.log(dirPath) 
        // console.log("deleting dir")
        // fs.rmSync(dirPath, { this might not work solely in some edge cased
        //     recursive : true,
        //     force : true
        // })
        // console.log("dir deleted")
        await rimraf(dirPath, {
            maxRetries : 5,
            retryDelay : 2000
        })
        console.log("dir deleted")
    } catch (error) {
        console.error(error)
    }
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

export async function readFileTree(fileTreePath : string) : Promise<RepoFile[]>{
    // const sampleFilePath = path.join(cwd(), "autodoc-news-ai-agent-1769363873156")
    const allowedFiles = ["py", "txt", "md", "example", "ts", "js", "json", "html", "css", "tsx", "jsx"]
    try {
        const files : string[] = await readdir(fileTreePath, {
            recursive : true,
        })

        let arrayOfFileContent :  RepoFile[]= []
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
                fileName : file,
                fileContent 
            })
        }

        return arrayOfFileContent;
    } catch (error) {
        console.error(error)
        return []
    }
}

enum Language {
    REACT = "REACT",
    EXPRESS = "EXPRESS",
    PYTHON = "PYTHON"
}

const REACT_EXT = ['tsx', 'jsx', 'html', 'ts', 'js', 'css']
const REACT_HARD_CHECK = ['tsx', 'jsx']
const EXPRESS_EXT = ['ts', 'js']
const PYTHON_EXT = ['py', 'txt']

export function detectLanguage(filesArray : RepoFile[]) : Language{

    let fileType : Language = Language.EXPRESS;

    filesArray.map((file)=>{

        const fileExt = file.fileName.split("\\").pop()?.split(".").pop()
        console.log(fileExt)
        if(PYTHON_EXT.includes(String(fileExt))){
            fileType = Language.PYTHON
            return
        }

        if(REACT_EXT.includes(String(fileExt)) && !EXPRESS_EXT.includes(String(fileExt))){
            fileType = Language.REACT
            return 
        } 
    })

    return fileType
}

const GLOBAL_IGNORE = [
  "node_modules",
  "dist",
  "build",
  ".git",
  "__pycache__",
  "venv",
  ".next",
  "coverage"
]

function chunkReactCode(code: string): string[] {
  return code
    .split(/(?=export\s+default|function\s+[A-Z]|const\s+[A-Z])/g)
    .map(c => c.trim())
    .filter(c => c.length > 100)
}

function chunkNodeCode(code: string): string[] {
  return code
    .split(/(?=(?:^|\n)\s*(?:app\.|router\.|server\.|express\(\)|module\.exports\s*=|exports\.[a-zA-Z]|export\s+(?:default\s+)?|require\(['"]\w|(?:const|let|var)\s+(?:app|router|server|express|middleware|controller|config|db)\s*=|(?:async\s+)?function\s+[a-zA-Z]|class\s+[A-Z]))/gm)
    .map(c => c.trim())
    .filter(c => c.length > 100);
}

function chunkPythonCode(code: string): string[] {
  return code
    .split(/(?=(?:^|\n)(?:from |import |def |class |async def |@|if __name__|[a-z_]\w*\s*=\s*[A-Z]|with open\(|#\s+[A-Z]))/gm)
    .map(c => c.trim())
    .filter(c => c.length > 100);
}

// function  routeToChunkers(language : Language, file : RepoFile){
//     switch (language){
//         case Language.EXPRESS : return chunkNodeCode()
//     }
// }

export interface TextChunk{
    content? : string,
    fileName?: string
}
export function chunkCode(filesArray : RepoFile[], language : Language) : TextChunk[]{
    // perform chunking for relevant files
    
    const chunkedCodeArray : TextChunk []= []
    filesArray.map((file)=>{
        if(language === Language.EXPRESS){

            const chunks = chunkNodeCode(file.fileContent);
            console.log(chunks)
            for(const chunk of chunks){
                chunkedCodeArray.push({
                    content : chunk,
                    fileName : file.fileName
                })
            }
        }
        else if(language === Language.REACT && !file.fileName.includes("package-lock.json")){
            // if(file.fileName.includes("package-lock.json"))   
            const chunks = chunkReactCode(file.fileContent);
            
            for(const chunk of chunks){
                chunkedCodeArray.push({
                    content : chunk,
                    fileName : file.fileName
                })
            }
        }
        else if(language === Language.PYTHON){
            const chunks = chunkPythonCode(file.fileContent);

            for(const chunk of chunks){
                chunkedCodeArray.push({
                    content : chunk,
                    fileName : file.fileName
                })
            }
        }
    })

    console.log(chunkedCodeArray[0])
    return chunkedCodeArray
    // then convert them into Document langchain object


}

import { Document } from "@langchain/core/documents"
import { PineconeStore } from "@langchain/pinecone"
import { TESTING_NAMESPACE } from "../index.js"
import { generateVectorStore, getEmbeddingModel, getPineconeIndex } from '../utils/vectorStore.js';
import { PromptTemplate } from '@langchain/core/prompts';
import { customTemplate } from '../utils/prompts.js';
import { StringDecoder } from 'string_decoder';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { chatModel } from '../utils/models.js';


export async function generateEmbeddings(chunkedArray : TextChunk[], language :Language, namespace : string = TESTING_NAMESPACE) : Promise<PineconeStore | null>{
    /*
    this method generates and stores the embeddings created in the pinceonce vector db 

        @params : chunkedArray 
                  language
        
        returns : namespace string
    */
    try {
        
        const langchainDocumentChunked = convertIntoLangchainDocument(chunkedArray, language);
        
        if(langchainDocumentChunked.length === 0){
            console.error("error occurred while converting into langchain Document type")
            return null
        }
        
        const vectorStore = await generateVectorStore(namespace)
        
        if(!vectorStore){
            console.error("error in generating vector store")
            return null
        }
        // store the embeddings in the vector DB
        await vectorStore.addDocuments(langchainDocumentChunked)
        return vectorStore
    } catch (error) {
        console.error("error in generating embeddings")
        console.error(error)
        return null
    }
}


export async function queryVectorStore(namespace : string, userQuery : string){
    // doing similarity search with score

    // const simSearchWithScoreResult = await vectorStore.similaritySearchWithScore(userQuery, 2)

    // return simSearchWithScoreResult[0]


    try {
        
        const pineconeIndex = getPineconeIndex()
        const embeddingModel = getEmbeddingModel()
        const vectorStore = await PineconeStore.fromExistingIndex(embeddingModel, {
            pineconeIndex
        })


        const similaritySearchWithScoreRes = await vectorStore.similaritySearchWithScore(userQuery, 2)

        if(!similaritySearchWithScoreRes || similaritySearchWithScoreRes.length === 0){
            console.error("no context details found")
            return
        }



        // // use vector store ad retriever
        // const retriever = vectorStore.asRetriever({
        //     k : 2
        // })
        
        const customRagPrompTemplate = PromptTemplate.fromTemplate(customTemplate)
        
        const outputParser = new StringOutputParser()
        
        const chain = customRagPrompTemplate.pipe(chatModel).pipe(outputParser)
        
        // const contextDocs = await retriever.invoke(userQuery)
        console.log(typeof(similaritySearchWithScoreRes));
        let context = ""
        for(const doc of similaritySearchWithScoreRes){
            context += context.concat(`${doc[0].pageContent}`)
        }
        // const context = similaritySearchWithScoreRes.map((doc)=>{
        //     doc[0].pageContent
        // }).join("\n\n")
        
        console.log('CONTEXT DOCS RETRIEVED')
        
        const llmRes = await chain.invoke({
            question : userQuery,
            context : String(context)
        })
        return llmRes
    } catch (error) {
        console.error(error)
        return "LLM FAILED"
    }
}

export function convertIntoLangchainDocument(chunkedArray : TextChunk[], language : Language) : Document[]{
    // first convert the array into array of Document objects
    console.log("converting into langchain document type.....")
    const chunkedDocument : Document[] = [];
    for(const file of chunkedArray){
        const doc = new Document({
            pageContent : file.content!,
            id : uuidv4(),
            metadata : {
                language : language,
                filename : file.fileName!
            }
        })
        chunkedDocument.push(doc)
    }
    console.log(chunkedDocument)
    console.log("converted into langchain document type")

    return chunkedDocument;
}