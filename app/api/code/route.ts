import { checkApiLimit, increaseApiLimit } from "@/lib/apiLimit";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openAi = new OpenAIApi(configuration);

const instructionMessage: ChatCompletionRequestMessage = {
  role: "system",
  content: "You are a code generator. Answer only in markdown code. Use comments for explenations",
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { messages } = await req.json();
    if (!userId) return new NextResponse("Unauthorized", { status: 401 });
    if (!configuration.apiKey) return new NextResponse("OpenAI API Key not configured", { status: 500 });
    if (!messages) return new NextResponse("Messages are required", { status: 400 });

    const freeTrial = await checkApiLimit();
    if (!freeTrial) return new NextResponse("Free trial expired", { status: 403 });

    const response = await openAi.createChatCompletion({ model: "gpt-3.5-turbo", messages: [instructionMessage, ...messages] });
    await increaseApiLimit();
    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.log("[CODE ERROR]: ", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
