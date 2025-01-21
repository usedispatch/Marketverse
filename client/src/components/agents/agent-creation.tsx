import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { agentTemplates, personalityTemplates, mockAgents, mockStats } from "@/lib/mock-data";
import type { Agent } from "@/types/agent";
import { useToast } from "@/hooks/use-toast";

interface AgentCreationProps {
  onClose: () => void;
}

const getRiskDescription = (value: number) => {
  if (value <= 2) return "Very Conservative - Minimal risk, focus on capital preservation";
  if (value <= 4) return "Conservative - Lower risk, steady approach";
  if (value <= 6) return "Moderate - Balanced risk-reward ratio";
  if (value <= 8) return "Aggressive - Higher risk for better returns";
  return "Very Aggressive - Maximum risk for highest potential returns";
};

const getFrequencyDescription = (value: number) => {
  if (value <= 2) return "Very Low - Few trades per week";
  if (value <= 4) return "Low - 1-2 trades per day";
  if (value <= 6) return "Medium - Several trades per day";
  if (value <= 8) return "High - Multiple trades per hour";
  return "Very High - Constant trading activity";
};

const getPositionDescription = (value: number) => {
  if (value <= 2) return "Micro - 1-2% of portfolio per trade";
  if (value <= 4) return "Small - 5% of portfolio per trade";
  if (value <= 6) return "Medium - 10% of portfolio per trade";
  if (value <= 8) return "Large - 15-20% of portfolio per trade";
  return "Maximum - 25% of portfolio per trade";
};

