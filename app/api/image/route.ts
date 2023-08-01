import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openAi = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { prompt, amount = 1, resolution = "256x256" } = await req.json();
    if (!userId) return new NextResponse("Unauthorized", { status: 401 });
    if (!configuration.apiKey) return new NextResponse("OpenAI API Key not configured", { status: 500 });
    if (!prompt) return new NextResponse("Prompt are required", { status: 400 });
    const response = await openAi.createImage({ prompt, n: parseInt(amount, 10), size: resolution });
    return NextResponse.json(response.data.data);
  } catch (error) {
    console.log("[CONVERSATION ERROR]: ", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
