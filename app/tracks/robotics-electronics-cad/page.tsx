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
} from "lucide-react";

export default function RoboticsTrackPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Learning Track: Robotics / Electronics / CAD
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <ProgramParameters />
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
    </main>
  );
}
