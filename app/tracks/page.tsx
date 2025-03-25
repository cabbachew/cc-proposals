import { Metadata } from "next";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learning Tracks",
  description: "Explore learning tracks for your student's mentorship.",
};

export default function TracksPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Learning Tracks</h1>
      <div className="space-y-8">
        {/* Robotics / Electronics / CAD Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
            <Link
              href="/tracks/robotics-electronics-cad"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              Robotics / Electronics / CAD
              <ArrowUpRightIcon className="h-5 w-5" />
            </Link>
          </h2>
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              {/* Beginner Level */}
              <div className="p-4 border rounded-lg bg-white shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Beginner Level</h3>
                <ul className="space-y-2 text-sm">
                  <li>• LED Circuit & Basic Electronics</li>
                  <li>• Simple Robot Assembly (Kit-based)</li>
                  <li>• Basic CAD Design (Tinkercad)</li>
                  <li>• Arduino Programming Basics</li>
                </ul>
              </div>

              {/* Intermediate Level */}
              <div className="p-4 border rounded-lg bg-white shadow-sm">
                <h3 className="text-lg font-semibold mb-2">
                  Intermediate Level
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Custom Sensor Integration</li>
                  <li>• 3D Printed Robot Parts</li>
                  <li>• Advanced CAD (Fusion 360)</li>
                  <li>• Autonomous Navigation</li>
                </ul>
              </div>

              {/* Advanced Level */}
              <div className="p-4 border rounded-lg bg-white shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Advanced Level</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Custom Robot Design</li>
                  <li>• PCB Design & Assembly</li>
                  <li>• ROS Integration</li>
                  <li>• Competition Robotics</li>
                </ul>
              </div>

              {/* Specialized Focus */}
              <div className="p-4 border rounded-lg bg-white shadow-sm">
                <h3 className="text-lg font-semibold mb-2">
                  Specialized Focus
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Drone Development</li>
                  <li>• Robotic Arm Design</li>
                  <li>• AI-Enhanced Robotics</li>
                  <li>• Industrial Automation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Computer Science / Programming / AI Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
            Computer Science / Programming / AI
          </h2>
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              {/* Beginner Level */}
              <div className="p-4 border rounded-lg bg-white shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Beginner Level</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Python Programming Basics</li>
                  <li>• Web Development Fundamentals</li>
                  <li>• Game Design with Scratch</li>
                  <li>• Basic Algorithms & Logic</li>
                </ul>
              </div>

              {/* Intermediate Level */}
              <div className="p-4 border rounded-lg bg-white shadow-sm">
                <h3 className="text-lg font-semibold mb-2">
                  Intermediate Level
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Full-Stack Development</li>
                  <li>• Mobile App Development</li>
                  <li>• Unity Game Development</li>
                  <li>• Data Structures & Algorithms</li>
                </ul>
              </div>

              {/* Advanced Level */}
              <div className="p-4 border rounded-lg bg-white shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Advanced Level</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Machine Learning Projects</li>
                  <li>• Cloud Architecture</li>
                  <li>• Advanced Game Systems</li>
                  <li>• Competitive Programming</li>
                </ul>
              </div>

              {/* Specialized Focus */}
              <div className="p-4 border rounded-lg bg-white shadow-sm">
                <h3 className="text-lg font-semibold mb-2">
                  Specialized Focus
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• AI/ML Applications</li>
                  <li>• Blockchain Development</li>
                  <li>• AR/VR Development</li>
                  <li>• Cybersecurity</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
