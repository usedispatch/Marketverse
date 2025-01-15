import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { mockAgents } from "@/lib/mock-data";

export function AgentTable() {
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
        {mockAgents.map((agent) => (
          <TableRow key={agent.id}>
            <TableCell className="font-medium">{agent.name}</TableCell>
            <TableCell>{agent.strategy}</TableCell>
            <TableCell className={`text-right ${agent.profitLoss >= 0 ? 'text-green-500' : 'text-red-500'}`}>
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
