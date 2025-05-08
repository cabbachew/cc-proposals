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
          Timeless Skills. Real Impact. Transform Your Summer with a Powerful
          Project
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
                  <TableHead>
                    <div className="flex items-center gap-2">
                      <Microscope className="w-4 h-4" />
                      Research
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      Portfolio
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-2">
                      <Rocket className="w-4 h-4" />
                      Launch
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-2">
                      <Clapperboard className="w-4 h-4" />
                      Content
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Ideal For</TableCell>
                  <TableCell>
                    Students passionate about academic topics who want to
                    demonstrate research skills, intellectual curiosity, and
                    subject mastery
                  </TableCell>
                  <TableCell>
                    Students with technical or creative skills who want to
                    showcase abilities, creativity, and project completion
                  </TableCell>
                  <TableCell>
                    Students with vision to create change who want to highlight
                    leadership, initiative, and commitment to impact
                  </TableCell>
                  <TableCell>
                    Students who enjoy sharing ideas and want to exhibit
                    communication skills, creativity, and audience engagement
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Potential Deliverables
                  </TableCell>
                  <TableCell>
                    <ul className="list-none space-y-1">
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Research paper
                      </li>
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Literature review
                      </li>
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Research presentation
                      </li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-none space-y-1">
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Portfolio website
                      </li>
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Completed project
                      </li>
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Prototype
                      </li>
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Digital or physical creation
                      </li>
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Design portfolio
                      </li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-none space-y-1">
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Business concept
                      </li>
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Nonprofit/community initiative
                      </li>
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        School organization plan
                      </li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-none space-y-1">
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Written publication
                      </li>
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Social media presence
                      </li>
                      <li className="flex items-start gap-2">
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
                  <TableCell>
                    <ul className="list-none space-y-1">
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Academic research methods
                      </li>
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Critical analysis
                      </li>
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Scientific writing
                      </li>
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Data analysis
                      </li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-none space-y-1">
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Technical/creative skills
                      </li>
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Project development
                      </li>
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Design thinking
                      </li>
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Presentation
                      </li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-none space-y-1">
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Leadership
                      </li>
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Strategic planning
                      </li>
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Team building
                      </li>
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Communication
                      </li>
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Organizational management
                      </li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-none space-y-1">
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Content creation
                      </li>
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Audience building
                      </li>
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Personal branding
                      </li>
                      <li className="flex items-start gap-2">
                        <Dot className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        Multimedia production
                      </li>
                      <li className="flex items-start gap-2">
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
            <p className="text-lg text-gray-700">
              Explore our portfolio of summer programs and initiatives.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="research" className="mt-6">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700">
              Discover our research findings and insights on summer learning.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="launch" className="mt-6">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700">
              Learn about our upcoming program launches and initiatives.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="content" className="mt-6">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700">
              Access our summer program content and resources.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}
