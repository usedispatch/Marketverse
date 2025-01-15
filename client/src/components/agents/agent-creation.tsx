import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { agentTemplates } from "@/lib/mock-data";

export function AgentCreation() {
  const [step, setStep] = useState(1);
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Agent</CardTitle>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <div className="grid gap-6">
            <h3 className="text-lg font-semibold">Select Template</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {agentTemplates.map((template) => (
                <Button
                  key={template.id}
                  variant="outline"
                  className="h-auto p-4 justify-start flex flex-col items-start"
                  onClick={() => setStep(2)}
                >
                  <div className="font-semibold">{template.name}</div>
                  <div className="text-sm text-muted-foreground">{template.description}</div>
                </Button>
              ))}
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div className="grid gap-6">
            <h3 className="text-lg font-semibold">Configure Strategy</h3>
            
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label>Risk Tolerance</Label>
                <Slider defaultValue={[5]} max={10} step={1} />
              </div>
              
              <div className="grid gap-2">
                <Label>Trading Frequency</Label>
                <Slider defaultValue={[5]} max={10} step={1} />
              </div>
              
              <div className="grid gap-2">
                <Label>Initial Capital</Label>
                <Input type="number" placeholder="Amount in AOB" />
              </div>
              
              <div className="grid gap-2">
                <Label>Agent Name</Label>
                <Input placeholder="Enter agent name" />
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
              <Button>Deploy Agent</Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
