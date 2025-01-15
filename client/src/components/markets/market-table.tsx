import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { mockMarkets } from "@/lib/mock-data";

export function MarketTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Asset</TableHead>
          <TableHead className="text-right">Price</TableHead>
          <TableHead className="text-right">24h Change</TableHead>
          <TableHead className="text-right">Volume</TableHead>
          <TableHead className="text-right">Supply</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockMarkets.map((market) => (
          <TableRow key={market.id}>
            <TableCell className="font-medium">{market.name}</TableCell>
            <TableCell className="text-right">{market.price} AOB</TableCell>
            <TableCell className={`text-right flex items-center justify-end ${market.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {market.change24h >= 0 ? (
                <ArrowUpRight className="w-4 h-4 mr-1" />
              ) : (
                <ArrowDownRight className="w-4 h-4 mr-1" />
              )}
              {Math.abs(market.change24h)}%
            </TableCell>
            <TableCell className="text-right">{(market.volume / 1000).toFixed(1)}K</TableCell>
            <TableCell className="text-right">{market.supply}/{market.maxSupply}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
