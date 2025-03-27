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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Parameters {
  focusArea: string;
  level?: string;
  interests: string;
  count?: number;
}

interface TimelineStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Project {
  title: string;
  shortDescription: string;
  difficulty?: string;
  isLoading?: boolean;
}

// Define a type for the API response project
interface ApiProject {
  title: string;
  shortDescription: string;
  difficulty: string;
}

export default function RoboticsTrackPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentParams, setCurrentParams] = useState<Parameters>({
    focusArea: "",
    level: "beginner",
    interests: "",
  });

  // Default timeline steps - this is the base timeline that will always be shown
  const defaultTimelineSteps: TimelineStep[] = [
    {
      title: "Explore",
      description: "Research and understand the problem space",
      icon: <Search className="h-4 w-4" />,
    },
    {
      title: "Ideate",
      description: "Generate potential solutions and approaches",
      icon: <Lightbulb className="h-4 w-4" />,
    },
    {
      title: "Design",
      description: "Create detailed plans and specifications",
      icon: <PenTool className="h-4 w-4" />,
    },
    {
      title: "Build",
      description: "Implement the solution",
      icon: <Wrench className="h-4 w-4" />,
    },
    {
      title: "Evaluate",
      description: "Test and assess the implementation",
      icon: <ClipboardCheck className="h-4 w-4" />,
    },
    {
      title: "Refine",
      description: "Iterate and improve based on feedback",
      icon: <RefreshCw className="h-4 w-4" />,
    },
  ];

  const handleSubmit = async (parameters: {
    focusArea: string;
    level: string;
    interests: string;
  }) => {
    // Reset all states
    setIsLoading(true);
    setError(null);
    setSelectedProject(null);
    setCurrentParams({
      focusArea: parameters.focusArea,
      level: parameters.level,
      interests: parameters.interests,
    });

    // Initialize projects in loading state
    setProjects([
      { title: "Project 1", shortDescription: "Loading...", isLoading: true },
      { title: "Project 2", shortDescription: "Loading...", isLoading: true },
      { title: "Project 3", shortDescription: "Loading...", isLoading: true },
      { title: "Project 4", shortDescription: "Loading...", isLoading: true },
      { title: "Project 5", shortDescription: "Loading...", isLoading: true },
    ]);

    try {
      // Fetch project ideas
      const projectsResponse = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parameters: {
            ...parameters,
            count: 5, // Request 5 projects specifically
          },
        }),
      });

      if (!projectsResponse.ok) {
        throw new Error("Failed to generate projects");
      }

      const projectsData = await projectsResponse.json();

      // Process project data
      let jsonData;
      try {
        const cleanedContent = projectsData.content
          .replace(/^```(json)?/m, "")
          .replace(/```$/m, "")
          .trim();
        jsonData = JSON.parse(cleanedContent);
      } catch {
        try {
          jsonData = JSON.parse(projectsData.content);
        } catch {
          throw new Error("Could not parse project data");
        }
      }

      if (!jsonData?.projects || !Array.isArray(jsonData.projects)) {
        throw new Error("Invalid project data format");
      }

      // Update state with received projects
      const receivedProjects = jsonData.projects.map((project: ApiProject) => ({
        title: project.title,
        shortDescription: project.shortDescription,
        difficulty: project.difficulty,
        isLoading: false,
      }));

      setProjects(receivedProjects);
      setSelectedProject(0); // Select first project
    } catch (err) {
      console.error("Error in overall process:", err);
      setError(err instanceof Error ? err.message : "An error occurred");
      setProjects([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to select a project and show its timeline
  const handleProjectSelect = (index: number) => {
    setSelectedProject(index);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Learning Track: Robotics / Electronics / CAD
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6">
          <ProgramParameters onSubmit={handleSubmit} />

          <Card className="w-full">
            <CardHeader>
              <CardTitle>Project Phases</CardTitle>
            </CardHeader>
            <CardContent>
              <Timeline className="relative">
                {defaultTimelineSteps.map((step, index) => (
                  <TimelineItem key={index}>
                    <TimelineSeparator>
                      <TimelineDot>{step.icon}</TimelineDot>
                      {index < defaultTimelineSteps.length - 1 && (
                        <TimelineConnector />
                      )}
                    </TimelineSeparator>
                    <TimelineContent>
                      <TimelineTitle>{step.title}</TimelineTitle>
                      <TimelineDescription>
                        {step.description}
                      </TimelineDescription>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card className="w-full border-none shadow-none">
            <CardHeader className="px-0 pt-0">
              <CardTitle>Sample Projects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 px-0">
              {isLoading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin" />
                </div>
              ) : error ? (
                <div className="text-red-500">{error}</div>
              ) : projects.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className={`space-y-2 cursor-pointer border rounded-md p-3 transition-all h-full ${
                        selectedProject === index
                          ? "border-primary border-2 shadow-sm"
                          : "border-muted hover:border-muted-foreground"
                      }`}
                      onClick={() => handleProjectSelect(index)}
                    >
                      {project.isLoading ? (
                        <div className="flex items-center">
                          <Loader2 className="h-4 w-4 animate-spin mr-2" />
                          <p>Generating project...</p>
                        </div>
                      ) : (
                        <>
                          <div className="flex justify-between items-start">
                            <h3 className="text-lg font-medium">
                              {project.title || `Project ${index + 1}`}
                            </h3>
                            <span className="text-xs bg-muted px-2 py-1 rounded-full">
                              {project.difficulty ||
                                currentParams.level ||
                                "mixed"}
                            </span>
                          </div>
                          <p className="text-muted-foreground">
                            {project.shortDescription ||
                              "No description available"}
                          </p>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">
                  Use the parameters above to generate sample projects.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
