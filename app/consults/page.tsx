import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sample Learning Plans | CC Learning Proposals",
  description: "View sample learning plans for your student's mentorship.",
};

export default function ConsultsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Sample Learning Plans</h1>
      <div className="space-y-8">
        {/* Robotics / Electronics / CAD Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
            Robotics / Electronics / CAD
          </h2>
          <div className="space-y-4">{/* Content will be added here */}</div>
        </section>

        {/* Computer Science / Programming / AI Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
            Computer Science / Programming / AI
          </h2>
          <div className="space-y-4">{/* Content will be added here */}</div>
        </section>
      </div>
    </main>
  );
}
