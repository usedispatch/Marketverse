import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "wouter";
import type { Agent } from "@/types/agent";

interface AgentTableProps {
  agents: Agent[];
}

export function AgentTable({ agents }: AgentTableProps) {
  const [, navigate] = useLocation();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Agent Name</TableHead>
          <TableHead>Strategy</TableHead>
          <TableHead className="text-right">Profit/Loss</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {agents.map((agent) => (
          <TableRow 
            key={agent.id} 
            className="cursor-pointer hover:bg-calculator-dim/10"
            onClick={() => navigate(`/agent/${agent.id}`)}
          >
            <TableCell className="font-medium">{agent.name}</TableCell>
            <TableCell>{agent.strategy}</TableCell>
            <TableCell className={`text-right ${agent.profitLoss >= 0 ? 'text-calculator-success' : 'text-calculator-error'}`}>
              {agent.profitLoss >= 0 ? '+' : '-'}{Math.abs(agent.profitLoss)}%
            </TableCell>
            <TableCell>
              <Badge variant={agent.status === "Active" ? "default" : "secondary"}>
                {agent.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}