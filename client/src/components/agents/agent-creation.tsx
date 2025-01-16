import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { agentTemplates } from "@/lib/mock-data";

export function AgentCreation() {
  const [selectedTemplate, setSelectedTemplate] = useState(agentTemplates[0]);

  return (
    <Card className="calculator-display lcd-container">
      <CardHeader className="border-b border-calculator-text">
        <CardTitle className="font-lcd">Agent Creation Terminal</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {/* Template Selection */}
        <div className="space-y-4">
          <Label className="font-lcd">SELECT TEMPLATE [1-4]:</Label>
          <div className="grid grid-cols-2 gap-4">
            {agentTemplates.map((template, index) => (
              <Button
                key={template.id}
                variant={selectedTemplate.id === template.id ? "default" : "outline"}
                className="calculator-button h-auto p-4 justify-start flex flex-col items-start"
                onClick={() => setSelectedTemplate(template)}
              >
                <div className="font-lcd">[{index + 1}] {template.name}</div>
                <div className="text-sm text-calculator-dim">{template.description}</div>
              </Button>
            ))}
          </div>
        </div>

        {/* Basic Configuration */}
        <div className="calculator-display p-4 space-y-4">
          <div className="space-y-2">
            <Label className="font-lcd">AGENT NAME:</Label>
            <Input className="calculator-display font-mono" placeholder="ENTER NAME" />
          </div>

          <div className="space-y-2">
            <Label className="font-lcd">INITIAL CAPITAL [AOB]:</Label>
            <Input 
              type="number" 
              className="calculator-display font-mono" 
              placeholder="MIN: 1000"
            />
          </div>
        </div>

        {/* Risk Parameters */}
        <div className="calculator-display p-4 space-y-4">
          <Label className="font-lcd">RISK LEVEL [1-5]:</Label>
          <div className="grid grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5].map((level) => (
              <Button
                key={level}
                variant="outline"
                className="calculator-button aspect-square"
              >
                {level}
              </Button>
            ))}
          </div>
          <div className="text-xs text-calculator-dim">
            1: Very Safe | 3: Balanced | 5: Aggressive
          </div>
        </div>

        {/* Deploy Button */}
        <Button className="calculator-button w-full">
          [ENTER] DEPLOY AGENT
        </Button>

        {/* Help Text */}
        <div className="text-xs text-calculator-dim space-y-1">
          <div>[1-4] Select Template</div>
          <div>[1-5] Set Risk Level</div>
          <div>[ENTER] Deploy Agent</div>
          <div>[ESC] Cancel</div>
        </div>
      </CardContent>
    </Card>
  );
}