interface ProgramParameters {
  track: string;
  level: string;
  interests: string;
}

export function getPrompt(parameters: ProgramParameters): string {
  return `You are an expert curriculum designer for ${parameters.track} at the ${parameters.level} level.
The student's interests include: ${parameters.interests}

Please create a detailed learning path that includes:
1. Key concepts and skills to master
2. Recommended projects and exercises
3. Learning resources and tools
4. Milestones and checkpoints
5. Assessment methods

Format the response in a clear, structured way that's easy to follow.`;
}
