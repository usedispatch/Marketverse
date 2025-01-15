import { AgentCreation } from "@/components/agents/agent-creation";
import { AgentTable } from "@/components/agents/agent-table";
import { StatsCard } from "@/components/dashboard/stats-card";
import { mockStats } from "@/lib/mock-data";
import { Bot, Wallet, TrendingUp, Bell } from "lucide-react";

export default function Agents() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Agent Dashboard</h1>

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

      <AgentCreation />

      <div>
        <h2 className="text-2xl font-bold mb-4">Active Agents</h2>
        <AgentTable />
      </div>
    </div>
  );
}