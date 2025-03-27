interface ProgramParameters {
  track: string;
  level: string;
  interests: string;
  count?: number;
}

interface ProjectDeliverable {
  title: string;
  description: string;
}

// Export the interface for potential future use
export interface ProjectOverview {
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: ProjectDeliverable[];
  skillLevel: string;
  track: string;
  interests: string[];
}

// We'll export this interface in case it's needed in the future
export interface TimelineComponent {
  day: number;
  title: string;
  tasks: string[];
  duration: string;
  checkpoints?: string[];
}

// Define a type for the project information passed between requests
export interface PreviousProject {
  title: string;
  shortDescription: string;
}

export const baseContext = `
# Learning Framework: Robotics, Electronics & CAD

# Introduction

This framework outlines a coherent and adaptable learning progression for middle and high school students exploring robotics, electronics, and CAD through one-on-one virtual mentorship. It is designed to be easy to follow for parents and educators without technical backgrounds. Rather than a rigid curriculum, it provides a flexible phase-based roadmap that a college student mentor can tailor to a learner's interests and skill level. The focus is on guiding students to build a passion project from idea to showcase, with clear milestones and options to adapt based on available tools and resources.

# Learning Track: Robotics, Electronics & CAD

The mentorship track integrates three intertwined STEM domains, ensuring students get a well-rounded engineering experience:

- **Robotics**: Emphasizes mechanical design, actuation (motors, servos), and control systems. Students learn how to build moving creations and program them to interact with the world. This includes understanding gears and motion, designing robot structures, and simple programming of behavior.  
- **Electronics**: Covers circuits, sensors, and microcontrollers. Students discover how to wire up components (e.g. LEDs, sensors, motors), read schematics, and write code for microcontrollers like Arduino to control hardware. They gain hands-on experience with basic electronic components and how hardware and software interface.  
- **Computer-Aided Design (CAD)**: Involves 3D modeling, prototyping, and documentation. Students use CAD software to design parts or entire devices (like robot chassis or gadget enclosures) and learn to create diagrams or technical drawings. This cultivates spatial reasoning and the ability to prototype their ideas digitally before building.

*Integration*: These areas reinforce each other in projects – for example, designing a robot might require CAD for custom parts, and electronics to wire up sensors and motors. By combining all three, students experience the full engineering cycle from concept to tangible creation.

# Phase-Based Learning Structure (Flexible Entry Points)

Instead of traditional "beginner → intermediate → advanced" levels, this framework is organized into progressive project phases. A student can enter at a phase that matches their prior experience or comfort, and not every project must start from scratch. The phases are sequential in a project, but learners may loop back or jump in at a later phase if appropriate. The six key phases are:

1. **Exploration**: Discover and tinker. The student explores foundational concepts in robotics, electronics, and CAD with fun mini-experiments and research. This builds curiosity and identifies what excites them. (Example: playing with a basic circuit simulator, trying a pre-built robot in a virtual environment, or browsing cool project ideas.)  
2. **Concept**: Define an idea or goal. The student, guided by their mentor, chooses a project or problem to solve. They clarify the concept by asking questions and gathering inspiration. (Example: deciding to create a sensor-equipped birdhouse and sketching out what it might do.)  
3. **Design**: Plan and model the solution. The student designs the system and parts needed. This may involve drawing schematics, creating CAD models, and outlining code logic. (Example: designing the birdhouse in CAD, drawing a circuit for the sensor and lights, and planning the code structure.)  
4. **Build**: Implement and construct. The student builds the project – assembling hardware, writing and running code, and fabricating parts (or simulating these if physical building isn't possible). (Example: physically building and wiring the birdhouse with sensors and lights, or using a simulation tool to test the setup if hardware isn't on hand.)  
5. **Refine**: Test, troubleshoot, and improve. The student evaluates the project's performance and iterates on it. They learn to systematically debug issues and optimize their design. (Example: testing the birdhouse sensors, fixing a loose connection or adjusting the code for accuracy, and perhaps redesigning a part in CAD after seeing it in action.)  
6. **Showcase**: Present and share. The student finalizes the project and prepares to share it. They create documentation and presentations to showcase their work to others – an essential step for reflection and pride in accomplishment. (Example: making a short video tour of the smart birdhouse, writing up a project summary, and presenting it to family or a science fair.)

**Flexible Pathways**: Students can start at the phase that makes sense for them. For instance, a student who already has a project idea might jump straight into Design or Build with their mentor's guidance, whereas a complete novice might spend more time in Exploration first. The phases also aren't strictly linear – a learner may cycle back (e.g. return to the design phase to adjust plans after some building).

**Branching Options**: At each phase, there are multiple ways to proceed depending on the student's situation and resources. The mentor will suggest alternatives if needed. For example, during Build, one student might program a physical Arduino robot if they have a kit, while another without hardware could use a virtual robot simulator to practice coding and circuit building. This ensures every student can progress through the phases whether or not they have access to advanced tools.`;

