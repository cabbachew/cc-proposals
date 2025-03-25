import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sample Learning Plans | CC Learning Proposals",
  description: "View sample learning plans for your student's mentorship.",
};

export default function ConsultsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Sample Learning Plans</h1>
      <div className="space-y-6">{/* Content will be added here */}</div>
    </main>
  );
}
