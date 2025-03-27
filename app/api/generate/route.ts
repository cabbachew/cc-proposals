import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { getPrompt } from "@/lib/prompts";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { parameters } = body;

    const prompt = getPrompt(parameters);

    const message = await anthropic.messages.create({
      model: "claude-3-7-sonnet-20250219",
      max_tokens: 4096,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return NextResponse.json({
      content:
        message.content[0].type === "text" ? message.content[0].text : "",
      success: true,
    });
  } catch (error) {
    console.error("Error generating response:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
