import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { agentTemplates } from "@/lib/mock-data";

export function AgentCreation() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  return (
    <Card className="calculator-display lcd-container">
      <CardHeader className="border-b border-calculator-text">
        <CardTitle className="font-lcd text-xl">Agent Creation Terminal</CardTitle>
        <div className="calculator-display text-sm font-mono">
          STEP {step}/{totalSteps} - {step === 1 ? "SELECT TEMPLATE" : step === 2 ? "CONFIGURE STRATEGY" : "DEPLOYMENT"}
        </div>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <div className="space-y-6 pt-4">
            <div className="calculator-display p-2">
              <span className="text-calculator-dim">SELECT TEMPLATE [1-4]:</span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {agentTemplates.map((template, index) => (
                <Button
                  key={template.id}
                  variant="outline"
                  className="calculator-button h-auto p-4 justify-start flex flex-col items-start"
                  onClick={() => setStep(2)}
                >
                  <div className="font-lcd">[{index + 1}] {template.name}</div>
                  <div className="text-sm text-calculator-dim">{template.description}</div>
                </Button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 pt-4">
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
              <Button className="calculator-button w-full" onClick={() => setStep(3)}>
                NEXT [ENTER]
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 pt-4">
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
                <h4 className="font-lcd mb-2">STRATEGY PREVIEW:</h4>
                <ul className="text-sm space-y-1 font-mono text-calculator-dim">
                  <li>RISK: MEDIUM (5/10)</li>
                  <li>FREQ: MEDIUM (5/10)</li>
                  <li>SIZE: MEDIUM (5/10)</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-2 pt-4">
              <Button variant="outline" className="calculator-button flex-1" onClick={() => setStep(2)}>
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