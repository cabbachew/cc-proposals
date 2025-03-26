"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
// import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Cone, Cpu, Zap } from "lucide-react";

export function ProgramParameters() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Parameters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="domain">Focus Area</Label>
          <Select>
            <SelectTrigger id="domain">
              <SelectValue placeholder="Select domain" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="robotics">
                <div className="flex items-center gap-2">
                  <Cpu className="h-4 w-4 shrink-0" />
                  <span>Robotics</span>
                </div>
              </SelectItem>
              <SelectItem value="electronics">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 shrink-0" />
                  <span>Electronics</span>
                </div>
              </SelectItem>
              <SelectItem value="cad">
                <div className="flex items-center gap-2">
                  <Cone className="h-4 w-4 shrink-0" />
                  <span>CAD</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="experience">Experience Level</Label>
          <Select>
            <SelectTrigger id="experience">
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="interests">Interest Areas</Label>
          <Input
            id="interests"
            placeholder="e.g., mechanics, electronics, UI design"
            className="w-full"
          />
          <p className="text-xs text-muted-foreground">
            Comma-separated list of specific interests
          </p>
        </div>
        {/* 
        <div className="space-y-4">
          <Label>Weekly Time Commitment (hours)</Label>
          <Slider
            defaultValue={[6]}
            max={20}
            min={1}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1h</span>
            <span>6h</span>
            <span>20h</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="scope">Project Scope</Label>
          <Select>
            <SelectTrigger id="scope">
              <SelectValue placeholder="Select scope" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small (1-3 months)</SelectItem>
              <SelectItem value="medium">Medium (3-6 months)</SelectItem>
              <SelectItem value="large">Large (6+ months)</SelectItem>
            </SelectContent>
          </Select>
        </div> */}

        <Button className="w-full font-bold">Generate Sample Program</Button>
      </CardContent>
    </Card>
  );
}
