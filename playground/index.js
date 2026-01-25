import { cloneRepoIntoTempDir, retrieveFile } from "./helper/handler.js"

const EXAMPLE_REPO_URL = "https://github.com/Rayyan-Alam71/chat-with-webpage.git"

const createdDirPath = await cloneRepoIntoTempDir(EXAMPLE_REPO_URL)
retrieveFile(createdDirPath)