import { AgentCreation } from "@/components/agents/agent-creation";
import { AgentTable } from "@/components/agents/agent-table";

export default function Agents() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Agent Management</h1>
      
      <AgentCreation />
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Active Agents</h2>
        <AgentTable />
      </div>
    </div>
  );
}
