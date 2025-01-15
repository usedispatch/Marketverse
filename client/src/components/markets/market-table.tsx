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
    <div className="space-y-4">
      {/* Market Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {mockMarkets.map((market) => (
          <div key={market.id} className="calculator-display p-2 font-mono animate-lcd-blink">
            <div className="text-xs text-calculator-dim">{market.id}</div>
            <div className="flex items-center justify-between">
              <span>{market.price}</span>
              <span className={market.change24h >= 0 ? 'text-calculator-success' : 'text-calculator-error'}>
                {market.change24h >= 0 ? '↑' : '↓'}{Math.abs(market.change24h)}%
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Market Table */}
      <Table>
        <TableHeader>
          <TableRow className="border-b-2 border-calculator-text">
            <TableHead className="font-lcd">ASSET</TableHead>
            <TableHead className="text-right font-lcd">PRICE</TableHead>
            <TableHead className="text-right font-lcd">24H CHANGE</TableHead>
            <TableHead className="text-right font-lcd">VOLUME</TableHead>
            <TableHead className="text-right font-lcd">SUPPLY</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="font-mono">
          {mockMarkets.map((market) => (
            <TableRow 
              key={market.id} 
              className="border-b border-calculator-text/50 hover:bg-calculator-dim/10 cursor-pointer"
            >
              <TableCell className="font-medium">
                <div className="flex flex-col">
                  <span>{market.name}</span>
                  <span className="text-xs text-calculator-dim">{market.id}</span>
                </div>
              </TableCell>
              <TableCell className="text-right tabular-nums">{market.price} AOB</TableCell>
              <TableCell className={`text-right flex items-center justify-end ${market.change24h >= 0 ? 'text-calculator-success' : 'text-calculator-error'}`}>
                {market.change24h >= 0 ? (
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 mr-1" />
                )}
                {Math.abs(market.change24h)}%
              </TableCell>
              <TableCell className="text-right tabular-nums">{(market.volume / 1000).toFixed(1)}K</TableCell>
              <TableCell className="text-right tabular-nums">
                <div className="flex flex-col items-end">
                  <span>{market.supply}</span>
                  <span className="text-xs text-calculator-dim">/ {market.maxSupply}</span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}