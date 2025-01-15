import { StatsCard } from "@/components/dashboard/stats-card";
import { mockStats } from "@/lib/mock-data";
import { Bot, Wallet, TrendingUp, Bell } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>

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
    </div>
  );
}