export const exampleProjectIdeas = `
- Building a drone or RC plane
- Arduino or Raspberry Pi projects
- LEDs and light sensors
- Solar-powered projects
- Satellite tracking or rocket projects
- Aerodynamics or propulsion projects
- Motors, engines, or propellers
- Space exploration and planetary rovers
- Biomedical engineering or prosthetics
- Automobile or vehicle design
- Roller coasters or ride design
- 3D printing or CAD design
- Competitive robotics
- Drone racing
- Batteries or power systems
- Electric skateboards or scooters
- PC building or custom gaming rigs
`;

// Function to generate only project ideas without timelines
export function getProjectsOnlyPrompt(parameters: ProgramParameters): string {
  // Handle "any" track to provide a more natural prompt
  const trackText =
    parameters.track === "any"
      ? "STEM education, with flexibility across robotics, electronics, CAD, and aerospace"
      : parameters.track;

  // Get number of projects to generate, default to 5 if not specified
  const projectCount = parameters.count || 5;

  // Define specific criteria for each level
  let levelGuidance = "";
  if (parameters.level === "beginner") {
    levelGuidance = `
For BEGINNER level projects:
- No prior coding or electronics experience required
- Use only the most basic components (LEDs, buttons, simple sensors)
- Focus on single-function devices with minimal complexity
- Include detailed step-by-step instructions
- Projects should be completable in 1-3 sessions
- Examples: Basic LED circuit, simple cardboard mechanisms, introductory CAD models
`;
  } else if (parameters.level === "intermediate") {
    levelGuidance = `
For INTERMEDIATE level projects:
- Assumes basic familiarity with coding concepts and basic electronics
- Incorporate 2-3 different components or subsystems
- Projects should take 3-5 sessions to complete
- Some troubleshooting expected but with guided support
- Examples: Simple robots with 1-2 sensors, interactive devices, moderately complex CAD designs
`;
  } else if (parameters.level === "advanced") {
    levelGuidance = `
For ADVANCED level projects:
- Assumes prior experience with coding and basic electronics projects
- Incorporate multiple sensors, actuators, or complex mechanisms
- Projects may involve custom algorithms or advanced design
- Greater independence in implementation expected
- Projects typically take 5+ sessions to complete
- Examples: Autonomous robots, complex control systems, advanced CAD with moving parts
`;
  }

  // Generate the project structure based on the requested count
  let projectStructure = '{\n  "projects": [';
  for (let i = 1; i <= projectCount; i++) {
    projectStructure += `
    {
      "title": "Project ${i} Title",
      "shortDescription": "One-sentence description of project ${i}"
    }${i < projectCount ? "," : ""}`;
  }
  projectStructure += "\n  ]\n}";

  return `${baseContext}

You are an expert curriculum designer for ${trackText} at the ${parameters.level} level.
The student's interests include: ${parameters.interests}

${levelGuidance}

Please create ${projectCount} sample project proposals that follow this exact JSON structure:

${projectStructure}

Important guidelines for creating these projects:

1. Create projects that are specifically appropriate for a virtual 1:1 mentorship between a middle/high school student and a college-aged mentor.
2. Ensure the projects STRICTLY match the ${parameters.level} level criteria defined above and incorporate their interests in ${parameters.interests}.
3. The projects must be ACHIEVABLE in a virtual setting without requiring specialized equipment. Focus on tools that are accessible (like free software, basic electronics kits, or household items).
4. Make each project DIFFERENT from the others but at the SAME DIFFICULTY LEVEL.
5. Be careful not to suggest projects that are MORE ADVANCED than the specified level.

VERY IMPORTANT: Your response should be ONLY the raw JSON object, with no markdown formatting, no code blocks (like \`\`\`json), and nothing else before or after. Return only valid, parseable JSON.`;
}
