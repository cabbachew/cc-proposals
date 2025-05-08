import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LayoutDashboard,
  Briefcase,
  Microscope,
  Rocket,
  Clapperboard,
  Check,
  Dot,
} from "lucide-react";
import Image from "next/image";
import { Manrope, Roboto_Mono, Inter } from "next/font/google";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["800"], // ExtraBold
  variable: "--font-manrope",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Summer Programs | CC Learning Proposals",
  description: "Explore summer learning opportunities and programs.",
};

export default function SummerPage() {
  return (
    <main
      className={`container mx-auto px-4 py-8 ${manrope.variable} ${robotoMono.variable} ${inter.variable}`}
    >
      <div className="flex flex-col gap-2 mb-6">
        <div className="flex items-center gap-4">
          <Image
            src="/blobIcon.svg"
            alt="Blob Icon"
            width={48}
            height={48}
            className="w-10 h-10"
          />
          <h1 className="text-2xl font-bold font-manrope">
            2025 Summer: Intensive Project Launch
          </h1>
        </div>
        <p className="text-md text-gray-600 font-inter">
          Timeless Skills. Real Impact. Transform Your Summer with Curious
          Cardinals.
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full justify-start border-b border-gray-200">
          <TabsTrigger
            value="overview"
            className="relative text-gray-500 px-4 py-2 data-[state=active]:text-black data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:w-full data-[state=active]:after:h-0.5 data-[state=active]:after:bg-[#fbc012]"
          >
            <LayoutDashboard className="w-4 h-4 mr-2 inline" />
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="portfolio"
            className="relative text-gray-500 px-4 py-2 data-[state=active]:text-black data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:w-full data-[state=active]:after:h-0.5 data-[state=active]:after:bg-[#fbc012]"
          >
            <Briefcase className="w-4 h-4 mr-2 inline" />
            Portfolio
          </TabsTrigger>
          <TabsTrigger
            value="research"
            className="relative text-gray-500 px-4 py-2 data-[state=active]:text-black data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:w-full data-[state=active]:after:h-0.5 data-[state=active]:after:bg-[#fbc012]"
          >
            <Microscope className="w-4 h-4 mr-2 inline" />
            Research
          </TabsTrigger>
          <TabsTrigger
            value="launch"
            className="relative text-gray-500 px-4 py-2 data-[state=active]:text-black data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:w-full data-[state=active]:after:h-0.5 data-[state=active]:after:bg-[#fbc012]"
          >
            <Rocket className="w-4 h-4 mr-2 inline" />
            Launch
          </TabsTrigger>
          <TabsTrigger
            value="content"
            className="relative text-gray-500 px-4 py-2 data-[state=active]:text-black data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:w-full data-[state=active]:after:h-0.5 data-[state=active]:after:bg-[#fbc012]"
          >
            <Clapperboard className="w-4 h-4 mr-2 inline" />
            Content
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="prose max-w-none">
            <h2 className="text-lg font-semibold mb-4">Program Structure</h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>20 hours of personalized 1:1 mentorship ($3,000)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Typically 2 hours per week for 10 weeks</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Expert-led workshops and end-of-summer symposium</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  Personalized mentor matching based on interests and goals
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Flexible scheduling with 24hr rescheduling policy</span>
              </li>
            </ul>

            <h2 className="text-lg font-semibold mb-4">Project Tracks</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]"></TableHead>
                  <TableHead className="w-1/4">
                    <div className="flex items-center gap-2 font-semibold text-gray-900">
                      <Briefcase className="w-4 h-4" />
                      Portfolio
                    </div>
                  </TableHead>
                  <TableHead className="w-1/4">
                    <div className="flex items-center gap-2 font-semibold text-gray-900">
                      <Microscope className="w-4 h-4" />
                      Research
                    </div>
                  </TableHead>
                  <TableHead className="w-1/4">
                    <div className="flex items-center gap-2 font-semibold text-gray-900">
                      <Rocket className="w-4 h-4" />
                      Launch
                    </div>
                  </TableHead>
                  <TableHead className="w-1/4">
                    <div className="flex items-center gap-2 font-semibold text-gray-900">
                      <Clapperboard className="w-4 h-4" />
                      Content
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Ideal For</TableCell>
                  <TableCell className="text-gray-600">
                    Students with technical or creative skills who want to
                    showcase abilities, creativity, and project completion
                  </TableCell>
                  <TableCell className="text-gray-600">
                    Students passionate about academic topics who want to
                    demonstrate research skills, intellectual curiosity, and
                    subject mastery
                  </TableCell>
                  <TableCell className="text-gray-600">
                    Students with vision to create change who want to highlight
                    leadership, initiative, and commitment to impact
                  </TableCell>
                  <TableCell className="text-gray-600">
                    Students who enjoy sharing ideas and want to exhibit
                    communication skills, creativity, and audience engagement
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Potential Deliverables
                  </TableCell>
                  <TableCell className="text-gray-600">
                    <ul className="list-none space-y-1">
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Portfolio website
                      </li>
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Completed project
                      </li>
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Prototype
                      </li>
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Digital or physical creation
                      </li>
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Design portfolio
                      </li>
                    </ul>
                  </TableCell>
                  <TableCell className="text-gray-600">
                    <ul className="list-none space-y-1">
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Research paper
                      </li>
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Literature review
                      </li>
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Research presentation
                      </li>
                    </ul>
                  </TableCell>
                  <TableCell className="text-gray-600">
                    <ul className="list-none space-y-1">
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Business concept
                      </li>
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Nonprofit/community initiative
                      </li>
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        School organization plan
                      </li>
                    </ul>
                  </TableCell>
                  <TableCell className="text-gray-600">
                    <ul className="list-none space-y-1">
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Written publication
                      </li>
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Social media presence
                      </li>
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Podcast/interview series
                      </li>
                    </ul>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Skill Development
                  </TableCell>
                  <TableCell className="text-gray-600">
                    <ul className="list-none space-y-1">
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Technical/creative skills
                      </li>
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Project development
                      </li>
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Design thinking
                      </li>
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Presentation
                      </li>
                    </ul>
                  </TableCell>
                  <TableCell className="text-gray-600">
                    <ul className="list-none space-y-1">
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Academic research methods
                      </li>
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Critical analysis
                      </li>
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Scientific writing
                      </li>
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Data analysis
                      </li>
                    </ul>
                  </TableCell>
                  <TableCell className="text-gray-600">
                    <ul className="list-none space-y-1">
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Leadership
                      </li>
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Strategic planning
                      </li>
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Team building
                      </li>
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Communication
                      </li>
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Organizational management
                      </li>
                    </ul>
                  </TableCell>
                  <TableCell className="text-gray-600">
                    <ul className="list-none space-y-1">
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Content creation
                      </li>
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Audience building
                      </li>
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Personal branding
                      </li>
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Multimedia production
                      </li>
                      <li className="flex items-start">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Storytelling
                      </li>
                    </ul>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="portfolio" className="mt-6">
          <div className="prose max-w-none">
            <h2 className="text-lg font-semibold mb-4">
              From concept to compelling portfolio
            </h2>
            <p className="text-md text-gray-600 mb-4">
              Our portfolio track enables students to develop tangible products
              in their area of interest:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  Technical projects: apps, websites, games, or software tools
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  Creative works: art collections, design projects, music
                  compositions
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  Engineering prototypes: inventions, models, or hardware
                  solutions
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  Digital portfolios showcasing a collection of smaller projects
                </span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-8">
            <div className="border-2 border-[#a7f3d0] p-6 shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
              <h3 className="font-semibold mb-2">Exploring & Planning Phase</h3>
              <p className="text-sm text-gray-600 mb-4">Sessions 1-3</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Identify strengths, interests, and portfolio direction
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Study successful examples in your chosen field
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Begin learning necessary technical skills
                  </span>
                </li>
              </ul>
              <p className="text-sm font-medium">
                Deliverable: Project concept and initial plan
              </p>
            </div>

            <div className="border-2 border-[#a7f3d0] p-6 shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
              <h3 className="font-semibold mb-2">Prototype Phase</h3>
              <p className="text-sm text-gray-600 mb-4">Sessions 4-7</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Create detailed project specifications
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Develop initial prototype or mockup
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Gather feedback and refine project vision
                  </span>
                </li>
              </ul>
              <p className="text-sm font-medium">
                Deliverable: Working prototype and development plan
              </p>
            </div>

            <div className="border-2 border-[#a7f3d0] p-6 shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
              <h3 className="font-semibold mb-2">Build & Develop Phase</h3>
              <p className="text-sm text-gray-600 mb-4">Sessions 8-17</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Build your project with regular feedback cycles
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Overcome technical challenges with mentor guidance
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Document your creative process and decision-making
                  </span>
                </li>
              </ul>
              <p className="text-sm font-medium">
                Deliverable: Substantial project development with portfolio
                structure
              </p>
            </div>

            <div className="border-2 border-[#a7f3d0] p-6 shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
              <h3 className="font-semibold mb-2">Presentation Phase</h3>
              <p className="text-sm text-gray-600 mb-4">Sessions 18-20</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Finalize your project for presentation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Create or enhance portfolio presentation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Practice presenting: what you built, why it matters,
                    challenges overcome, and future plans
                  </span>
                </li>
              </ul>
              <p className="text-sm font-medium">
                Deliverable: Completed project with portfolio presentation
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="research" className="mt-6">
          <div className="prose max-w-none">
            <h2 className="text-lg font-semibold mb-4">
              From curiosity to completed research
            </h2>
            <p className="text-md text-gray-600 mb-4">
              Our summer intensive focuses on three main research deliverables:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  Research Paper: A comprehensive exploration of your topic with
                  proper academic structure
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  Literature Review: A synthesis of existing knowledge on your
                  chosen topic
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  Research Presentation: A professional presentation of your
                  findings with supporting visuals
                </span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-8">
            <div className="border-2 border-[#a7f3d0] p-6 shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
              <h3 className="font-semibold mb-2">Discovery & Planning Phase</h3>
              <p className="text-sm text-gray-600 mb-4">Sessions 1-3</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Explore personal research interests and potential topics
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Learn research fundamentals and methodologies
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Conduct preliminary literature review on chosen area
                  </span>
                </li>
              </ul>
              <p className="text-sm font-medium">
                Deliverable: Research question and initial proposal
              </p>
            </div>

            <div className="border-2 border-[#a7f3d0] p-6 shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
              <h3 className="font-semibold mb-2">Design Phase</h3>
              <p className="text-sm text-gray-600 mb-4">Sessions 4-7</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Develop detailed research methodology
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Create data collection plan and tools
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Begin preliminary research or experiment design
                  </span>
                </li>
              </ul>
              <p className="text-sm font-medium">
                Deliverable: Complete research plan with timeline
              </p>
            </div>

            <div className="border-2 border-[#a7f3d0] p-6 shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
              <h3 className="font-semibold mb-2">Execution & Analysis Phase</h3>
              <p className="text-sm text-gray-600 mb-4">Sessions 8-17</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Conduct research, experiments, or data collection
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Analyze findings and develop conclusions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Draft research paper or presentation materials
                  </span>
                </li>
              </ul>
              <p className="text-sm font-medium">
                Deliverable: Substantial draft with key findings
              </p>
            </div>

            <div className="border-2 border-[#a7f3d0] p-6 shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
              <h3 className="font-semibold mb-2">Presentation Phase</h3>
              <p className="text-sm text-gray-600 mb-4">Sessions 18-20</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Refine final research paper or presentation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Create compelling visuals and supporting materials
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Practice presentation: what you did, why it matters, what
                    you learned, and future directions
                  </span>
                </li>
              </ul>
              <p className="text-sm font-medium">
                Deliverable: Completed research project and symposium
                presentation
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="launch" className="mt-6">
          <div className="prose max-w-none">
            <h2 className="text-lg font-semibold mb-4">
              From idea to impactful initiative
            </h2>
            <p className="text-md text-gray-600 mb-4">
              Students can develop three main types of organizations or
              initiatives:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  Business Concept: Small business or entrepreneurial venture
                  with a plan and initial structure
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  Nonprofit/Community Initiative: Volunteer program, community
                  service project, or advocacy campaign
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  School Organization: Club or chapter plan to implement when
                  school resumes
                </span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-8">
            <div className="border-2 border-[#a7f3d0] p-6 shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
              <h3 className="font-semibold mb-2">Vision & Research Phase</h3>
              <p className="text-sm text-gray-600 mb-4">Sessions 1-3</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Identify causes aligned with your values and community needs
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Research existing organizations and potential gaps
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Develop initial mission and vision statements
                  </span>
                </li>
              </ul>
              <p className="text-sm font-medium">
                Deliverable: Organization concept and mission
              </p>
            </div>

            <div className="border-2 border-[#a7f3d0] p-6 shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
              <h3 className="font-semibold mb-2">Design Phase</h3>
              <p className="text-sm text-gray-600 mb-4">Sessions 4-7</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Create detailed organization structure and plan
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Develop branding, messaging, and visual identity
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Define success metrics and impact goals
                  </span>
                </li>
              </ul>
              <p className="text-sm font-medium">
                Deliverable: Organization design and roadmap
              </p>
            </div>

            <div className="border-2 border-[#a7f3d0] p-6 shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
              <h3 className="font-semibold mb-2">Execution Phase</h3>
              <p className="text-sm text-gray-600 mb-4">Sessions 8-17</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Build digital presence (website, social media)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Start recruiting team members or building partnerships
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Develop key materials, resources, or initial offering
                  </span>
                </li>
              </ul>
              <p className="text-sm font-medium">
                Deliverable: Minimum viable organization with digital presence
              </p>
            </div>

            <div className="border-2 border-[#a7f3d0] p-6 shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
              <h3 className="font-semibold mb-2">Presentation Phase</h3>
              <p className="text-sm text-gray-600 mb-4">Sessions 18-20</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Finalize organization materials and structure
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Create compelling pitch presentation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Practice presenting: what you created, why it matters,
                    challenges overcome, and future plans
                  </span>
                </li>
              </ul>
              <p className="text-sm font-medium">
                Deliverable: Organization concept with presentation
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="content" className="mt-6">
          <div className="prose max-w-none">
            <h2 className="text-lg font-semibold mb-4">
              From inspiration to audience building
            </h2>
            <p className="text-md text-gray-600 mb-4">
              Students can develop three main types of content platforms:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  Written Publications: Blogs, digital magazines, newsletters,
                  or other written content
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  Social Media: Instagram, YouTube, TikTok, or other social
                  platform presence
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  Podcasts & Interviews: Audio content featuring discussions,
                  interviews, or storytelling
                </span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-8">
            <div className="border-2 border-[#a7f3d0] p-6 shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
              <h3 className="font-semibold mb-2">Discovery & Planning Phase</h3>
              <p className="text-sm text-gray-600 mb-4">Sessions 1-3</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Identify your content niche and target audience
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Choose platform and content format
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Develop your unique voice and content approach
                  </span>
                </li>
              </ul>
              <p className="text-sm font-medium">
                Deliverable: Content strategy and platform selection
              </p>
            </div>

            <div className="border-2 border-[#a7f3d0] p-6 shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
              <h3 className="font-semibold mb-2">
                Development & Initial Launch
              </h3>
              <p className="text-sm text-gray-600 mb-4">Sessions 4-7</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Learn technical skills for your chosen medium
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Create content calendar and production schedule
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Launch platform and publish first content piece
                  </span>
                </li>
              </ul>
              <p className="text-sm font-medium">
                Deliverable: Platform launch with initial content
              </p>
            </div>

            <div className="border-2 border-[#a7f3d0] p-6 shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
              <h3 className="font-semibold mb-2">
                Experimentation & Refinement
              </h3>
              <p className="text-sm text-gray-600 mb-4">Sessions 8-17</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Create and publish multiple content pieces
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Experiment with different formats and approaches
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Refine your style based on feedback
                  </span>
                </li>
              </ul>
              <p className="text-sm font-medium">
                Deliverable: Consistent content series with developed style
              </p>
            </div>

            <div className="border-2 border-[#a7f3d0] p-6 shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
              <h3 className="font-semibold mb-2">Presentation Phase</h3>
              <p className="text-sm text-gray-600 mb-4">Sessions 18-20</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Create portfolio of your best content pieces
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Develop plans for continued content creation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Practice presenting: what you created, why it matters, what
                    you learned, and future plans
                  </span>
                </li>
              </ul>
              <p className="text-sm font-medium">
                Deliverable: Content platform showcase for symposium
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}
