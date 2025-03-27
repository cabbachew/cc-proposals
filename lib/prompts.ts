interface ProgramParameters {
  focusArea: string;
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
export function getSampleProjectsPrompt(parameters: ProgramParameters): string {
  // Handle "any" track to provide a more natural prompt
  const focusAreaText =
    parameters.focusArea === "any"
      ? "STEM education, with flexibility across robotics, electronics, CAD, and aerospace"
      : parameters.focusArea;

  // Create specific guidance based on the focus area
  let focusAreaGuidance = "";
  if (parameters.focusArea === "robotics") {
    focusAreaGuidance = `
For ROBOTICS projects, focus on:
- Movement, actuation, and control systems
- Robot mechanics (joints, wheels, grippers, etc.)
- Sensors for environmental interaction
- Motion planning and navigation
- Autonomous behaviors
- Physical robot construction and design
`;
  } else if (parameters.focusArea === "electronics") {
    focusAreaGuidance = `
For ELECTRONICS projects, focus on:
- Circuit design and implementation
- Microcontroller programming (Arduino, etc.)
- Sensors and data collection
- Signal processing and analysis
- Power systems and management
- Interactive electronic devices
- PCB design and soldering (for advanced projects)
`;
  } else if (parameters.focusArea === "cad") {
    focusAreaGuidance = `
For CAD (Computer-Aided Design) projects, focus on:
- 3D modeling and design
- Mechanical part design
- Assembly creation and constraints
- Design for manufacturability
- Prototyping techniques
- Technical drawing and documentation
- Parametric design principles
`;
  } else if (parameters.focusArea === "aerospace") {
    focusAreaGuidance = `
For AEROSPACE projects, focus on:
- Aerodynamics and flight physics
- Propulsion systems
- Control surfaces and stability
- Model aircraft/rocket design
- Flight simulation and testing
- Data collection during flight tests
- Space-themed exploration vehicles
`;
  }

  // Get number of projects to generate, default to 5 if not specified
  const projectCount = parameters.count || 5;

  // Define specific criteria for each level
  const beginnerGuidance = `
For BEGINNER level projects:
- No prior coding or electronics experience required
- Use only the most basic components (LEDs, buttons, simple sensors)
- Focus on single-function devices with minimal complexity
- Include detailed step-by-step instructions
- Projects should be completable in 1-3 sessions
- Examples: Basic LED circuit, simple cardboard mechanisms, introductory CAD models
`;

  const intermediateGuidance = `
For INTERMEDIATE level projects:
- Assumes basic familiarity with coding concepts and basic electronics
- Incorporate 2-3 different components or subsystems
- Projects should take 3-5 sessions to complete
- Some troubleshooting expected but with guided support
- Examples: Simple robots with 1-2 sensors, interactive devices, moderately complex CAD designs
`;

  const advancedGuidance = `
For ADVANCED level projects:
- Assumes prior experience with coding and basic electronics projects
- Incorporate multiple sensors, actuators, or complex mechanisms
- Projects may involve custom algorithms or advanced design
- Greater independence in implementation expected
- Projects typically take 5+ sessions to complete
- Examples: Autonomous robots, complex control systems, advanced CAD with moving parts
`;

  // Determine whether to use mixed levels or a specific level
  let levelGuidance = "";
  let levelInstructions = "";

  // Define the mixed level distribution - only used when no level is specified
  const mixedDistribution = {
    beginner: 1,
    intermediate: 2,
    advanced: 2,
  };

  // If level is not specified or is "mixed", use mixed distribution
  if (!parameters.level || parameters.level === "mixed") {
    // For mixed levels, include all guidance
    levelGuidance = `${beginnerGuidance}${intermediateGuidance}${advancedGuidance}`;

    // Instructions for the exact 1-2-2 distribution of project difficulties
    levelInstructions = `
Create exactly:
- ${mixedDistribution.beginner} beginner level project
- ${mixedDistribution.intermediate} intermediate level projects
- ${mixedDistribution.advanced} advanced level projects

Each project must have its difficulty level specified in the "difficulty" field as either "beginner", "intermediate", or "advanced".
`;
  } else {
    // For a specific level, use only that level's guidance
    if (parameters.level === "beginner") {
      levelGuidance = beginnerGuidance;
    } else if (parameters.level === "intermediate") {
      levelGuidance = intermediateGuidance;
    } else if (parameters.level === "advanced") {
      levelGuidance = advancedGuidance;
    }

    // All projects should be at the specified level
    levelInstructions = `All projects should be at the ${parameters.level} level as defined above. Set the "difficulty" field to "${parameters.level}" for each project.`;
  }

  // Generate the project structure based on the requested count
  let projectStructure = '{\n  "projects": [';
  for (let i = 1; i <= projectCount; i++) {
    projectStructure += `
    {
      "title": "Project ${i} Title",
      "shortDescription": "One-sentence description of project ${i}",
      "difficulty": "beginner | intermediate | advanced"
    }${i < projectCount ? "," : ""}`;
  }
  projectStructure += "\n  ]\n}";

  return `${baseContext}

You are an expert curriculum designer for ${focusAreaText} focused on creating engaging project-based learning experiences.
The student's interests include: ${parameters.interests || exampleProjectIdeas}

${levelGuidance}

${focusAreaGuidance}

Please create ${projectCount} sample project proposals that follow this exact JSON structure:

${projectStructure}

Important guidelines for creating these projects:

1. Create projects that are specifically appropriate for a virtual 1:1 mentorship between a middle/high school student and a college-aged mentor.
2. ${levelInstructions}
3. INCORPORATE STUDENT INTERESTS WHEN APPROPRIATE: The projects should reasonably incorporate the student's stated interests: "${
    parameters.interests
  }". Find creative ways to connect these interests with ${focusAreaText} concepts.
4. STRICTLY FOLLOW THE FOCUS AREA: Every project MUST be centered around ${focusAreaText}. The projects should directly relate to the core concepts, skills, and applications of this domain as outlined above.
5. The projects must be ACHIEVABLE in a virtual setting without requiring specialized equipment. Focus on tools that are accessible (like free software, basic electronics kits, or household items).
6. ENSURE MAXIMUM VARIETY: Each project MUST focus on a DIFFERENT sub-domain of ${focusAreaText}. If one project covers a particular concept or skill, the others should explore different aspects of ${focusAreaText}.
7. DIVERSIFY PROJECT TYPES: Include a mix of different project types such as:
   - Interactive devices or systems
   - Data collection and analysis tools
   - Creative design challenges
   - Practical, real-world applications
   - Simulation and modeling activities
8. Make each project fundamentally different in purpose and application.
9. Be careful not to suggest projects that are beyond the specified difficulty level(s).

VERY IMPORTANT: Your response should be ONLY the raw JSON object, with no markdown formatting, no code blocks (like \`\`\`json), and nothing else before or after. Return only valid, parseable JSON.`;
}
