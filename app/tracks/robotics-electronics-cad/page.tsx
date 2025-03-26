import { Metadata } from "next";
import { ProgramParameters } from "@/app/components/ProgramParameters";

export const metadata: Metadata = {
  title: "Robotics / Electronics / CAD Track",
  description: "Explore the robotics, electronics, and CAD learning track.",
};

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
          <div className="text-center text-muted-foreground">
            Select parameters to generate a sample program
          </div>
        </div>
      </div>
    </main>
  );
}
