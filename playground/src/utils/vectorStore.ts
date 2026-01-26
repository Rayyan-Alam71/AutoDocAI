import { OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone"
import { Pinecone } from "@pinecone-database/pinecone";
import { Pinecone as PineconeClient } from "@pinecone-database/pinecone"


export async function generateVectorStore(namespace : string) : Promise<PineconeStore | null> {
    const embeddingModel = getEmbeddingModel()
    const pineconeIndex = getPineconeIndex()

    const vectorStore = await PineconeStore.fromExistingIndex(
        embeddingModel,
        {
            pineconeIndex,
            maxConcurrency : 5,
            namespace : namespace
        }
    )

    return vectorStore
}

export function getEmbeddingModel(){
    const embeddings = new OpenAIEmbeddings({
        apiKey : process.env.OPENAI_API_KEY || "",
        model: "text-embedding-3-small"
    });

    return embeddings
}

export function getPineconeIndex(){
    const pinecone = new PineconeClient({
        apiKey : process.env.PINECONE_API_KEY || ""
    })
    const index = pinecone.index(process.env.PINECONE_INDEX || "")

    return index
}