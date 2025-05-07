import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Summer Programs | CC Learning Proposals",
  description: "Explore summer learning opportunities and programs.",
};

export default function SummerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Summer Programs</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700">
          Welcome to our summer programs page. Here you'll find information
          about various summer learning opportunities and activities.
        </p>
      </div>
    </main>
  );
}
