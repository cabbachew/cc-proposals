import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LayoutDashboard,
  Briefcase,
  Microscope,
  Rocket,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Summer Programs | CC Learning Proposals",
  description: "Explore summer learning opportunities and programs.",
};

export default function SummerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Timeless Skills. Real Impact.</h1>

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
            <FileText className="w-4 h-4 mr-2 inline" />
            Content
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700">
              Welcome to our summer programs page. Here you&apos;ll find
              information about various summer learning opportunities and
              activities.
            </p>
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