export function AgentCreation({ onClose }: AgentCreationProps) {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [selectedPersonality, setSelectedPersonality] = useState<string | null>(null);
  const [customPrompt, setCustomPrompt] = useState<string>("");
  const [riskLevel, setRiskLevel] = useState(5);
  const [frequencyLevel, setFrequencyLevel] = useState(5);
  const [positionLevel, setPositionLevel] = useState(5);
  const [agentName, setAgentName] = useState("");
  const [initialCapital, setInitialCapital] = useState("");
  const totalSteps = 4;

  const nextStep = () => {
    const element = document.getElementById('agent-creation-content');
    if (element) {
      element.classList.remove('animate-calculator-step');
      void element.offsetWidth; // Trigger reflow
      element.classList.add('animate-calculator-step');
    }
    setStep(prev => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => {
    const element = document.getElementById('agent-creation-content');
    if (element) {
      element.classList.remove('animate-calculator-step');
      void element.offsetWidth; // Trigger reflow
      element.classList.add('animate-calculator-step');
    }
    setStep(prev => Math.max(prev - 1, 1));
  };

  const createAgent = (): Agent => ({
    id: mockAgents.length + 1,
    name: agentName || `Agent ${mockAgents.length + 1}`,
    strategy: "Value Seeker",
    profitLoss: 0,
    status: "Active",
    config: {
      riskLevel,
      frequencyLevel,
      positionLevel,
      personality: selectedPersonality
    }
  });

  const handleDeploy = () => {
    try {
      const newAgent = createAgent();
      mockAgents.push(newAgent);

      // Update mock stats
      mockStats.activeAgents = mockAgents.length;
      mockStats.totalPortfolioValue = (initialCapital ? parseInt(initialCapital, 10) : 10000) * mockAgents.length;

      toast({
        title: "Agent Created",
        description: `Successfully deployed ${newAgent.name}`,
      });

      // Close the dialog
      onClose();
    } catch (error) {
      console.error('Error creating agent:', error);
      toast({
        title: "Error",
        description: "Failed to create agent",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="calculator-display lcd-container">
      <CardHeader className="border-b border-calculator-text">
        <CardTitle className="font-lcd text-xl">AGENT CREATION [{step}/{totalSteps}]</CardTitle>
      </CardHeader>
      <CardContent id="agent-creation-content" className="calculator-transition">
        {step === 1 && (
          <div className="space-y-6 pt-4 animate-calculator-slide">
            <div className="grid gap-4 md:grid-cols-2">
              {agentTemplates.map((template, index) => (
                <Button
                  key={template.id}
                  variant="outline"
                  className="calculator-button h-auto p-4 justify-start flex flex-col items-start"
                  onClick={nextStep}
                >
                  <div className="font-lcd">[{index + 1}] {template.name}</div>
                  <div className="text-sm text-calculator-dim">{template.description}</div>
                </Button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 pt-4 animate-calculator-slide">
            <div className="grid gap-4 md:grid-cols-2">
              {personalityTemplates.map((personality, index) => (
                <Button
                  key={personality.id}
                  variant="outline"
                  className={`calculator-button h-auto p-4 justify-start flex flex-col items-start ${
                    selectedPersonality === personality.id ? "border-2" : ""
                  }`}
                  onClick={() => {
                    setSelectedPersonality(personality.id);
                    setCustomPrompt(personality.prompt);
                  }}
                >
                  <div className="font-lcd">[{index + 1}] {personality.name}</div>
                  <div className="text-sm text-calculator-dim">{personality.description}</div>
                </Button>
              ))}
            </div>

            <div className="calculator-display p-4">
              <Label className="font-lcd mb-2">PROMPT</Label>
              <Textarea
                className="calculator-display mt-2 font-mono text-sm"
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="Enter custom personality prompt..."
                rows={4}
              />
            </div>

            <div className="pt-4">
              <Button
                className="calculator-button w-full"
                onClick={nextStep}
                disabled={!customPrompt.trim()}
              >
                NEXT [ENTER]
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 pt-4 animate-calculator-slide">
            <div className="space-y-6">
              <div className="calculator-display p-4 space-y-4">
                <div className="space-y-2">
                  <Label className="font-lcd">Risk Level: {riskLevel}/10</Label>
                  <Slider
                    value={[riskLevel]}
                    onValueChange={([value]) => setRiskLevel(value)}
                    max={10}
                    step={1}
                    className="calculator-display"
                  />
                  <div className="font-mono text-sm text-calculator-dim">
                    {getRiskDescription(riskLevel)}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="font-lcd">Trading Frequency: {frequencyLevel}/10</Label>
                  <Slider
                    value={[frequencyLevel]}
                    onValueChange={([value]) => setFrequencyLevel(value)}
                    max={10}
                    step={1}
                    className="calculator-display"
                  />
                  <div className="font-mono text-sm text-calculator-dim">
                    {getFrequencyDescription(frequencyLevel)}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="font-lcd">Position Size: {positionLevel}/10</Label>
                  <Slider
                    value={[positionLevel]}
                    onValueChange={([value]) => setPositionLevel(value)}
                    max={10}
                    step={1}
                    className="calculator-display"
                  />
                  <div className="font-mono text-sm text-calculator-dim">
                    {getPositionDescription(positionLevel)}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button className="calculator-button w-full" onClick={nextStep}>
                NEXT [ENTER]
              </Button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6 pt-4 animate-calculator-slide">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="font-lcd">Agent Name</Label>
                <Input
                  className="calculator-display font-mono"
                  placeholder="ENTER NAME"
                  value={agentName}
                  onChange={(e) => setAgentName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label className="font-lcd">Initial Capital (AOB)</Label>
                <Input
                  type="number"
                  className="calculator-display font-mono"
                  placeholder="ENTER AMOUNT"
                  value={initialCapital}
                  onChange={(e) => setInitialCapital(e.target.value)}
                />
              </div>

              <div className="calculator-display p-4 mt-4">
                <h4 className="font-lcd mb-2">CONFIGURATION</h4>
                <ul className="text-sm space-y-1 font-mono text-calculator-dim">
                  <li>TEMPLATE: VALUE SEEKER</li>
                  <li>PERSONALITY: {selectedPersonality?.toUpperCase() || "NOT SET"}</li>
                  <li>RISK: {getRiskDescription(riskLevel)}</li>
                  <li>FREQ: {getFrequencyDescription(frequencyLevel)}</li>
                  <li>SIZE: {getPositionDescription(positionLevel)}</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-2 pt-4">
              <Button variant="outline" className="calculator-button flex-1" onClick={prevStep}>
                BACK [ESC]
              </Button>
              <Button
                className="calculator-button flex-1"
                onClick={handleDeploy}
                disabled={!agentName.trim()}
              >
                DEPLOY [ENTER]
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}