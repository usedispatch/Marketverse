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
        <TableRow className="border-b border-calculator-text">
          <TableHead className="font-lcd">Asset</TableHead>
          <TableHead className="text-right font-lcd">Price</TableHead>
          <TableHead className="text-right font-lcd">24h Change</TableHead>
          <TableHead className="text-right font-lcd">Volume</TableHead>
          <TableHead className="text-right font-lcd">Supply</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="font-mono">
        {mockMarkets.map((market) => (
          <TableRow key={market.id} className="border-b border-calculator-text/50">
            <TableCell className="font-medium">{market.name}</TableCell>
            <TableCell className="text-right">{market.price} AOB</TableCell>
            <TableCell className={`text-right flex items-center justify-end ${market.change24h >= 0 ? 'text-calculator-success' : 'text-calculator-error'}`}>
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