"use client";

import { ProgramParameters } from "@/app/components/ProgramParameters";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
} from "@/components/ui/timeline";
import {
  Search,
  Lightbulb,
  PenTool,
  Wrench,
  ClipboardCheck,
  RefreshCw,
  Loader2,
} from "lucide-react";
import { useState } from "react";

interface Parameters {
  track: string;
  level: string;
  interests: string;
}

export default function RoboticsTrackPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (parameters: Parameters) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ parameters }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate response");
      }

      setResult(data.content);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Learning Track: Robotics / Electronics / CAD
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <ProgramParameters onSubmit={handleSubmit} />
        </div>
        <div className="md:col-span-2 min-h-[400px] rounded-lg border bg-card p-6">
          <Timeline className="relative">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot>
                  <Search className="h-4 w-4" />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <TimelineTitle>Explore</TimelineTitle>
                <TimelineDescription>
                  Research and understand the problem space
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot>
                  <Lightbulb className="h-4 w-4" />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <TimelineTitle>Ideate</TimelineTitle>
                <TimelineDescription>
                  Generate potential solutions and approaches
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot>
                  <PenTool className="h-4 w-4" />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <TimelineTitle>Design</TimelineTitle>
                <TimelineDescription>
                  Create detailed plans and specifications
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot>
                  <Wrench className="h-4 w-4" />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <TimelineTitle>Build</TimelineTitle>
                <TimelineDescription>
                  Implement the solution
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot>
                  <ClipboardCheck className="h-4 w-4" />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <TimelineTitle>Evaluate</TimelineTitle>
                <TimelineDescription>
                  Test and assess the implementation
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot>
                  <RefreshCw className="h-4 w-4" />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <TimelineTitle>Refine</TimelineTitle>
                <TimelineDescription>
                  Iterate and improve based on feedback
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>

      <div className="mt-8 rounded-lg border bg-card p-6">
        <h2 className="text-2xl font-semibold mb-4">Generated Learning Path</h2>
        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : result ? (
          <div className="prose prose-sm max-w-none">
            {result.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">
            Submit the form above to generate a personalized learning path.
          </p>
        )}
      </div>
    </main>
  );
}
