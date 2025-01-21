import { useParams } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownRight, Power, Wallet } from "lucide-react";
import { mockAgents } from "@/lib/mock-data";

export default function AgentDetail() {
  const { id } = useParams();
  const agent = mockAgents.find(a => a.id === Number(id));

  if (!agent) {
    return <div>Agent not found</div>;
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold font-lcd">{agent.name}</h1>
          <p className="text-calculator-dim font-mono">Agent Control Panel</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
          <Button variant="outline" className="calculator-button flex items-center gap-2 w-full sm:w-auto">
            <Power className="w-4 h-4" />
            Deactivate Agent
          </Button>
          <Button variant="destructive" className="calculator-button flex items-center gap-2 w-full sm:w-auto">
            <Wallet className="w-4 h-4" />
            Withdraw Funds
          </Button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card className="calculator-display lcd-container">
          <CardHeader className="border-b border-calculator-text">
            <CardTitle className="font-lcd">Performance</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 space-y-4">
            <div className="calculator-display p-3 sm:p-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-calculator-dim">Strategy</span>
                  <span className="font-mono">{agent.strategy}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-calculator-dim">Status</span>
                  <span className="font-mono">{agent.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-calculator-dim">Profit/Loss</span>
                  <span className={`font-mono flex items-center ${agent.profitLoss >= 0 ? 'text-calculator-success' : 'text-calculator-error'}`}>
                    {agent.profitLoss >= 0 ? (
                      <ArrowUpRight className="w-4 h-4 mr-1" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 mr-1" />
                    )}
                    {Math.abs(agent.profitLoss)}%
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="calculator-display lcd-container">
          <CardHeader className="border-b border-calculator-text">
            <CardTitle className="font-lcd">Configuration</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 space-y-4">
            <div className="calculator-display p-3 sm:p-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-calculator-dim">Risk Level</span>
                  <span className="font-mono">7/10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-calculator-dim">Trading Frequency</span>
                  <span className="font-mono">5/10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-calculator-dim">Position Size</span>
                  <span className="font-mono">3/10</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}