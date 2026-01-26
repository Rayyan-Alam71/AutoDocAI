import { ChatOpenAI } from "@langchain/openai";

export const chatModel = new ChatOpenAI({
    model : "chatgpt-4o-latest",
    temperature : 0.5,
    apiKey : process.env.OPENAI_API_KEY ||""
})