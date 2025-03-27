import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robotics / Electronics / CAD Track",
  description: "Explore the robotics, electronics, and CAD learning track.",
};

export default function RoboticsTrackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
