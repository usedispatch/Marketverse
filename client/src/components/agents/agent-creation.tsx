import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { agentTemplates, personalityTemplates } from "@/lib/mock-data";

export function AgentCreation() {
  const [step, setStep] = useState(1);
  const [selectedPersonality, setSelectedPersonality] = useState<string | null>(null);
  const [customPrompt, setCustomPrompt] = useState<string>("");
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

  return (
    <Card className="calculator-display lcd-container">
      <CardHeader className="border-b border-calculator-text">
        <CardTitle className="font-lcd text-xl">Agent Creation Terminal</CardTitle>
        <div className="calculator-display text-sm font-mono animate-calculator-fade">
          STEP {step}/{totalSteps} - {
            step === 1 ? "SELECT TEMPLATE" : 
            step === 2 ? "CONFIGURE PERSONALITY" :
            step === 3 ? "CONFIGURE STRATEGY" : 
            "DEPLOYMENT"
          }
        </div>
      </CardHeader>
      <CardContent id="agent-creation-content" className="calculator-transition">
        {step === 1 && (
          <div className="space-y-6 pt-4 animate-calculator-slide">
            <div className="calculator-display p-2">
              <span className="text-calculator-dim">SELECT TEMPLATE [1-4]:</span>
            </div>
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
            <div className="calculator-display p-2">
              <span className="text-calculator-dim">SELECT PERSONALITY [1-4]:</span>
            </div>
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
              <Label className="font-lcd mb-2">PERSONALITY PROMPT:</Label>
              <div className="text-xs text-calculator-dim mb-2">
                Customize your agent's behavior and decision-making process
              </div>
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
            <div className="calculator-display p-2">
              <span className="text-calculator-dim">CONFIGURE PARAMETERS:</span>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label className="font-lcd">RISK TOLERANCE [1-10]</Label>
                <Slider defaultValue={[5]} max={10} step={1} className="calculator-display" />
                <div className="calculator-display text-right font-mono">5</div>
              </div>

              <div className="space-y-2">
                <Label className="font-lcd">TRADING FREQUENCY [1-10]</Label>
                <Slider defaultValue={[5]} max={10} step={1} className="calculator-display" />
                <div className="calculator-display text-right font-mono">5</div>
              </div>

              <div className="space-y-2">
                <Label className="font-lcd">POSITION SIZE [1-10]</Label>
                <Slider defaultValue={[5]} max={10} step={1} className="calculator-display" />
                <div className="calculator-display text-right font-mono">5</div>
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
            <div className="calculator-display p-2">
              <span className="text-calculator-dim">DEPLOYMENT CONFIG:</span>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="font-lcd">AGENT NAME:</Label>
                <Input className="calculator-display font-mono" placeholder="ENTER NAME" />
              </div>

              <div className="space-y-2">
                <Label className="font-lcd">INITIAL CAPITAL (AOB):</Label>
                <Input type="number" className="calculator-display font-mono" placeholder="ENTER AMOUNT" />
              </div>

              <div className="calculator-display p-4 mt-4">
                <h4 className="font-lcd mb-2">AGENT CONFIGURATION:</h4>
                <ul className="text-sm space-y-1 font-mono text-calculator-dim">
                  <li>TEMPLATE: VALUE SEEKER</li>
                  <li>PERSONALITY: {selectedPersonality?.toUpperCase() || "NOT SET"}</li>
                  <li>RISK: MEDIUM (5/10)</li>
                  <li>FREQ: MEDIUM (5/10)</li>
                  <li>SIZE: MEDIUM (5/10)</li>
                </ul>

                <div className="mt-4">
                  <h5 className="font-lcd text-sm mb-1">PERSONALITY PROMPT:</h5>
                  <div className="text-xs font-mono text-calculator-dim whitespace-pre-wrap">
                    {customPrompt}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2 pt-4">
              <Button variant="outline" className="calculator-button flex-1" onClick={prevStep}>
                BACK [ESC]
              </Button>
              <Button className="calculator-button flex-1">
                DEPLOY [ENTER]
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}