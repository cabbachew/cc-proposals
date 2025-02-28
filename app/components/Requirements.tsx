"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface RequirementsProps {
  requirements: string[];
}

const Requirements = ({ requirements }: RequirementsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Requirements</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-4 space-y-2">
          {requirements.map((requirement, index) => (
            <li key={index} className="text-gray-700">
              {requirement}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Requirements;
