import { AgentTable } from "@/components/agents/agent-table";
import { StatsCard } from "@/components/dashboard/stats-card";
import { mockStats, mockAgents } from "@/lib/mock-data";
import { Bot, Wallet, TrendingUp, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AgentCreationDialog } from "@/components/agents/agent-creation-dialog";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

export default function Agents() {
  // Add local state to track agents and force re-renders
  const [agents, setAgents] = useState(mockAgents);

  // Update local state when mockAgents changes
  useEffect(() => {
    setAgents([...mockAgents]);
  }, []);

  const hasAgents = agents.length > 0;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold font-lcd">Agent Dashboard</h1>
        {hasAgents && (
          <AgentCreationDialog onAgentCreated={() => setAgents([...mockAgents])} />
        )}
      </div>

      {hasAgents ? (
        <>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Active Agents"
              value={mockStats.activeAgents}
              icon={<Bot className="w-4 h-4 text-muted-foreground" />}
            />
            <StatsCard
              title="Portfolio Value"
              value={`${mockStats.totalPortfolioValue} AOB`}
              icon={<Wallet className="w-4 h-4 text-muted-foreground" />}
            />
            <StatsCard
              title="24h Performance"
              value={`${mockStats.performance24h}%`}
              change={mockStats.performance24h}
              icon={<TrendingUp className="w-4 h-4 text-muted-foreground" />}
            />
            <StatsCard
              title="Oracle Events"
              value={mockStats.oracleEvents}
              icon={<Bell className="w-4 h-4 text-muted-foreground" />}
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 font-lcd">Active Agents</h2>
            <AgentTable agents={agents} />
          </div>
        </>
      ) : (
        <Card className="calculator-display lcd-container">
          <CardContent className="py-16 flex flex-col items-center justify-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-calculator-dim/10 flex items-center justify-center">
              <Bot className="w-8 h-8 text-calculator-dim" />
            </div>
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold font-lcd">No Agents Yet</h2>
              <p className="text-calculator-dim font-mono max-w-md">
                Create your first trading agent to start participating in the market.
              </p>
            </div>
            <AgentCreationDialog onAgentCreated={() => setAgents([...mockAgents])} />
          </CardContent>
        </Card>
      )}
    </div>
  );
}