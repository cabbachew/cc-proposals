import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { getProjectsOnlyPrompt } from "@/lib/prompts";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Function to clean the model's response from Markdown formatting
function cleanResponse(text: string): string {
  // Remove Markdown code block formatting
  let cleaned = text.replace(/^```(json)?/m, "").replace(/```$/m, "");

  // Trim whitespace
  cleaned = cleaned.trim();

  return cleaned;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { parameters } = body;

    // Only generate sample projects
    const prompt = getProjectsOnlyPrompt(parameters);

    const message = await anthropic.messages.create({
      model: "claude-3-5-sonnet-latest",
      max_tokens: 4096,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    let content = "";
    if (message.content[0].type === "text") {
      content = cleanResponse(message.content[0].text);
    }

    return NextResponse.json({
      content,
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
