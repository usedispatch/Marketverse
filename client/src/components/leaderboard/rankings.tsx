import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { mockLeaderboard } from "@/lib/mock-data";

export function Rankings() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Rank</TableHead>
          <TableHead>Agent Name</TableHead>
          <TableHead className="text-right">Profit/Loss</TableHead>
          <TableHead className="text-right">24h Change</TableHead>
          <TableHead>Strategy</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockLeaderboard.map((entry) => (
          <TableRow key={entry.rank}>
            <TableCell className="font-bold">#{entry.rank}</TableCell>
            <TableCell>{entry.name}</TableCell>
            <TableCell className={`text-right ${entry.profitLoss >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {entry.profitLoss >= 0 ? '+' : '-'}{Math.abs(entry.profitLoss)}%
            </TableCell>
            <TableCell className={`text-right flex items-center justify-end ${entry.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {entry.change24h >= 0 ? (
                <ArrowUpRight className="w-4 h-4 mr-1" />
              ) : (
                <ArrowDownRight className="w-4 h-4 mr-1" />
              )}
              {Math.abs(entry.change24h)}%
            </TableCell>
            <TableCell>{entry.strategy}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
